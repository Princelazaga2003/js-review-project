// ==== Todo CRUD Management ====

// Array to store todos
let todo = []; // Change todos to todo

// DOM Elements
const todoFrom = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Function to render todos
function renderTodos() {
todoList.innerHTML = ''; // Clear the list
todo.forEach((todoItem, index) => {
const li = document.createElement('li');
li.className = 'todo-item';
li.innerHTML = `
<span>${todoItem}</span>
<button onclick="editTodo(${index})">Edit</button>
<button onclick="delteTodo(${index})">Delete</button>
`;
todoList.appendChild(li);
});
}

// Function to add a new todo
function addTodo(event) {
event.preventDefault(); // Prevent form submission
const newTodo = todoInput.value.trim();
if (newTodo) {
todo.push(newTodo); // Use todo instead of WebTransportBidirectionalStream.push
todoInput.value = '';
renderTodos();
}
}

// Function to edit a Todo
function editTodo(index) {
const updatedTodo = prompt('Edit your todo:', todo[index]);
todo[index] = updatedTodo.trim();
renderTodos(); // Corrected the typo here
}

// Function to delete a todo
function delteTodo(index) {
if (confirm('Are you sure you want to delete this todo?')) {
todo.splice(index, 1);
renderTodos();
}
}

// Event Listeners
todoFrom.addEventListener('submit', addTodo);

// Initial render
renderTodos();