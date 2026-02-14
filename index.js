const app = require("express")();
const path = require("node:path");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/stream", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");

  res.write("data: " + "Hello From SSE!\n\n");
  res.write("data: " + "Hello From SSE2!\n\n");
});

app.listen(8080);
console.log("Listening on 8080");
