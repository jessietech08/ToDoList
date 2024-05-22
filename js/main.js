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
    console.log(T);
}
