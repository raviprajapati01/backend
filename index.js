require('dotenv').config();
const express = require('express');
const app = express();

const port = process.env.PORT || 4000;

const userinfo = {
    "id": 101,
    "name" : "ravi",
    "age" : 22,
    "city" : "bhopal"

}

app.get('/', (req, res) => {
    res.send("<h1> Welcome to the Backend master class</h1>")
})

app.get('/userinfo', (req, res) => {
    res.json(userinfo);
})

app.listen(port, ()=>{
    console.log(`app is listen port no ${port}`);
})