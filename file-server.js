const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
  
  const filePath = process.argv[3] || 'file.txt';

  const readStream = fs.createReadStream(filePath);
  readStream.pipe(res);
});

const port = process.argv[2] || 8000; 
server.listen(port);
