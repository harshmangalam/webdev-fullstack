// function getUser(id,fn){

//     //
//     //
//     //
//     fn()
// }

// getUser("343",()=>{

// })

// function main() {
//   console.log("before set time out");
//   setTimeout(callFn, 3000);
//   console.log("after set time out");
// }

// function callFn() {
//   console.log("after 3 second");
// }

// main();

function main() {
  setInterval(callFn, 2000);
}

function callFn() {
  console.log("set interval");
}

main();
