const { readFile, writeFile } = require("fs");

const getContent = (path) => {
  const promise = new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
  return promise;
};

const writeContent = (path, content) => {
  const promise = new Promise((resolve, reject) => {
    writeFile(path, content, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
  return promise;
};

let firstContent = "";
let secondContent = "";

getContent("./content/first.txt")
  .then((res) => {
    firstContent = res;
    return getContent("./content/second.txt");
  })
  .then((res) => {
    secondContent = res;
    return writeContent(
      "./content/result-new.txt",
      `NEW RESULT IS: ${firstContent} ${secondContent}`
    );
  })
  .then((res) => {
    console.log("First Task Done");
  })
  .catch((err) => {
    console.log(err);
  });
