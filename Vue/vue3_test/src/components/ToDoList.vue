<template>
    <!-- <div class="container">
        <div class="header">

            <h3>My Todo List </h3>

            <div class="input">
                <input type="text" id="msg" value="" v-model="newTask" /><button id="btnAdd"
                    @click="addTask">添加</button>
            </div>s
        </div>
        <div class="todolistwrapper">
            <div class="status">
                <div class="stsitem" :class="{ 'active': showAll }" @click="selectStatus('All')">
                
                    <div>全部</div>
                </div>
                <div class="stsitem" :class="{ 'active': showWaiting }" @click="selectStatus('Waiting')">
                    
                    <div>Waiting</div>
                </div>
                <div class="stsitem" :class="{ 'active': showDoing }" @click="selectStatus('Doing')">
                    
                    <div>Doing</div>
                </div>
                <div class="stsitem" :class="{ 'active': showFinished }" @click="selectStatus('Finished')">
                    
                    <div>Finished</div>
                </div>
            </div>

            <div class="list">
                <div class="listitem" v-for="(item, index) in tasks" :key="index"
                    :class="{ odd: index % 2 === 0, even: index % 2 !== 0 }" @click="changeStatus(item)">
                    <div class="sts" :class="{
                        'bgRed': item.status === 'Waiting',
                        'bgYellow': item.status === 'Doing',
                        'bgGreen': item.status === 'Finished',
                    }">
                        {{ item.status }}
                    </div>
                    <div class="note">{{ item.detail }}</div>
                    <div class="delbtn" @click="deleteTask(index)">X</div>

                </div>

            </div>
        </div>
    </div> -->

    <div class="container">
        <div class="header">

            <h3>My Todo List </h3>

            <div class="input">
                <input type="text" id="msg" v-model="newName" /><button id="btnAdd" @click="add()">添加</button>
            </div>
        </div>
        <div class="todolistwrapper">
            <div class="status" id="dp">
                <div class="stsitem">
                    
                    <div>全部</div>
                </div>
                <div class="stsitem">
                    
                    <div>Wating</div>
                </div>
                <div class="stsitem">
                    
                    <div>Doing</div>
                </div>
                <div class="stsitem">
                
                    <div>Finished</div>
                </div>
            </div>

            <div class="list">
                <div class="listitem odd" v-for="(item,index) in list" @click="changeStatus(index)">
                    <div :class="{sts:stsActive,bgRed:item.status=='Waiting',bgGreen:item.status=='Finished',bgYellow:item.status == 'Doing'}">
                        {{ item.status }}
                    </div>
                    <div class="note">{{item.name}}</div>
                    <div class="delbtn" @click="del(index)">{{item.flag}}</div>
                </div>

            </div>

        </div>
    </div>


</template>

<script setup lang="ts">
import type { todo } from "@/types";
import { ref, reactive, computed, onMounted } from "vue";


let stsActive:true;
let newName = ref("");

let list = ref( new Array<todo>());
list.value.push( {status:"Doing",name:"上班打卡",flag:"X"})
list.value.push( {status:"Waiting",name:"中午吃饭",flag:"X"})
list.value.push( {status:"Finished",name:"下班睡觉",flag:"X"})

function add(){
    list.value.push( {status:"Waiting",name:newName.value,flag:"X"});
}

function del(index: number){
    list.value.splice(index,1);
}

function changeStatus(index:number){
    let tmp = list.value[index];
    if(tmp.status == "Doing")
        tmp.status = "Finished";
    else if(tmp.status=="Waiting")
        tmp.status = "Doing";
    else if(tmp.status == "Finished")
        alert("已结束事项");
}

function tt1(item:any){
    return 
}

function initArr(){
    let arr = new Array();
    for(let i = 0; i < list.value.length;i++){
        arr.push(list.value[i]);
    }
    return arr;
}

onMounted(() => {

    document.querySelectorAll(".stsitem").forEach((item,index,allitem) => {
        item.addEventListener("click",()=>{
            allitem.forEach((it,itindex) => {
                if(index == itindex)
                    it.className = "stsitem active";
                else
                    it.className = "stsitem";
            })
        })
    })

    switch(index){
        case 0://All
            break;
        case 1://Waiting
            // list.value = list.value.filter(item => item.status=="Waiting" )
            let newarr = [];
            for(let a = 0 ; a< list.value.length ; a++){
                if(list.value[a].status == "Waiting")
                    newarr.push(list.value[a])
            }
            list.value = newarr;
            break;
        case 2://Doing
            list.value = list.value.filter(item => item.status=="Doing" )
            break;
        case 3://Finished
            list.value = list.value.filter(item => item.status=="Finished" )
            break;
    }
})
    





