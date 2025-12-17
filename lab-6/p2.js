const fs =require("fs")

console.log('start')

try{
 const data = fs.readFileSync('data.txt')
 console.log(data.toString())
}
catch(err){
    console.log('error:',err)
}
    
console.log('end')