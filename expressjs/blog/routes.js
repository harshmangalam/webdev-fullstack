const { Router } = require("express");
const { posts } = require("./db");
const router = Router();

// return lists of post
router.get("/", (req, res) => {
  return res.json(posts);
});

// get post details

router.get("/:postId", (req, res) => {
  const postId = req.params.postId;

  const post = posts.find((post) => post.id == postId);
  console.log(post);
  res.json(post);
});

// create new post
/**
{
    tile : string 
    description:string 
}
*/
router.post("/", (req, res) => {
  const post = {
    id: posts.length + 1,
    title: req.body.title,
    description: req.body.description,
  };

  posts.push(post);

  return res.json({
    message: "Post created successfully",
    post,
  });
});

// delete post

router.delete("/:postId", () => {});

// edit post

router.put("/:postId", () => {});

module.exports = router;
