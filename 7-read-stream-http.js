const { createReadStream } = require("fs");
const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  const readStream = createReadStream("./content/big-file.txt", {
    highWaterMark: 90000,
    encoding: "utf8",
  });

  readStream.on("open", () => {
    readStream.pipe(res);
  });

  readStream.on("error", (err) => {
    res.end(err);
  });
});

server.listen(5000);
