import { MongoClient, ObjectId } from "mongodb";

const client = new MongoClient("mongodb://127.0.0.1:27017");

async function createConnection() {
  // accessing blog database
  const blog = client.db("blog");

  // access users collection in blog database

  const users = blog.collection("users");

  //  get all users --> get all users document

  //   const cursor = users.find();

  //   const usersArray = [];

  //   await cursor.forEach((doc) => usersArray.push(doc));

  //   console.log(usersArray);

  // get user by _id

  //   const user = await users.findOne({
  //     _id: ObjectId("63c6c7e5a3e40bffd2ef287c"),
  //   });

  //   console.log(user.followers);

  // create new user

  const user = {
    username: "new user",
    followers: 110,
    createdDate: new Date(),
  };

  const result = await users.insertOne(user);

  console.log(result);
}

createConnection();
