const createForm = document.getElementById("createForm");
createForm.addEventListener("submit", createNewTodo);
const onLoad = () => {};

function createNewTodo(e) {
  e.preventDefault();
  console.log(e);
}
window.addEventListener("load", onLoad);
window.removeEventListener("load", onLoad);
