const fs =require("fs")

console.log('start')

fs.copyFile('data3.txt','data2.txt',(err)=>{
    if(err){
        console.log('error:' ,err)
        return
    }
    console.log('wirte...')
})
console.log('end')