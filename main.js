const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 3001

//connect.js에 저장된 연결정보 불러오기
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
                        //로그인 성공
                        res.json("드디어 로그인 성공")
                    } else{
                        //비밀번호 오류
                        res.json("비밀번호가 틀립니다.")
                    }
                })
            }
        } else {
            //아이디 없음
            res.json("아이디가 존재하지 않습니다.")
        }
    })
});


//상품검색
app.post("/api/search", (req,res) => {
    const item = req.body.searchItem
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

app.listen(port, () => {
    console.log(`running on port ${port}`);
});