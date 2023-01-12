import express from "express";
import { engine } from "express-handlebars";
import { postsRouter } from "./routes.js";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log(import.meta.url); //
console.log(__filename);
console.log(__dirname);

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
