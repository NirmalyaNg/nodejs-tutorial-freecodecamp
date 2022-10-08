const { writeFileSync, readFileSync, createReadStream } = require("fs");
const http = require("http");

// for (let i = 0; i < 100000; i++) {
//   writeFileSync("./content/big-file.txt", `Hello World ${i + 1}\n`, {
//     flag: "a",
//   });
// }

const readStream = createReadStream("./content/big-file.txt", {
  highWaterMark: 90000,
  encoding: "utf8",
});
readStream.on("data", (data) => {
  console.log(data);
});

readStream.on("error", (err) => {
  console.log(err);
});
