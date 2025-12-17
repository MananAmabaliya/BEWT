const fs =require("fs")

console.log('start')

fs.watch('.',(eventType,filename)=>{
    if(filename ==='temp.txt'){
        console.log(filename,'event Type:',eventType)
    }

})
console.log('end')