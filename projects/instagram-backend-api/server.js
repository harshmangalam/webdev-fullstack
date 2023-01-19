import express from "express";

const app = express();

function main() {
  app.listen(3000, () => {
    console.log("Server started");
  });
}

main();
