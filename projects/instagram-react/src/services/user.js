import axios from "axios";

async function getUserDetails(username) {
  const res = await axios.get(`/users/${username}`);
  return res.data;
}

export { getUserDetails };
