// import expressjs modules

const express = require("express");

const PORT = 4000;
// create expressjs app instance

const app = express();

app.get("/", (req, res) => {
  res.send(`
  
  <form method="post" action="/user">
      <input type="email" name="email"/>
      <button type="submit"> Create user</button>
  </form>
  
  
  `);
});

app.post("/user", (req, res) => {
  res.send("User created");
});

// app.get("/categories")
// app.post("/categories")

app.get("/users", (req, res) => {
  const users = [
    {
      userId: 1,
      userName: "SOme user 1",
      age: 34,
    },
    {
      userId: 2,
      userName: "SOme user 2",
      age: 33,
    },
  ];

  res.json(users);
});

app.get("/users/:userId", (req, res) => {
  const userId = req.params.userId;

  return res.json({
    userId: userId,
    userName: "jdgd",
  });
});

// start the development server

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
