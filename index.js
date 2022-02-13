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
