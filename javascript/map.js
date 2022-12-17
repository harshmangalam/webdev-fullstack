// const user = {
//   name: "User 1",
//   isActive: false,
//   1: "hi",
// };

// console.log(user);

const user = new Map();

user.set("name", "User1");
user.set(1, "hi");

// console.log(user);

// console.log(user.get("name"));

// user.delete()
const [i, j] = user.entries();

console.log(i, j);
