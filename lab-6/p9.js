const fs =require("fs")

console.log('start')

try{
 const data = fs.existsSync('data2.txt')

 if(data){
    console.log('present....')
}

else{
    console.log('absent....')
 }
}
catch(err){
    console.log('error:',err)
}
    
console.log('end')