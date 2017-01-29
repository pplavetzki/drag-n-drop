var cors = require('cors')
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(cors());
app.options('*', cors());

server.listen(3000, "0.0.0.0");

app.get('/', function (req, res) {
  res.send('Hello World, ghost worms!')
});

io.on('connection', (socket) => {
  socket.emit('news', { hello: 'world' });
  socket.on('add-message', (data) => {
    console.log(data);
  });
});