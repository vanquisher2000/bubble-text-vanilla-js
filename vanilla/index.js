const form = document.querySelector("form");
const input = document.querySelector("[name = 'todo']");
const todoList = document.getElementById("todos");

const existingTodos = JSON.parse(localStorage.getItem("todos"));

const todoData = existingTodos || [];

todoData.forEach(element => {
    SetupList(element);
});

function SetupList(todo){
    todoData.push(todo);
    const li = document.createElement("li");
    li.innerHTML = todo;
    todoList.appendChild(li);
    localStorage.setItem("todos", JSON.stringify(todoData));
}

form.onsubmit = (event) =>{
    console.log(input.value);
    event.preventDefault();
    SetupList(input.value);
}