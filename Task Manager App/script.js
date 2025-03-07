function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") return; // Prevent empty tasks

    let taskList = document.getElementById("taskList");

    let listItem = document.createElement("li");
    listItem.innerHTML = `
        <span onclick="toggleComplete(this)">${taskText}</span>
        <button class="delete" onclick="removeTask(this)">Delete</button>
    `; taskList.appendChild(listItem);
    taskInput.value = "";
}
function toggleComplete(task) {
    task.classList.toggle("completed");
}

function removeTask(button) {
    button.parentElement.remove();
}
