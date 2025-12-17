const fs =require("fs")

console.log('start')

fs.appendFile('data.txt','\npro coder....',(err)=>{
    if(err){
        console.log('error:' ,err)
        return
    }
    console.log('wirte...')
})
console.log('end')