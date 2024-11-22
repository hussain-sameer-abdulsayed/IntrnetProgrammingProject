const taskList = document.getElementById('taskList');

// Fetch tasks from localStorage
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

tasks.forEach((task, index) => {
  const li = document.createElement('li');

  // Task Header: Title and Buttons
  const taskHeader = document.createElement('div');
  taskHeader.className = 'task-header';

  const title = document.createElement('h3');
  title.textContent = task.title;

  // Add status indicator (yellow for incomplete, green for completed)
  const statusIndicator = document.createElement('span');
  statusIndicator.className = task.completed
    ? 'status completed'
    : 'status incomplete';
  statusIndicator.title = task.completed ? 'Completed' : 'Incomplete';

  const completeBtn = document.createElement('button');
  completeBtn.textContent = task.completed
    ? 'Mark as Incomplete'
    : 'Mark as Complete';
  completeBtn.className = 'complete';
  completeBtn.addEventListener('click', () => {
    tasks[index].completed = !tasks[index].completed;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    location.reload();
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'delete';
  deleteBtn.addEventListener('click', () => {
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    location.reload();
  });

  taskHeader.append(statusIndicator, title, completeBtn, deleteBtn);

  // Task Description
  const description = document.createElement('p');
  description.textContent = task.description;

  li.append(taskHeader, description);
  taskList.appendChild(li);
});
