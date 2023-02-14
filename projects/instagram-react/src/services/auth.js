import axios from "axios";

async function signupUser(data) {
  const res = await axios.post("/auth/signup", data);
  return res.data;
}

async function loginUser(data) {
  const res = await axios.post("/auth/login", data);
  return res.data;
}

export { signupUser, loginUser };
