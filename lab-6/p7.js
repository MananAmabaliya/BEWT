const fs=require('fs')

console.log('start')

fs.readdir('../lab-6',(err,data)=>{
    if(err){
        console.log('error:' ,err)
        return
    }
    console.log(data)

    data.forEach((filename,index)=>{
        console.log(index,':',filename)
    })
})