const fs = require("fs");
console.log("Task starting");

fs.readFile("./content/first.txt", "utf8", (err1, res1) => {
  if (err1) {
    console.log(err1);
    return;
  }
  const firstContent = res1;
  fs.readFile("./content/second.txt", "utf8", (err2, res2) => {
    if (err2) {
      console.log(err2);
      return;
    }
    const secondContent = res2;
    const result = `THE RESULT IS: ${firstContent} ${secondContent}`;
    fs.writeFile("./content/result.txt", result, (err3, res3) => {
      if (err3) {
        console.log(err3);
        return;
      }
      console.log("First task done");
    });
  });
});

console.log("Starting next task");
