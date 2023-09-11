const addButton = document.getElementById('addButton');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const clearButton = document.getElementById('clearButton');

addButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskItem = document.createElement('li');
        const completeButton = document.createElement('button');
        completeButton.className = 'completeButton';
        completeButton.innerText = 'Complete';
        taskItem.appendChild(document.createTextNode(taskText));
        taskItem.appendChild(completeButton);
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
});

taskList.addEventListener('click', (event) => {
    if (event.target.classList.contains('completeButton')) {
        const completeButton = event.target;
        const taskItem = completeButton.parentElement;
        
        taskItem.classList.toggle('completed');
        if (taskItem.classList.contains('completed')) {
            completeButton.style.backgroundColor = 'gray';
            completeButton.innerText = 'Completed';
        } else {
            completeButton.style.backgroundColor = '#007bff';
            completeButton.innerText = 'Complete';
        }
    }
});

clearButton.addEventListener('click', () => {
    taskList.innerHTML = '';
});
