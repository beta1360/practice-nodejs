var http = require('http');

// HTTPRequest Option setting
var options = {
  host: 'localhost',
  port: '8080',
  path: '/index.html'
};

var callback = function(response){
  // If recieve resonse event, send data to body.
  var body = '';
  response.on('data', function(data) {
    body += data;
  });

  // If recieve end-event, exit to recieving data and print body.
  response.on('end', function(){
    // Complete to recieving data
    console.log(body);
  });
}

// Send HTTP Request to Server
var req = http.request(options, callback);
req.end();
