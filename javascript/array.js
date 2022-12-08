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

const users = [
  {
    id: 1,
    name: "Harsh",
    password: "123456",
  },
  {
    id: 2,
    name: "user 2",
    password: "12345",
  },
];

users.push({
  id: users.length + 1,
  name: "user 3",
  password: "user1234",
});

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

users.unshift({ id: 1, name: "user 1", password: "123" });

// console.log(users);

const a = [ 21,, 5, 7, 3];
const b = [6, 7, 5];
const c = [9, 10, 11];

// const d = a.concat(b,c)

// console.log(d)

// Array concat()

// const newArr = a.splice(2,0,15,16,17);
const newArr = a.splice(2,2);
console.log(a)

console.log(newArr)
