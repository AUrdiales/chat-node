const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

var publicPath = path.join(__dirname, '../public');

io.on('connection', (socket) => {
  console.log('new user connected');
  socket.on('disconnect', () => {
    console.log('User discconected');
  });
});



app.use(express.static(publicPath));
server.listen(port, () => {
  console.log(`The server is up on port ${port}`);
})
