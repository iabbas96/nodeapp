//using HTTP module 
const http = require('http')

const server = http.createServer((req,res) => {
    //console.log(req)

    //for homepage 
    if(req.url === '/'){
        res.end('Welcome to our homepage')
    }
    if(req.url === '/about'){
        res.end('Here is our short history')
    }
    res.end(`
        <h1>oops!</h1>
        <p>We can't seem to find the page you are looking for here! </p>
        <a href="/">Back to Home</a>
        ` 
    )
    // res.write('Welcome to our home page')
    // res.end()
})

server.listen(5000)