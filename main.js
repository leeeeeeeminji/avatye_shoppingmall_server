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

app.get("/", (req, res) => {
    res.send("hello wowrld");
});

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

    //회원가입 쿼리
    const loginQuery = "SELECT * FROM customer WHERE cusID = ? and cusPassword = ?"
    db.query(loginQuery, [id, pw], (err, result) => {
        //login 되게 바꿔야됨.
        console.log(result);
        res.send(result)
    })
})

app.listen(port, () => {
    console.log(`running on port ${port}`);
});