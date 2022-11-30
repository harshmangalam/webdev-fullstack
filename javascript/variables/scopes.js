// function level scope

// block level scope

// global scope

function getName() {
//   console.log("inside the function", name);
  if (true) {
    let name = "my name";
    console.log("inside code block");
  }

  
}

// console.log("outside of function on global scope", name);

getName();
