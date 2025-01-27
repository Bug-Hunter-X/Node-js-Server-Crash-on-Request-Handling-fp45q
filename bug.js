const http = require('http');

const server = http.createServer((req, res) => {
  // This is where the error occurs
  console.log(req.url);
  res.end();
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});