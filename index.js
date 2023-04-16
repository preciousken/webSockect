const express = require('express');
const app = express();
const http = require('http');
const path = require('path')
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
//   res.send('<h1>Hello world</h1>');
res.sendFile(path.join(__dirname,'views/index.html'))
});

app.get('*',(req,res)=>{
    res.json({
        message:"Just like that! YOu totally missed your way😂🤣"
    })
})

io.on('connection', (socket) => {
    console.log('a user connected');
  });
  
server.listen(3000, () => {
  console.log('listening on *:3000');
});

