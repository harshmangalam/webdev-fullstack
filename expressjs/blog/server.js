const express = require("express");
const { engine } = require("express-handlebars");
const postsRouter = require("./routes");
const path = require("path");
const app = express();
const PORT = 5000;

const HomePage = path.join(__dirname, "public", "index.html");

// configure handlebars template engine
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(HomePage);
});

app.use("/posts", postsRouter);

app.listen(PORT, () => {
  console.log(`Expressjs started on port ${PORT}`);
});
