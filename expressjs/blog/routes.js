const { Router } = require("express");
let { posts } = require("./db");
const router = Router();

// return lists of post
router.get("/", (req, res) => {
  return res.render("posts.handlebars", { posts });
});

// get post details

router.get("/:postId", (req, res) => {
  const postId = req.params.postId;
  const post = posts.find((post) => post.id == postId);

  if (!post) {
    return res.status(404).json({
      message: "Post not found",
    });
  }
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
  const title = req.body.title;
  const description = req.body.description;

  const errors = {};

  if (title === "") {
    errors.title = "Title is required field";
  }

  if (description === "") {
    error.description = "Description is required field";
  }

  if (Object.keys(errors).length) {
    return res.status(422).json({
      message: "All fields are required",
      errors,
    });
  }

  const post = {
    id: posts.length + 1,
    title,
    description,
  };

  posts.push(post);

  return res.json({
    message: "Post created successfully",
    post,
  });
});

// delete post

router.delete("/:postId", (req, res) => {
  const postId = Number(req.params.postId);

  const filteredPosts = posts.filter((post) => post.id !== postId);
  posts = filteredPosts;

  return res.json({
    message: "Post deleted successfully",
    postId,
  });
});

// edit post

router.put("/:postId", (req, res) => {
  const postId = Number(req.params.postId);

  const userUpdatedPost = req.body;

  const filteredPosts = posts.map((post) => {
    if (post.id === postId) {
      return {
        ...post,
        ...userUpdatedPost,
      };
    } else {
      return post;
    }
  });

  posts = filteredPosts;

  return res.json({
    message: "Post updated successfully",
    postId,
  });
});

module.exports = router;
