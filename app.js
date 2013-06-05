var express = require("express"),
    app     = express(),
    http    = require("http"),
    server  = http.createServer(app);

app.configure(function () {
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
});

app.get('/', function(req, res) {
  res.send("Hello world!");
});

server.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});