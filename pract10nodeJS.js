var http = require('http')
http.createServer((Request, Response)=>{
    Response.write("hello World, this is my Node.js server")
    Response.end()
    //console.log(Request)
}).listen(10000,()=>console.log("server Started"))

console.log("hello")