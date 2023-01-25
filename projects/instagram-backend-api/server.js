import express from "express";
import morgan from "morgan";
import authRoute from "./routes/auth.route.js";
import mongoose from "mongoose";

import cookieParser from "cookie-parser";
const app = express();

// it will parse incomming request json data
app.use(express.json());

// parse incomming cookies

app.use(cookieParser());
// logging middleware

app.use(morgan("dev"));

// it will handle auth related routes
app.use("/auth", authRoute);

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/instagram");
    console.log("connected with database");
    app.listen(3000, () => {
      console.log("Server started");
    });
  } catch (error) {
    console.log("database connection error:::", error);
  }
}

main();
