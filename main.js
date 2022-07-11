const express = require('express')
const app = express()
const port = 3001

app.get("/", (req, res) => {
    res.send("hello wowrld~~");
});

app.listen(port, () => {
    console.log(`running on port ${port}`);
});