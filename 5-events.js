const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", () => {
  console.log("Response event emitted");
});

customEmitter.on("response", (data) => {
  console.log("Response event emitted. Doing some other stuff");
  console.log("Sum is: ", data.num1 + data.num2);
});

customEmitter.emit("response", {
  num1: 10,
  num2: 20,
});
