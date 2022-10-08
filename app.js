const { readFile, writeFile } = require("fs").promises;

async function doFileOperations() {
  try {
    const data1 = await readFile("./content/first.txt", "utf8");
    const data2 = await readFile("./content/second.txt", "utf8");

    const result = data1 + " " + data2;
    await writeFile("./content/result-new4.txt", result);
  } catch (e) {
    console.log(e);
  }
}

doFileOperations();
