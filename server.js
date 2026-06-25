
const WebSocket = require("ws");

const server = new WebSocket.Server({
    port:8000
});

server.on("connection",(socket)=>{
    console.log("client Connected");
    socket.on("message",(message)=>{
        console.log(message.toString());
        
        socket.send(`You said:${message}`);
    })
    
});
