// 定义任务状态常量
const STATUS_WAITING = "Waiting";
const STATUS_DOING = "Doing";
const STATUS_FINISHED = "Finished";

// 获取任务列表和添加任务按钮
const list = document.getElementById("list");
const task = document.getElementById("task");
const btnAdd = document.getElementById("btn_add");


//1点击Add增加一项新任务
btnAdd.onclick = () => {
    var title = document.getElementById("title").value;
    // 输入验证
    if (title.trim() === "") {
        alert("Title不得为空");
        return;
    }
    list.innerHTML += `<tr id="task" class="Waiting">
        <td>${title}</td>
        <td><input type="button" value="×" onclick="deleteRow(this)"></td>
        </tr>`;
    // 清空输入框
    document.getElementById("title").value = "";
    alert("添加新任务成功!");
}

//2点击×删除一条记录
var deleteRow = (r) => {
    var i = r.parentNode.parentNode.rowIndex;
    list.deleteRow(i);
    alert("删除任务成功!");
}



// 点击记录改变状态
task.onclick = () => {
    if ("Waiting" == task.className) {
        task.classList.toggle(Doing);
    } else if ("Doing" == task.className) {
        task.classList.toggle(Finished);
    } else if ("Finished" == task.className) {
        task.classList.toggle(Waiting);
    }
}

