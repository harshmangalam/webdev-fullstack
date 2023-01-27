import { Schema, model } from "mongoose";

// create user schema
const userSchema = Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: [3, "Name must be greater than 3 character"],
      maxLength: [30, "Name must be lesser than 30 character"],
    },

    username: {
      type: String,
      unique: true,
      required: true,
      minLength: [3, "Name must be greater than 3 character"],
      maxLength: [30, "Name must be lesser than 30 character"],
    },

    password: {
      type: String,
      required: true,
      minLength: [6, "Name must be greater than 6 character"],
    },

    bio: {
      type: String,
      maxLength: [150, "Name must be lesser than 150 character"],
    },

    isActive: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

// generate user model using user schema
const Users = model("users", userSchema);

export { Users };
