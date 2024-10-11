// 定义任务状态常量
const STATUS_WAITING = "Waiting";
const STATUS_DOING = "Doing";
const STATUS_FINISHED = "Finished";

// 获取任务列表和添加任务按钮
const list = document.getElementById("list");
const btnAdd = document.getElementById("btn_add");

// 点击 Add 增加一项新任务
btnAdd.onclick = () => {
    const title = document.getElementById("title").value;
    // 输入验证
    if (title.trim() === "") {
        alert("Title 不得为空");
        return;
    }
    const newTask = {
        title,
        status: STATUS_WAITING
    };
    addTaskToList(newTask);
    // 清空输入框
    document.getElementById("title").value = "";
    alert("添加新任务成功!");
};

// 添加任务到列表
function addTaskToList(task) {
    const newRow = list.insertRow(-1);
    const titleCell = newRow.insertCell(0);
    const deleteCell = newRow.insertCell(1);
    titleCell.textContent = task.title;
    titleCell.addEventListener("click", () => toggleTaskStatus(task));
    deleteCell.innerHTML = `<input type="button" value="×" onclick="deleteTask(this)">`;
    newRow.classList.add(task.status);
}

// 点击记录改变状态
function toggleTaskStatus(task) {
    switch (task.status) {
        case STATUS_WAITING:
            task.status = STATUS_DOING;
            break;
        case STATUS_DOING:
            task.status = STATUS_FINISHED;
            break;
        case STATUS_FINISHED:
            task.status = STATUS_WAITING;
            break;
    }
    updateTaskListDisplay();
}

// 点击×删除一条记录
function deleteTask(r) {
    const i = r.parentNode.parentNode.rowIndex;
    list.deleteRow(i);
    alert("删除任务成功!");
    updateTaskListDisplay();
}

// 根据未执行、执行中、执行完等状态分类显示
function updateTaskListDisplay() {
    const allTasks = getTasksFromList();
    list.innerHTML = "";
    const option1 = document.getElementById("option1");
    const option2 = document.getElementById("option2");
    const option3 = document.getElementById("option3");
    const option4 = document.getElementById("option4");
    if (option1.checked) {
        allTasks.forEach(task => addTaskToList(task));
    } else if (option2.checked) {
        allTasks.filter(task => task.status === STATUS_WAITING).forEach(task => addTaskToList(task));
    } else if (option3.checked) {
        allTasks.filter(task => task.status === STATUS_DOING).forEach(task => addTaskToList(task));
    } else if (option4.checked) {
        allTasks.filter(task => task.status === STATUS_FINISHED).forEach(task => addTaskToList(task));
    }
}

// 从列表中获取所有任务
function getTasksFromList() {
    const rows = list.getElementsByTagName("tr");
    const tasks = [];
    for (let i = 0; i < rows.length; i++) {
        const titleCell = rows[i].cells[0];
        const taskTitle = titleCell.textContent;
        const statusCell = rows[i].cells[1].querySelector("input[type='button']");
        let status;
        if (rows[i].classList.contains("Waiting")) {
            status = STATUS_WAITING;
        } else if (rows[i].classList.contains("Doing")) {
            status = STATUS_DOING;
        } else if (rows[i].classList.contains("Finished")) {
            status = STATUS_FINISHED;
        }
        tasks.push({ title: taskTitle, status });
    }
    return tasks;
}

// 监听单选按钮状态改变
const radioButtons = document.querySelectorAll('input[type="radio"]');
radioButtons.forEach(radioButton => radioButton.addEventListener("change", updateTaskListDisplay));