const { readFile, writeFile } = require("fs");
const { promisify } = require("util");

const readFilePromise = promisify(readFile);
const writeFilePromise = promisify(writeFile);

const doFileOperations = async () => {
  try {
    const data1 = await readFilePromise("./content/first.txt", "utf8");
    const data2 = await readFilePromise("./content/second.txt", "utf8");

    const result = `FINAL RESULT IS: ${data1} ${data2}`;

    await writeFilePromise("./content/result-new3.txt", result);
  } catch (err) {
    console.log(err);
  }
};

doFileOperations();
