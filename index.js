
const http = require('http');

const multiply = require('./addition.js')
const hostname= '127.0.0.1';
const port = 5050
const {fibonacciNumbers} = require('./fibonacci')

const multipication = multiply.multiplyVal(2, 3)


const server = http.createServer((req, res) => {
    res.end(`
    ${userData}
    `)
    res.end(`answer is ${multipication}`)
    
})
server.listen(port, hostname, ()=>{
    console.log(`server running at ${hostname}:${port}/`)
    fibonacciNumbers(5)
})