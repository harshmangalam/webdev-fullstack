import jwt from "jsonwebtoken";
import { Users } from "../models/user.model.js";
async function isAuthenticated(req, res, next) {
  // get authorization header from request
  // const authHeader = req.headers.authorization;
  // get cookies from request

  // Bearer kjwdbuehfgrfygrygfr
  let token = req.cookies.access_token;
  // get token from header "Bearer token "--> "token"

  if (token) {
    token = token.split(" ")[1];
  }
  try {
    // verify the jwt token
    const { userId } = jwt.verify(token, "secret1234");

    // get user data from  database using userId
    const user = await Users.findById(userId);

    if (user) {
      res.locals.user = user;
    } else {
      return res
        .status(404)
        .json({ status: "error", message: "User not found" });
    }
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      status: "error",
      message: "Incorrect or Invalid jwt token",
    });
  }

  //   call the next middleare
  next();
}

export { isAuthenticated };
