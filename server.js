let express = require('express');
let app = express();
let http = require('http').createServer(app);
let io = require('socket.io')(http);
http.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.use(express.static('public'));
io.on('connection', (socket) => {
    console.log('A user connected');
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
    setInterval(() => {
        socket.emit('number', Math.random());
    }, 1000);
});



