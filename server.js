//create a server using node.js 

const http=require("http");

const server=http.createServer((req,res)=>{
    // here comes the request and response handling logic
    res.end("response from my first server- welcome to node.js server");
});

server.listen(3100, ()=>{
    console.log("server is running on port 3100");
});

