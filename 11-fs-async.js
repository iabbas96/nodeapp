const {readFile, writeFile} = require('fs')

console.log('start');
//using call back function in argument
readFile('./content/first.txt','utf8', (err,result) => {
    if(err){
        console.log(err)
        return
    }//end if
   // console.log(result)
   const first = result;
   readFile('./content/second.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const second = result 
    writeFile(
        './content/result-async.txt',
        //template string
        `Here is the result: ${first}, ${second}`,

        (err, result) => {
            if(err) {
                console.log(err)
                return
            }
            console.log('Done with the Task')
        }//end call back function 
    )
   })
})

console.log('Starting the next task')