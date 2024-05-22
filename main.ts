class ToDoItem {
    /**
     * a task to be completed
     */
    task: string
}

window.onload = function() {
    // set up button click for add task form
    // # find element with id of add-task
    let addTaskBtn = document.querySelector("#add-task") as HTMLButtonElement;
    addTaskBtn.onclick = processToDoItem;
}

function processToDoItem() {
    let userTask = getToDoItem();
    if (userTask != null) {
        addTask(userTask);
    }
}

function getToDoItem():ToDoItem {
    // get task entered
    let taskTextBox = document.querySelector("#task") as HTMLInputElement;
    let task:string = taskTextBox.value;

    // create ToDoItem object
    let addedToDoItem = new ToDoItem();
    addedToDoItem.task = task;
    
    return addedToDoItem;
}

function addTask(T:ToDoItem) {
    // test
    console.log(T);

    let taskDiv:HTMLDivElement = document.createElement("div");
    let taskHeading:HTMLHeadElement = document.createElement("h3");
    taskHeading.textContent = `${T.task}`;
    taskDiv.appendChild(taskHeading);

    let taskListDisplay = document.querySelector("#list-display");
    taskListDisplay.appendChild(taskDiv);
}