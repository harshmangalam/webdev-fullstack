const user = {
  phone: "100",
  username: "harsh",
  email: "harsh@gmail.com",
  password: "123456",
  isAccountVerified: false,
};

// login functionality
// step 1=> verify username that user write in input box with the data that is stored db

// const inputUsername = "harsh1";
// const inputPassword = "1234567";
// const inputPhone = "100";

// if (inputUsername === user.username) {
//   console.log("username verified");

//   //   step 2 => match user password

//   if (inputPassword === user.password) {
//     console.log("Password is correct");
//   } else {
//     console.log("Password is incorrect ");
//   }
// } else if (user.phone === inputPhone) {
//   console.log("Phone number is correct");
// } else {
//   console.log("username is incorrect");
// }

const inputUsername = "1234";

switch (inputUsername) {
  case user.username:
    console.log("username is username");
    break;

  case user.phone:
    console.log("username is phone");
    break;

  case user.email:
    console.log("username is email");
    break;

  default:
    console.log("Username is incorrect");
}
