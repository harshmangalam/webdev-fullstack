const fs = require("fs/promises");

async function readData() {
  try {
    const buffer = await fs.readFile("./tes.txt");
    console.log(buffer.toString());
  } catch (error) {
    console.log(error);
  } finally {
    console.log("i will run in all schenerio");
  }
}

async function appendData() {
  try {
    await fs.appendFile("./test.txt", "some more data");
  } catch (error) {
    console.log(error);
  }
}
// readData();
appendData();
