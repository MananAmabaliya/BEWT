const http = require('http')

const server =http.createServer((req,res)=>{
    res.statusCode =200
    res.setHeader('content-Type','text/plain')
    res.end('hello from p1')
})

server.listen(3000,()=>{
    console.log('Server start at @3000')
})