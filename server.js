const express = require("express");
const nunjucks = require("nunjucks");

const server = express();

server.use(express.static("public"));

server.listen(5000, () => {
  console.log("Server is running.");
});
