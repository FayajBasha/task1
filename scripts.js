function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const taskList = document.getElementById('task-list');

    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <span>${taskText}</span>
        <div>
            <button class="edit-btn" onclick="editTask(this)">Edit</button>
            <button onclick="deleteTask(this)">Delete</button>
            <button onclick="completeTask(this)">Complete</button>
        </div>
    `;

    taskList.appendChild(listItem);
    taskInput.value = '';
}

function deleteTask(button) {
    const listItem = button.parentElement.parentElement;
    listItem.remove();
}

function completeTask(button) {
    const listItem = button.parentElement.parentElement;
    listItem.classList.toggle('completed');
}

function editTask(button) {
    const listItem = button.parentElement.parentElement;
    const taskText = listItem.querySelector('span').innerText;

    const newTaskText = prompt('Edit your task:', taskText);
    if (newTaskText !== null && newTaskText.trim() !== '') {
        listItem.querySelector('span').innerText = newTaskText.trim();
    }
}
