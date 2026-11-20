//create a server using node.js 

const http=require("http");
const fs=require("fs");

const server=http.createServer((req,res)=>{
    const data=fs.readFileSync("sample2.html");
    // here comes the request and response handling logic
    res.end(data);
});

server.listen(3100, ()=>{
    console.log("server is running on port 3100");
});

