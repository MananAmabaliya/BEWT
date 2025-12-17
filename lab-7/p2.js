const http = require('http')

const server =http.createServer((req,res)=>{
    res.setHeader('content-Type','text/plain')

    if(req.url === '/'){
    res.statusCode =200
    res.end(' Welcome to Home Page')
    }
    else if(req.url==='/about'){
        res.statusCode =200
        res.end('Welcome to about')
    }
     else if(req.url==='/contact'){
        res.statusCode =200
        res.end('Welcome to contact')
    }
     else if(req.url==='/help'){
        res.statusCode =200
        res.end('Welcome to help')
    }
     else if (req.url==='/description'){
        res.statusCode =200
        res.end('Welcome to description')
    }
     else{
        res.statusCode =404
        res.end('Page not found  '+ res.statusCode)
    }

})

server.listen(3000,()=>{
    console.log('Server start at @3000')
})