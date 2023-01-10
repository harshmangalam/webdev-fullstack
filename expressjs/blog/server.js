const express = require("express");
const postsRouter = require("./routes");
const app = express();
const PORT = 5000;

app.use(express.json());
app.use("/posts", postsRouter);

app.listen(PORT, () => {
  console.log(`Expressjs started on port ${PORT}`);
});
