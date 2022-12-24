const todos = [];

// add data in todo

function createNewTodo(text) {
  const todo = {
    text: text,
    isCompleted: false,
  };

  //   push method

  todos.push(todo);
}

// view todo item

function viewTodos() {
  todos.forEach((todo) => console.log(`${todo.text} --> ${todo.isCompleted}`));
}

function updateTodo(text) {
  const finded = todos.find((todo) => todo.text === text);
  finded.isCompleted = !finded.isCompleted;
}

// delete todo

function deleteTodo(text) {
  const index = todos.findIndex((todo) => todo.text === text);
  todos.splice(index, 1);
}
createNewTodo("Learn Javascript Object");
createNewTodo("Learn Javascript Async/Await");

viewTodos();

updateTodo("Learn Javascript Async/Await");

viewTodos();

deleteTodo("Learn Javascript Async/Await");

viewTodos();
