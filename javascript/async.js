async function getUser(username) {
  try {
    const res = await fetch("https://api.github.com/users/harshmangalam");
    const user = await res.json();
    console.log(user);
  } catch (error) {
    console.log(error);
  }
}
getUser("harshmangalam");
