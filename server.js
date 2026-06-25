const WebSocket = require("ws");

const server = new WebSocket.Server({
    port:8000
});

const clients=[];
server.on("connection",(socket)=>{

    console.log("client Connected");

    clients.push(socket);
    console.log(clients.length);

    socket.on("message",(message)=>{

        clients.forEach(client=>{
            client.send(message.toString())

        })
   

    })
  
});
