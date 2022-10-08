const { readFile, writeFile } = require("fs");

const getContent = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf-8", (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};

const writeContent = (path, content) => {
  return new Promise((resolve, reject) => {
    writeFile(path, content, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};

async function doFileOperatiions() {
  try {
    const data1 = await getContent("./content/first.txt");
    const data2 = await getContent("./content/second.txt");

    await writeContent("./content/result-new2.txt", `NEW RESULT2 IS: ${data1} ${data2}`);
  } catch (err) {
    console.log(err);
  }
}

doFileOperatiions();
