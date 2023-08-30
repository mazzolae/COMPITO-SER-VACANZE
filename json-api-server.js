const http = require('http');
const url = require('url');

const server = http.createServer(function (req, res) {
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
  const isoTime = parsedUrl.searchParams.get('iso');
  
  if (parsedUrl.pathname === '/api/parsetime') {
    const date = new Date(isoTime);
    const response = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(response));
  } else if (parsedUrl.pathname === '/api/unixtime') {
    const unixTime = new Date(isoTime).getTime();
    const response = {
      unixtime: unixTime
    };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(response));
  } else {
    res.writeHead(404);
    res.end();
  }
});

const port = process.argv[2] || 8000; 
server.listen(port);
