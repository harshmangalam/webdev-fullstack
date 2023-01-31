import { Users } from "../models/user.model.js";
async function getAllUsers(req, res) {
  try {
    const users = await Users.find().exec();
    return res.status(200).json({
      message: "get list of users",
      type: "success",
      users,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      status: "error",
    });
  }
}

async function getUserDetail(req, res) {
  try {
    // first we  will take userid from params
    const userId = req.params.userId;
    const user = await Users.findById(userId).exec();

    if (!user) {
      return res
        .status(404)
        .json({ status: "error", message: "user not found" });
    }
    return res.status(200).json({
      message: "get user details",
      type: "success",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      status: "error",
    });
  }
}

async function deleteUser(req, res) {
  try {
    const user = res.locals.user;

    const userId = req.params.userId;

    // we will check if the profile owner is deleting their profile

    if (user._id != userId) {
      return res.status(403).json({
        message: "You are not allowed to delete account of other user",
        status: "error",
      });
    }

    const result = await Users.deleteOne({ _id: userId }).exec();
    return res.status(201).json({
      status: "succes",
      message: "profile deleted successfully",
      result,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      status: "error",
    });
  }
}

async function updateUser(req, res) {
  console.log("update");
  try {
    // first we will get userId
    const userId = req.params.userId;
    // we will get update data user
    const user = req.body;
    // we will update user by userId

    const updatedUser = await Users.findByIdAndUpdate(userId, {
      $set: { ...user },
    });

    return res.status(201).json({
      status: "success",
      message: "profile updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      status: "error",
    });
  }
}

export { getAllUsers, getUserDetail, deleteUser, updateUser };
