// Load HTTP Module
const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;
const { chalk } = require("chalk");

//Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {
  //set the response Header with HTTP status and Content type
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello class\n");
});

//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
