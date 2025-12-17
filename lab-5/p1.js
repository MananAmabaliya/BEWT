const child_process = require('child_process');


child_process.exec('node --version',(err,stdout,stderr)=>{
    if(err){
        console.log('Error: ' +err)
        return
    }

    if(stderr){
         console.log('stdErr: ' +stderr)
        return
    }

    console.log(stdout)
})


child_process.exec('python p1.py',(err,stdout,stderr)=>{
    if(err){
        console.log('Error: ' +err)
        return
    }

    if(stderr){
         console.log('stdErr: ' +stderr)
        return
    }

    console.log(stdout)
})
