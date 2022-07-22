const express = require('express')
const port = 3001
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const secret = require('./jwt.js')

//connect.js의 연결 정보 불러오기
const db = require('./connect.js')


app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended : true}))

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
    let loginCheck = ''

    //입력된 id와 동일한 id 가 db에 있는지 확인
    const idQuery = "SELECT * FROM customer WHERE cusID = ?"
    db.query(idQuery, id, (err, rows) => {
        if(rows.length) {
            if (rows[0].cusID == id ) {
                //id가 존재할 경우, 비밀번호 확인
                const pwQuery = "SELECT * FROM customer WHERE cusID = ? and cusPassword = ?"
                db.query(pwQuery, [id, pw] , (err, rows) => {
                    if (err){
                        throw err
                    }
                    if(rows.length) {
                        //로그인 성공
                        //JWT sign()로 토큰 생성
                        let token = jwt.sign({
                            userid : id
                        }, secret.secret, 
                        {
                            expiresIn : '5m'
                        })
                        //쿠키에 토큰값 저장
                        res.cookie("user", token);
                        res.json({
                            token : token,
                            userid : id
                        })
                    } else{
                        //비밀번호 오류
                        loginCheck = 'wrongPW'
                        res.send(loginCheck)
                    }
                })
            }
        } else {
            //아이디 없음
            loginCheck = 'noID'
            res.send(loginCheck)
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

//상품 상세
app.get("/api/detail", (req, res) => {
    const id = req.query.productID;
    db.query("SELECT * FROM product WHERE productID = ?", id, (err, result) => {
        res.send(result)
    })
})

//원래 주문
// app.get("/api/order", (req, res) => {
//     const id = req.query.productID;
//     db.query("SELECT * FROM product WHERE productID in (" + id.toString() + ")", (err, result) => {
//         res.send(result)
//     })
// });

//주문 - 디테일에서 들어온 경우 (detailorder)
// app.get("/api/detailorder", (req, res) => {
//     const id = req.query.productID;
//     db.query("SELECT * FROM product WHERE productID = ?", id, (err, result) => {
//         res.send(result)
//     })
// });

//주문 - 장바구니에서 들어온 경우 (cartorder)
// app.get("/api/cartorder", (req, res) => {
//     const id = req.query.userid;
//     db.query("SELECT * FROM cart WHERE userid = ?", id, (err, result) => {
//         res.send(result)
//     })
// });


//장바구니 넣기
app.post("/api/insertCart", (req, res) => {
    const productid = req.body.productID;
    const userid = req.body.userID;
    const quantity = req.body.quantity;
    const finalPrice = req.body.finalPrice;
    let check = true;

    const checkcart = "SELECT * FROM cart WHERE cusID = ? and productID = ?"
    db.query(checkcart, [userid, productid], (err, result) => {
        if (err){
            console.log("error : ", err )
        } else if (result.length) {
            check = false;
            res.send(check)
        } else {
            const cartQuery = "INSERT INTO cart (cusID, productID, quantity, finalprice) VALUES (?,?,?,?)"
            db.query(cartQuery, [userid, productid, quantity, finalPrice], (err, result) => {
                res.send(check)
            })
        }
    } )
});

//장바구니 불러오기
app.get("/api/getCart", (req, res) => {
    const userid = req.query.userid;
    const cartQuery2 = "SELECT * FROM product p INNER JOIN cart c ON p.productID = c.productID WHERE cusID = ?"
    db.query(cartQuery2, userid, (err, result) => {
        res.send(result)
    })
})

//마이페이지 유저 정보 불러오기
app.get('/api/mypage', (req, res) => {
    const userid = req.query.userid;
    db.query("SELECT cusID, cusName, cusEmail FROM customer WHERE cusID = ?", userid, (err, result) => {
        res.send(result);
    })
})

//마이페이지 정보 수정
app.put('/api/updateInfo', (req, res) => {

})

//주문 내역에 넣기!!!
app.post('api/orders', (req, res) =>{
    const {id, adr, phone, price, proId, qty} = req.body;
    const insert1 = "INSERT INTO order (CusID, address, phonenumber, finalprice) VALUES (?, ?, ?, ?)"
    const insert2 = "INSERT INTO orderDetails (orderID, productID, orderQuantity) VALUES (?, ?, ?)"
})

app.get('/', function(req, res){
    res.send('Hello World');
});


app.listen(port, () => {
    console.log(`running on port ${port}`);
});