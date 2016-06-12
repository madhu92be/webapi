var http = require('http');

http.createServer(function(request,response) {
  // body...
  // send the http header, http status:200 OK,content type: text/plain
  response.writeHead(200,{'Content-Type':'text/html'});
  //send the response body as "Hello World"
  response.end('<h1>Hello World</h1>');
}).listen(8080);

console.log('Server running at "http://127.0.0.1:8080/');
