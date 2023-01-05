console.log("Hello");

setImmediate(() => {
  console.log("immediate callback run");
});

setTimeout(() => {
  console.log("inside settimeout");
}, 0);

console.log("end");
