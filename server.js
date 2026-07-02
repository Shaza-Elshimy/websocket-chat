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
        const data =JSON.parse(message);

        if(data.type ==="join"){
            socket.username = data.username;
            console.log(socket.username+" joined");

        }else if(data.type =="message"){
            const chatMessage = `${socket.username}:${data.message}`;

            clients.forEach(client=>{
                client.send(chatMessage);
            })
        }

        clients.forEach(client=>{
            client.send(message.toString())

        })
   

    })

});
