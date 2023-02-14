import axios from "axios";

async function getPosts() {
  const res = await axios.get("/posts");
  return res.data;
}

export { getPosts };
