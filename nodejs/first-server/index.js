const http = require("http");

const server = http.createServer((req, res) => {
  res.write("Some data ");

  console.log(req.headers);
  res.statusCode = 404;
  res.statusMessage = "NOT FOUND";
  res.end();
});

server.listen("4000", () => {
  console.log("your nodejs server is listening on port 4000");
});
