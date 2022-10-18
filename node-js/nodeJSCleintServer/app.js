const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Server request");
  console.log(req.url, req.method);
  res.setHeader('Content-type', 'application/json');
  

  const data = JSON.stringify([
    {name: 'Tommy', age: 32},
    {name: 'Isa', age: 33}
  ])

  res.end(data);
});

server.listen(3000, "localhost", (error) => {
  error ? console.log(error) : console.log("Listen port 3000");
});
