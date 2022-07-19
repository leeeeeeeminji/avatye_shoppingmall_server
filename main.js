const express = require('express')
const port = 3001
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

//connect.js의 연결 정보 불러오기
const db = require('./connect.js')

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended : true}))

//session
const session = require('express-session')
const MySQLStore = require('express-mysql-session')(session);

app.use(cors({
    origin :true,
    credentials : true
}))
app.use(
    session({
        key : "loginData",
        secret : "testSecret",
        resave : false,
        saveUninitialized : true,
        store : new MySQLStore({
            host : 'localhost',
            user : 'root',
            password : '',
            database : 'shoppingmall'
        }),
        cookie : {
            expires : 1*60*60*1000
        }
    })
);

//회원가입 하기
app.post("/api/join", (req, res) => {
    const id = req.body.cusID
    const pw = req.body.cusPassword
    const name = req.body.cusName
    const email = req.body.cusEmail

    //회원가입 쿼리
    const joinQuery = "INSERT INTO customer (cusID, cusPassword, cusName, cusEmail) VALUES (?, ?, ?, ?)"
    db.query(joinQuery, [id, pw, name, email], (err, result) => {
        console.log(result);
        res.send(result)
    })
})


//로그인 하기
app.post("/api/login", (req, res) => {
    const id = req.body.cusID
    const pw = req.body.cusPW

    //입력된 id와 동일한 id 가 db에 있는지 확인
    const idQuery = "SELECT * FROM customer WHERE cusID = ?"
    db.query(idQuery, id, (err, rows) => {
        if(rows.length) {
            if (rows[0].cusID == id ) {
                //id가 존재할 경우, 비밀번호 확인
                const pwQuery = "SELECT * FROM customer WHERE cusPassword = ?"
                db.query(pwQuery, pw, (err, rows) => {
                    if (err){
                        throw err
                    }
                    if(rows.length) {
                        //로그인 성공, 세션해야됨
                        req.session.loginData = [id, pw];
                        console.log(req.session);
                        res.redirect("/")
                    } else{
                        //비밀번호 오류
                        res.send("비밀번호가 틀렸습니다.");
                    }
                })
            }
        } else {
            //아이디 없음
            res.send("아이디가 존재하지 않습니다.");
        }
    })
});

//아이디 중복 확인
app.get("/api/idcheck", (req, res) => {
    const id = req.query.checkid;
    db.query("SELECT * FROM customer WHERE cusID = ?", id, (err, rows) => {
        if(rows.length) {
            if (rows[0].cusID == id ) {
                res.send("중복된 아이디 입니다.")
            }
        } else {
            res.json("사용 가능한 아이디입니다.")
        }
    })
});


//상품검색
app.get("/api/search", (req,res) => {
    console.log(req.session.loginData)
    const item = req.query.item
    const listQuery = `SELECT * FROM product WHERE productName LIKE '%${item}%'`
    db.query(listQuery, (err, result) => {
        res.send(result)
    })
})

//상품목록
app.get("/api/list", (req,res) => {
    const listQuery = 'SELECT * FROM product'
    db.query(listQuery, (err, result) => {
        res.send(result)
    })
})

//상품 상세, 주문에서도 똑같이 사용
app.get("/api/detail", (req, res) => {
    const id = req.query.productID;
    db.query("SELECT * FROM product WHERE productID = ?", id, (err, result) => {
        res.send(result)
    })
})

app.get('/', function(req, res){
    res.send('Hello World');
});


app.listen(port, () => {
    console.log(`running on port ${port}`);
});