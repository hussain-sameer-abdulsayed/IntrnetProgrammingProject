const addTaskBtn = document.getElementById('addTaskBtn');

addTaskBtn.addEventListener('click', () => {
  const title = document.getElementById('taskTitle').value.trim();
  const description = document.getElementById('taskDescription').value.trim();

  if (!title || !description) {
    alert('Please enter both a title and description.');
    return;
  }

  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.push({ title, description, completed: false });
  localStorage.setItem('tasks', JSON.stringify(tasks));

  alert('Task added successfully!');
  document.getElementById('taskTitle').value = '';
  document.getElementById('taskDescription').value = '';
});
