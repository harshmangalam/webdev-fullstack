// array literal

// const ids = [1, 2, 3, 4, 5, 6];

// array constructor

// const ids2 = new Array(1,2,3,4,5,6)

// ids[0] = 8;

// not allowed
// ids = [345, 6, 2];

// console.log(ids[5]);
// console.log(ids);

// const common = [1, 2, "q", "e", true, null, 1, 2,null,"jik"];

// console.log(common.length)

// console.log(common[common.length - 1]);

// const users = [
//   {
//     id: 1,
//     name: "Harsh",
//     password: "123456",
//   },
//   {
//     id: 2,
//     name: "user 2",
//     password: "12345",
//   },
// ];

// users.push({
//   id: users.length + 1,
//   name: "user 3",
//   password: "user1234",
// });

// console.log(users)

// console.log(Array.isArray(users))

// console.log(users instanceof Array)

// const nums = [1,2,3,45,6]
// console.log(nums.toString())

// users.pop()

// console.log(users)

// const name1 = "harsh mangalam"

// const nameArr = name1.split(" ")

// console.log(name1)
// console.log(nameArr)

// const nameJoined = nameArr.join("*")

// console.log(nameJoined)

// users.shift()

// users.unshift({ id: 1, name: "user 1", password: "123" });

// console.log(users);

const a = [21, , 5, 7, 3];
const b = [6, 7, 5];
const c = [9, 10, 11];

// const d = a.concat(b,c)

// console.log(d)

// Array concat()

// const newArr = a.splice(2,0,15,16,17);
// const newArr = a.splice(2,2);
// console.log(a)

// console.log(newArr)

// const nums = [1, 2, 3, 4, 5];

// const twoTimesOfNums = nums.map((value) => value * 2);

// console.log(nums);
// console.log(twoTimesOfNums);

// const newArray = [];

// nums.forEach((value) => newArray.push(value * 2));

// for (let i = 0; i <= nums.length - 1; i++) {
//   console.log(nums[i]);
// }

// const filteredArr = nums.filter((value) => value > 3);

// console.log(filteredArr);

// const users = [
//   {
//     name: "name 1",
//     role: "user",
//   },
//   {
//     name: "name 2",
//     role: "admin",
//   },
//   {
//     name: "name 3",
//     role: "user",
//   },
// ];

// const usersRole = users.filter((user) => user.role === "user");

// console.log(usersRole);

// const nums = [1, 2, 3, 4, 5];

// const sum = nums.reduce(
//   (previousValue, currentValue) => previousValue + currentValue,
//   0
// );

// console.log(sum);

const users = [
  {
    name: "user 1",
    isActive: false,
  },
  {
    name: "user 2",
    isActive: true,
  },
  {
    name: "user 3",
    isActive: false,
  },
];

// const isAllActive = users.every((value) => value.isActive === true);
// const anyActive = users.some((value) => value.isActive === true);

// console.log(anyActive);

const strings = ["hi", "how", "what"];

// console.log(strings.indexOf("h"));

// const findHow = strings.find((value) => value === "how");

// console.log(findHow);

// const user2 = users.find((value) => value.name === "user 2");

// console.log(user2.name);
// console.log(user2.isActive);

// const tags = ["javascript", "webdev", "frontend", "open-source"];

// console.log(tags.includes("webdev"));
