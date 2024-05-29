class ToDoItem {
}
window.onload = function () {
    let addTaskBtn = document.querySelector("#add-task");
    addTaskBtn.onclick = processToDoItem;
};
function processToDoItem() {
    let userTask = getToDoItem();
    if (userTask != null) {
        addTask(userTask);
    }
}
function getToDoItem() {
    let taskTextBox = document.querySelector("#task");
    let task = taskTextBox.value;
    let addedToDoItem = new ToDoItem();
    addedToDoItem.task = task;
    return addedToDoItem;
}
function addTask(T) {
    let taskDiv = document.createElement("div");
    taskDiv.className = 'todo-item';
    let taskCheckBox = document.createElement("input");
    taskCheckBox.type = "checkbox";
    let taskLabel = document.createElement("label");
    taskLabel.textContent = T.task;
    taskDiv.appendChild(taskCheckBox);
    taskDiv.appendChild(taskLabel);
    let taskListDisplay = document.querySelector("#list-display");
    taskListDisplay.appendChild(taskDiv);
}
