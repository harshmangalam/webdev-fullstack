const a = "12";
const b = 4;
const c = true;

const admin = {
  firstName: "first",
  lastName: "last",
  role: "admin",
};

const user = {
  name: "",
  firstName: "first",
  lastName: "last",
  username: "harsh",
  isLoggedIn: true,
  9: 5,
  let: "hey",
  "new-key": "new value",
  setName: function () {
    this.name = this.firstName + this.lastName;
  },
};

user.setName();
console.log(user);

// user.name = "Harsh Mangalam";
// user["username"] = "harsh1";

// console.log(user);

// console.log(user.username);
// console.log(user["username"]);

// user["new-key"] = "some new value"

// console.log(user["new-key"]);

// let newKey = "userId";
// const newValue = 34;

// user[newKey] = newValue;

// console.log(user);

// key ----> value

user.getName = function () {
  console.log(user.name);
};


user.getName()