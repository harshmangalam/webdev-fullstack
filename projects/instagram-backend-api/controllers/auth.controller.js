import { Users } from "../models/user.model.js";
import bcrypt from "bcrypt";
import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";

async function login(req, res) {
  // validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { username, password } = req.body;
  // verify username

  const user = await Users.findOne({
    username,
  });

  if (!user) {
    return res.status(400).json({
      message: "Username is invalid",
      status: "error",
    });
  }

  // verify password

  const isValidPassword = await bcrypt.compare(password, user.password);

  if (!isValidPassword) {
    return res.status(400).json({
      message: "Password is incorrect",
      status: "error",
    });
  }

  // generate unique token for user

  let token = jwt.sign({ userId: user.id }, "secret1234", {
    expiresIn: "30m",
  });

  token = `Bearer ${token}`;
  // save token in client cookie
  res.cookie("access_token", token, { maxAge: 30 * 60 * 1000, httpOnly: true });

  res.status(200).json({
    message: "Log in successfully",
    status: "success",
    user,
    token,
  });
}

async function signup(req, res) {
  // validation
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const userData = req.body;

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

async function getCurrentUser(req, res) {
  const user = res.locals.user;
  return res
    .status(200)
    .json({ status: "success", message: "Fetch your profile data", user });
}

export { login, signup, getCurrentUser };
