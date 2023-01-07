const fs = require("fs");

function fileDetails() {
  fs.stat("./test", (err, stats) => {
    if (err) console.log(err);
    // console.log(stats);

    // if (stats.isFile()) {
    //   console.log("This is a file");
    // } else {
    //   console.log("This is a folder");
    // }

    console.log(stats.size); // size of file in bytes
  });

  console.log("end file");
}

fileDetails();
