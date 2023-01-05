// nextTick api

console.log("start");

process.nextTick(() => {
  console.log("code inside nextTick");
});

setTimeout(() => {
  console.log("run after timeout for 2 seconds");
}, 2000);

new Promise((resolve, reject) => {
  resolve("Promise resolved");
}).then((resloveValue) => console.log(resloveValue));

console.log("end");
