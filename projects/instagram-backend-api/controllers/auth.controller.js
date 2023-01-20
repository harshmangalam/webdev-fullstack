import { Users } from "../models/user.model.js";
import bcrypt from "bcrypt";

function login(req, res) {
  res.status(200).json({ done: true });
}

async function signup(req, res) {
  const userData = req.body;

  // validation

  // check if username already exists
  const user = await Users.findOne({ username: userData.username }).exec();

  if (user) {
    return res.status(400).json({
      message: "Username already exists",
      status: "error",
    });
  }

  //  hash plain password

  const hashedPassword = await bcrypt.hash(userData.password, 12);

  //  save user in database using hash password

  const newUser = new Users({
    ...userData,
    password: hashedPassword,
  });

  const savedUser = await newUser.save();

  // return response to client

  console.log(userData);

  res.status(200).json({
    message: "Account created successfully",
    status: "success",
    user: savedUser,
  });
}

export { login, signup };
