import app from 'express'

//var app = require('express')();
var server = require('http').Server(app());
var io = require('socket.io')(server);

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});

const port = 4155 || process.env.PORT;
server.listen(port, () => console.log(`socket.io server is listening on port ${port}`));