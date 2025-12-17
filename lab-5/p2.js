const cp=require('child_process')

const child=cp.spawn("cwd.exe",["/c","dir","/s","c:\\"])

child.stderr.on("data",(data)=>{
    console.log("stderr:" +data)
})

child.stdout.on("data",(data)=>{
    console.log("stdout:" +data)
})

child.on("close",(data)=>{
    console.log("close:"+data)
})