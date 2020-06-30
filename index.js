var app = require('express')();
var http = require('http').createServer(app);

// app.get('/', (req, res) => {
//     res.send('<h1> Hello world </ h1>');
// });

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

http.listen(3000, () => {
    console.log('Server started - http://localhost:3000');
});
