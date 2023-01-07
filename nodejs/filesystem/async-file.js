const fs = require("fs/promises");

async function fileDetails() {
  try {
    const stats = await fs.stat("./1.png");
    const isFile = stats.isFile();
    const size = stats.size;

    console.log("not depended");
  } catch (error) {
    console.log("Error during file status checking...");
  }
}

fileDetails();
