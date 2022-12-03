// function myFunction() {
//   console.log(name);
//   console.lof(1);
//   console.lof(2);
//   console.lof(3);
//   console.lof(10);
//   console.lof(5);
// }

// function declaration
function fetchDataFromDatabase() {
  console.log("inside function");
}

// function call
// fetchDataFromDatabase();

// myFunction();

// myFunction();

// myFunction();

// passing dynamic data inside function
// parameters
function fetchUserFromGithub(username, repo) {
  console.log(username);
}

// fetchUserFromGithub("harshmangalam");

// fetchUserFromGithub("ryansolid","solidjs");
// fetchUserFromGithub(1);
// fetchUserFromGithub(true);
// fetchUserFromGithub()

// function getUserAge(datOfBirth){
//     // calculation user age
//     const age = 19
//     return age
// }

// let myAge = getUserAge("22-12-2002")

// console.log(myAge)

// step 2
function function1(function2) {
  // step 3
  function2();
}

// step 4
function function2() {
  // step 5
  console.log("log from fuction 2");
}

// step 1
function1(function2);

const callMe = function function3() {
  console.log("log from 3");
};

const callMe2 = function () {
  console.log("log from 3");
};

callMe();
