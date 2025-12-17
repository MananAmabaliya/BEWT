const fs =require("fs")

console.log('start')

fs.mkdir('lab-612',true,(err)=>{
    if(err.code === 'EEXIST'){
        console.log('folder already exist',err.code)
        return
    }
    else if(err){
        console.log(err)
        return
    }
    console.log("created...")
})
console.log("end...")