// let showAll:boolean = true;
// let showWaiting:boolean = false;
// let showDoing:boolean = false;
// let showFinished:boolean = false;

// const newTask = ref('');
// const filter = ref('All');
// let tasks = reactive([
//     { status: 'Doing', detail: '上班打卡' },
//     { status: 'Waiting', detail: '中午吃饭' },
//     { status: 'Finished', detail: '下班睡觉' },
// ])

// function addTask() {
//     if (newTask.value.trim() !== '') {
//         tasks.push({ status: 'Waiting', detail: newTask.value });
//         newTask.value = '';
//     }
// }

// function deleteTask(index: number) {
//     tasks.splice(index, 1);
// }

// function changeStatus(task: { status: string; }) {
//     if (task.status === 'Finished') {
//         alert('已结束事项');
//     } else {
//         if (task.status === 'Waiting') {
//             task.status = 'Doing';
//         } else if (task.status === 'Doing') {
//             task.status = 'Finished';
//         }
//     }
// }

// function selectStatus(filterType: string) {
//     if ("All" == filterType){
//         showAll = true;
//         showWaiting = false;
//         showDoing = false;
//         showFinished = false;
//         console.log(filterType);
//         console.log(typeof(filterType));
//     }else if ("Waiting" == filterType){
//         showAll = false;
//         showWaiting = true;
//         showDoing = false;
//         showFinished = false;
//         console.log(filterType);
//         console.log(typeof(filterType));
//     }else if ("Doing" == filterType){
//         showAll = false;
//         showWaiting = false;
//         showDoing = true;
//         showFinished = false;
//         console.log(filterType);
//         console.log(typeof(filterType));
//     }else if ("Finished" == filterType){
//         showAll = false;
//         showWaiting = false;
//         showDoing = false;
//         showFinished = true;
//         console.log(filterType);
//         console.log(typeof(filterType));
//     }
// }


</script>

<style lang="css" scoped>
* {
    margin: 0;
    padding: 0;
    border: none;
    box-sizing: border-box;
}


body {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    width: 700px;

    /* background-color: azure; */
}

.container .header {
    height: 200px;
    width: 100%;
    background-color: #F54336;
    padding-top: 50px;
}

.container .header h3 {
    /* margin-top: 40px; */
    text-align: center;
    color: white;
}

.container .header .input {
    width: 80%;
    height: 60px;
    margin: 0 auto;
    background-color: aliceblue;

    display: flex;

}

.container .header .input input {
    flex: 1;
    height: 60px;
    outline: none;
    font-size: 30px;
}

.container .header .input button {
    width: 120px;
    height: 100%;
    cursor: pointer;
    background-color: rgb(149, 168, 136);
}

.container .header .input button:hover {
    background-color: blue;
    color: white;
}

.container .header .input button:active {
    background-color: rgb(169, 169, 216);
    color: white;
}



.todolistwrapper .status {
    width: 100%;
    height: 100px;
    /* border: solid 0.5px grey; */
    display: flex;
    justify-content: space-between;
}

.todolistwrapper .status .stsitem {
    width: 22%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    box-shadow: 0 0 5px rgb(177, 176, 176)
}

.todolistwrapper .status .active {
    background-color: grey;
    box-shadow: 0 0 10px rgb(131, 130, 130)
}

.todolistwrapper .list {
    height: 400px;
    overflow-y: auto;
}

.todolistwrapper .list .listitem {
    width: 100%;
    height: 70px;
    /* border: solid 1px red; */
    display: flex;
}

.todolistwrapper .list .listitem .sts {
    width: 100px;
    height: 100%;
    line-height: 70px;
    text-align: center;
    cursor: pointer;
}

.todolistwrapper .list .listitem .note {
    flex: 1;
    height: 100%;
    /* background-color: black; */
    line-height: 70px;
    padding-left: 5px;
    box-shadow: inset 0 0 10px green;
    cursor: pointer;
}

.todolistwrapper .list .listitem .delbtn {
    width: 100px;
    height: 100%;
    /* background-color: rgb(177, 109, 109) */
    border: solid 0.2px grey;
    line-height: 70px;
    text-align: center;
    cursor: pointer;
}

.todolistwrapper .list .listitem .delbtn:hover {
    background-color: aliceblue;
}

.bgRed {
    background-color: #F54336;
}

.bgYellow {
    background-color: yellow;
}

.bgGreen {
    background-color: green;
}
</style>