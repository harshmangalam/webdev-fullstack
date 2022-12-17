// const mySet = new Set([1, 2, 3, 4, 5, 5, 5]);

// console.log(mySet);
// console.log(typeof mySet);

// const tags = ["javascript", "css", "html", "javascript", "css"];

const tags = new Set();

// console.log(uniqueTags);
// console.log(tags);

tags.add("javascript");
tags.add("css");

// tags.delete("css");

// console.log(tags.has("javascript"));
// console.log(tags);

// tags.clear();
// console.log(tags);

const [key, value] = tags.entries();

// console.log(value);

tags.forEach((value) => console.log(value));
