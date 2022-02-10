// Load HTTP Module
const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;

//Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {
  //set the response Header with HTTP status and Content type
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
});

//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// Load Express module
const express = require("express");

// Create an Express object
const app = express();
const port = 3000;

// Setup the Get Route
app.get("/", function (req, res) {
  res.send("Hello World!");
});

// list for request on port 3000
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
