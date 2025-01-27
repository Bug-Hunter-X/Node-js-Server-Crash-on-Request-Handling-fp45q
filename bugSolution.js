const http = require('http');

const server = http.createServer((req, res) => {
  // Check if req.url exists before accessing it
  if (req.url) {
    console.log(req.url);
  } else {
    console.error('Invalid request URL');
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    res.end('Invalid Request');
  }
  res.end();
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});