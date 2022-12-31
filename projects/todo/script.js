let todos = [];

let open = false;

const createForm = document.getElementById("createForm");
createForm.addEventListener("submit", createNewTodo);

const todoUl = document.querySelector("#todosContainer");

const editDialog = document.querySelector("#editDialog");

function createNewTodo(e) {
  e.preventDefault();
  const formData = new FormData(createForm);
  const content = formData.get("content");

  // create new todo object
  const todo = {
    id: crypto.randomUUID(),
    content,
    createdAt: new Date().toLocaleDateString(),
  };

  console.log(todo);

  todos.push(todo);

  createForm.reset();

  renderUI();
}

function renderUI() {
  let todoLi = "";

  todos.forEach((todo) => {
    todoLi += `
      <li class="item">
  <!-- content  -->
  <div class="item-content">
    <p>${todo.content}</p>
    <small>${todo.createdAt}</small>
  </div>
  <!-- action  -->

  <div class="action-container">
      <button onclick="deleteTodo('${todo.id}')">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="16" height="16">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
            
      </button>
      <button onclick="editTodo('${todo.id}')">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="16" height="16">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
            </svg>
            
      </button>
  </div>
</li>`;
  });

  todoUl.innerHTML = todoLi;
}

function deleteTodo(id) {
  const filterTodos = todos.filter((todo) => todo.id !== id);
  todos = filterTodos;
  renderUI();
}

function editTodo(id) {
  editDialog.setAttribute("open", true);

  const todo = todos.find((todo) => todo.id === id);
  const dialogContent = `
  <div  id="updateForm" style="display: flex;flex-direction: column;gap: 8px;">
  <div>
    <label for="content">Todo content</label>
    <input style="width: 100%;" type="text" name="content" id="content${id}" value="${todo.content}">
  </div>
  <button onclick="handleUpdate('${id}')">Update</button>
</div>
  `;

  editDialog.innerHTML = dialogContent;
}

function handleUpdate(id) {
  const contentNode = document.getElementById(`content${id}`);

  const updatedTodos = todos.map((todo) => {
    if (todo.id === id) {
      todo.content = contentNode.value;
    }

    return todo;
  });

  todos = updatedTodos;

  renderUI();

  editDialog.removeAttribute("open");
}
