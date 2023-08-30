const http = require('http');
const url = process.argv[2];
http.get(url, function(response) {
    const dataBuffer = [];
    response.on('data', function(chunk) {
        dataBuffer.push(chunk);
      });
      response.on('end', function() { 
        const combinedBuffer = Buffer.concat(dataBuffer);
                   const dataString = combinedBuffer.toString();
        console.log(dataString.length);
        console.log(dataString);
      });
      response.on('error', function(err) {
        console.error('An error occurred:', err);
      });
    });