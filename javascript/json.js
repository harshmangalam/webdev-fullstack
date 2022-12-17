const userString = `
{
    "firstName":"Harsh",
    "lastName":"Mangalam",
    "followers":[
        {
            "firstName":"",
            "lastName":""
        },
        {
            "firstName":"",
            "lastName":""
        }
    ],
    "id":238,
    "isEmailVerified":false,
    "posts":null

}
`;

// const userObj = JSON.parse(userString);

// console.log(userObj.id);

const post = {
  title: "post 1",
};

const postStr = JSON.stringify(post);

console.log(typeof post);
console.log(typeof postStr);
