import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },

  createdOn: {
    type: Date,
  },
  followers: {
    type: Number,
  },

  isActive: {
    type: Boolean,
  },

  posts: [
    {
      title: {
        type: String,
      },
      description: {
        type: String,
      },
      createdDate: {
        type: Date,
      },
    },
  ],
});

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017");
  console.log("connecting with database successfully");
}

main();
