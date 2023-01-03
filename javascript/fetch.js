async function fetchUser() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    method: "get",
    headers: {
      token: "jsjsjjsj",
      accept: "application/json",
    },
  });

  console.log(res.status);
  console.log(res.statusText);
  console.log(res.ok);

  const todo = await res.json();

  console.log(todo);
  console.log(todo.id);
  console.log(todo.completed);
}

fetchUser();
