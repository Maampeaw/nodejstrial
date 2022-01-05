
const http = require('http');
const express = require("express")
const multiply = require('./multiply.js')
const hostname= '127.0.0.1';
const port = 5050
const {fibonacciNumbers} = require('./fibonacci')
const bodyParser = require('body-parser')
const {findLCM} = require('./lcm')


const app = express();
app.use(bodyParser.json())

app.post("/", (req, res) =>{
    console.log(multiply.multiplyVal(req.body.a, req.body.b))
})

app.post("/fibonacci", (req, res) =>{
   fibonacciNumbers(req.body.a)
    console.log(req.body.a)
})
 
app.post("/lcm", (req, res) => {
    findLCM(req.body.a, req.body.b)
})



app.listen(port, hostname, ()=>{
    console.log(`server running at ${hostname}:${port}/`)
    
})