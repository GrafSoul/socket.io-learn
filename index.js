var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

// app.get('/', (req, res) => {
//     res.send('<h1> Hello world </ h1>');
// });

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.broadcast.emit('hi');

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);

        console.log('message: ' + msg);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

http.listen(3000, () => {
    console.log('Server started - http://localhost:3000');
});
