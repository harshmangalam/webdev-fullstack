// function executePromise() {
//   return new Promise((resolve, reject) => {
//     // resolve("i have done");
//     reject("user not found");
//   });
// }

// executePromise()
//   .then((v) => console.log(v))
//   .catch((v) => {
//     console.log(v);
//   });

function fetchUser(username) {
  return new Promise((resolve, reject) => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((user) => resolve(user))
      .catch((err) => reject(err));
  });
}

fetchUser("harshmangalam")
  .then((user) => console.log(user))
  .catch((err) => console.log(err));

fetchUser("harshmangalam")
  .then((user) => console.log(user))
  .catch((err) => console.log(err));

fetchUser("harshmangalam")
  .then((user) => console.log(user))
  .catch((err) => console.log(err));

fetchUser("harshmangalam")
  .then((user) => console.log(user))
  .catch((err) => console.log(err));
