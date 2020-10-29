const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const port = 4000;

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    console.log('a new user connected');
    socket.on('join', room => {
        socket.join(room);
    });
    socket.on('message', data => {
        const { room, message } = data;
        socket.to(room).emit('message', {
            message,
            name: 'friend'
        });
    });
});

http.listen(port, function () {
    console.log(`lisening on localhost:${port}`);
});