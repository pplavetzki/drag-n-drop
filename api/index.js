var cors = require('cors')
var app = require('express')();
var server = require('http').Server(app);
// var io = require('socket.io')(server);

app.use(cors());
app.options('*', cors());

server.listen(3000, "0.0.0.0");

var couchbase = require('couchbase').Mock;
var cluster = new couchbase.Cluster();
var bucket = cluster.openBucket();
 
bucket.upsert('testdoc', {name:'Frank'}, function(err, result) {
  if (err) throw err;
});

app.get('/', function (req, res) {
  bucket.get('testdoc', function(err, result) {
    if (err) throw err;
    res.json(result.value);
    // {name: Frank} 
  });
  
});

// io.on('connection', (socket) => {
//   socket.emit('news', { hello: 'world' });
//   socket.on('add-message', (data) => {
//     console.log(data);
//   });
// });