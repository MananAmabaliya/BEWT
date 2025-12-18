const express = require('express')
const fs =require('fs')

const app=express()

app.get('/',(req,res)=>{
    fs.readFile('./temp.txt','utf-8',(err,data)=>{
         if(err){
                console.log('error',err)
                return
            }
            console.log(data)
            res.send(data)
    })
})

app.get('/about',(req,res)=>{
    fs.readFile('./temp2.txt','utf-8',(err,data)=>{
         if(err){
                console.log('error',err)
                return
            }
            console.log(data)
            res.send(data)
    })
})

app.listen(3000,()=>{
    console.log("sever start @3000")
})