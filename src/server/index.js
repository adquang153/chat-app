const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const port = 4000;

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    console.log('a new user connected');
    socket.on('chat', data => {
        console.log(data);
        socket.emit('chat', data);
    });
    // socket.on('message', data => {
    //     const { room, message } = data;
    //     socket.to(room).emit('message', {
    //         message,
    //         name: 'friend'
    //     });
    // });
    socket.on('disconnect', function () {
        console.log('user disconnect');
    });
});

http.listen(port, function () {
    console.log(`lisening on localhost:${port}`);
});