import axios from "axios";

async function getAllUsers() {
  const res = await axios.get("/users/");
  return res.data;
}

async function getUserDetails(username) {
  const res = await axios.get(`/users/${username}`);
  return res.data;
}

async function updateUserProfile(userId, data) {
  const res = await axios.put(`/users/${userId}`, data);
  return res.data;
}

export { getUserDetails, getAllUsers, updateUserProfile };
