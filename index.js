const todoInput = document.querySelector(".todo-input");
const addBtn = document.querySelector(".add-button");
const todoList = document.querySelector(".list");
const filterOption = document.querySelector(".filter-list");
const todoPlaceholder = document.querySelector(".todo-placeholder");
let date = document.querySelector(".date");
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const todayDate = new Date();
let currentDate = todayDate.getDate();
date.innerText = currentDate + " " + monthNames[todayDate.getMonth()];

addBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("change", filterTodo);

function addTodo(event) {
  event.preventDefault();

  const newDiv = document.createElement("div");
  newDiv.classList.add("todo-item");

  const newTodo = document.createElement("li");
  newTodo.classList.add("new-todo");
  newTodo.innerText = todoInput.value;
  newDiv.appendChild(newTodo);

  const completeBtn = document.createElement("button");
  completeBtn.classList.add("complete-btn");
  completeBtn.innerHTML =
    '<i class="fa-solid fa-circle-check fa-xl" style="color: #1e1e1e;"></i>';
  newDiv.appendChild(completeBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.innerHTML =
    '<i class="fa-solid fa-trash fa-lg" style="color: #1e1e1e;"></i>';
  newDiv.appendChild(deleteBtn);

  todoList.appendChild(newDiv);
  todoInput.value = "";
  todoPlaceholder.remove();
}

function deleteCheck(e) {
  const item = e.target;

  if (item.classList[0] === "delete-btn") {
    const todo = item.parentElement;
    todo.remove();
  }

  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterTodo(e) {
  const todos = Array.from(document.querySelectorAll(".list .todo-item"));
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
