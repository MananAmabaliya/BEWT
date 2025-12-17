const fs =require("fs")

console.log('start')

fs.readFile('data.txt',(err,data)=>{
    if(err){
        console.log('error:' ,err)
        return
    }
    console.log(data.toString())
})
console.log('end')