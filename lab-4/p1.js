
const path = require('path')
const os =require('os')

console.log('dicectory Name:'+ __dirname)
console.log('file Name:'+ __filename)
console.log('file extension:'+ path.extname(__filename))
console.log('file full name:'+ path.basename(__dirname))


console.log(path.join('user','user','documents'))


console.log(path.normalize("/folder//subfolder////file.txt"))

console.log(path.isAbsolute("./folder//subfolder////file.txt"))

console.log(path.resolve('floder','subfloder','app.js'))

console.log('\n')

console.log(os.hostname())
console.log(os.version())
console.log(os.platform())
console.log(os.arch())

console.log('\n')


console.log(os.totalmem()/1024/1024/1024)
console.log(os.freemem()/1024/1024/1024)

console.log(os.userInfo())

console.log(os.uptime()/86400)

console.log(os.cpus())
console.log(os.networkInterfaces())