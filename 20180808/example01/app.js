var http = require('http');
var fs = require('fs');
var url = require('url');

// Create Server
http.createServer( function (request, response) {
  // parsing URL from directory/filename
  var pathname = url.parse(request.url).pathname;

  console.log("Request for "+ pathname +" recieved.");

  // If file is empty, set 'index.html'
  if(pathname == "/") pathname = "/template/index.html";

  fs.readFile(pathname.substr(1), function (err, data) {
    if(err) {
      console.log(err);
      console.log(response.statusCode + " recieved..");
      // Not found page.
      // HTTP Status 404 : NOT found
      // Content Type: text/html
      response.writeHead(404, {'Content-Type':'text/html'});
    } else {
      console.log(response.statusCode + " recieved..");
      // Page is Founded.
      // HTTP Status 200 : OK
      // Content Type : text/plain
      response.writeHead(200, {'Content-Type':'text/html'});
      response.write(data.toString());
    }
    // Send responseBody
    response.end();
  })
}).listen(8080);

console.log('Server running at http://127.0.0.1:8080/');
