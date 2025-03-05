document.getElementById("addTask").addEventListener("click", function () {
    const taskName = document.getElementById("taskName").value.trim();
    const taskPriority = document.getElementById("taskPriority").value;

    if (taskName === "") {
        alert("Please enter a valid task name.");
        return;
    }

    const taskList = document.getElementById("taskList");

    const li = document.createElement("li");
    li.classList.add(taskPriority.toLowerCase());
    li.innerHTML = `${taskName} <span class="priority">(${taskPriority})</span>
        <button class="remove">❌</button>`;

    taskList.appendChild(li);

    li.querySelector(".remove").addEventListener("click", function () {
        li.remove();
    });

    document.getElementById("taskName").value = "";
});
