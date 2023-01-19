import express from "express";
import morgan from "morgan";
import authRoute from "./routes/auth.route.js";

const app = express();

// it will parse incomming request json data
app.use(express.json());

// logging middleware

app.use(morgan("dev"));

// it will handle auth related routes
app.use("/auth", authRoute);

function main() {
  app.listen(3000, () => {
    console.log("Server started");
  });
}

main();
