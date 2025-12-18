const express = require('express')

const app=express()

app.get('/',(req,res)=>{
    res.send('<h1>Home page</h1>')
})

app.get('/about',(req,res)=>{
    res.send('<h1>about page</h1>')
})

app.get('/contact',(req,res)=>{
    res.send('<h1>contact page</h1>')
})

app.get('/profile',(req,res)=>{
    res.send('<h1>profile page</h1>')
})

app.get('/description',(req,res)=>{
    res.send('<h1>description page</h1>')
})

app.use((req,res)=>{
    res.status(404).send('page not fount')
})

app.listen(3000,()=>{
    console.log("sever start @3000")
})