const addButton = document.getElementById('addButton');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            ${taskText}
            <button class="completeButton">Complete</button>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = '';
        attachCompleteHandler(taskItem);
    }
});

function attachCompleteHandler(taskItem) {
    const completeButton = taskItem.querySelector('.completeButton');
    completeButton.addEventListener('click', () => {
        taskItem.classList.toggle('completed');
    });
}
