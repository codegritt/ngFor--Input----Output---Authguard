const http=require('http');
const port=3000;

const server=http.createServer(function(req,res){
    res.end('your http connection is established');
    res.writeHead(200);
});

server.listen(port,()=>{
    console.log('your server is running on the port 3000');
});