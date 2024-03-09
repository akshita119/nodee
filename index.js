// var http = require('http')
// var dt=require('./myModule')


// http.createServer(function(req,res){
//     // res.end("Hello Akshu, it's Saturday, in nodemon")
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.write(`the date ${dt.myDate}`)


// }).listen(5000)

var http = require('http');
var dt = require('./myModule');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(`The date: ${dt.myDate()}\n`);
}).listen(5000);

console.log('Server running at http://localhost:5000/');
