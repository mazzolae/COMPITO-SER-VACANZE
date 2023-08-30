const http = require('http');
const map = require('through2-map');

const server = http.createServer(function (req, res) {
  if (req.method === 'POST') {
    req.pipe(map(function (chunk) {
      return chunk.toString().toUpperCase();
    })).pipe(res);
  } else {
    res.end('Send a POST request\n');
  }
});

const port = process.argv[2] || 8000; 
server.listen(port);
