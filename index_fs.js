var fs= require('fs')
var http = require('http');

http.createServer(function(req,res){
    
    fs.readFile('test.html', function(err,data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        // return res.end();
    })
    
}).listen(5000)

console.log('Server running at http://localhost:5000/');
