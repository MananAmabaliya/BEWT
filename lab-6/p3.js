// const fs =require("fs")

// console.log('start')

// fs.writeFile('data2.txt','hello coders...',(err)=>{
//     if(err){
//         console.log('error:' ,err)
//         return
//     }
//     console.log('data write..')
// })
// console.log('end')


const fs =require("fs")

console.log('start')

try{
 const data = fs.writeFileSync('data2.txt','hello coder')
 console.log('data writeing...')
}
catch(err){
    console.log('error:',err)
}
    
console.log('end')