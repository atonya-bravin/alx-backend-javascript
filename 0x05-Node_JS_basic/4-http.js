const http = require('http');

const host = '127.0.0.1';
const port = 1245;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

server.listen(port, host, () => {
  console.log('server is running');
});

module.exports = server;
