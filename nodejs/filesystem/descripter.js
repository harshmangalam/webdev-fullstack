const fs = require("fs");

// fs.open("./test.txt", "a+", (err, fd) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
// });

fs.readFile("./1.png", (err, buffer) => {
  console.log(buffer);
});
