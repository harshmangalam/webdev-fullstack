const post = {
  title: "Title 1",
  author: {
    name: "Harsh",
    followers: [
      {
        name: "User 1",
      },
    ],
  },
};

const {
  title,
  author: { followers, name },
} = post;

// console.log(title);
// console.log(name);
// console.log(followers);

function fetchAuthor({ author: { name } }) {
  console.log(name);
}

fetchAuthor(post);
