const net = require('net');

const server = net.createServer(function(socket) {
  const now = new Date();
  const year = now.getFullYear();
  const month = zeroFill(now.getMonth() + 1);
  const day = zeroFill(now.getDate());
  const hours = zeroFill(now.getHours());
  const minutes = zeroFill(now.getMinutes());

  const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}\n`;

  socket.write(formattedDate);
  socket.end();
});

server.listen(process.argv[2]);

function zeroFill(num) {
  return num < 10 ? `0${num}` : num;
}
