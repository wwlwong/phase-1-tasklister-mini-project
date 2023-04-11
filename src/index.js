document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    //console.log(e.target.elements.namedItem('new-task-description').value)
    createNewTask(e.target.elements.namedItem('new-task-description').value);
  })
});

function createNewTask(newTask){
  let task = document.createElement('li');
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x'
  task.textContent = `${newTask} `;
  
  document.getElementById('tasks').appendChild(task)
  task.appendChild(btn)
}

function handleDelete(e){
  e.target.parentNode.remove()
}