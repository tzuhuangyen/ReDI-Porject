// Select elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('task-list');

// Add task event listener
addTaskButton.addEventListener('click', function () {
  const taskText = taskInput.value;
  if (taskText) {
    const taskItem = document.createElement('div');
    taskItem.className = 'task-item';

    taskItem.innerHTML = `
       <span>${taskText}</span>
       <button onclick="editTask(this)">Edit</button>
       <button onclick="removeTask(this)">Remove</button>
     `;

    taskList.appendChild(taskItem);
    taskInput.value = ''; // Clear the input field
  }
});

// Edit task function
function editTask(button) {
  const taskItem = button.parentElement;
  const taskText = taskItem.querySelector('span').textContent;
  const newTaskText = prompt('Edit task:', taskText);
  if (newTaskText !== null) {
    taskItem.querySelector('span').textContent = newTaskText;
  }
}

// Remove task function
function removeTask(button) {
  const taskItem = button.parentElement;
  taskItem.remove();
}
