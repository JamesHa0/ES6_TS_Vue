<template>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页 </el-breadcrumb-item>
        <el-breadcrumb-item>权限管理</el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
    </el-breadcrumb>
    <br>

    <el-input v-model="input" style="width: 400px" placeholder="Please userName" clearable>
        <template #prepend>用户名</template>
    </el-input>

    <el-button type="primary">查询</el-button>
    <el-button type="primary" plain @click="dialogAddVisible = true">添加</el-button>
    <br><br>

    <el-table :data="showData()" border style="width: 100%">
        <el-table-column prop="id" label="" width="50" />
        <el-table-column prop="name" label="姓名" width="180" />
        <el-table-column prop="age" label="年龄" width="180" />
        <el-table-column prop="address" label="地址" width="360" />
        <el-table-column label="Operations">
            <template #default="scope">
                <el-button size="small" @click="edit(scope.$index, scope.row)">
                    Edit
                </el-button>
                <el-button size="small" type="danger" @click="del(scope.$index)">
                    Delete
                </el-button>
            </template>
        </el-table-column>
    </el-table>

    <br>

    <div class="pagination">
        <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize" :page-sizes="[3, 5, 10, 20]"
            :pager-count="7" layout="total, sizes, prev, pager, next, jumper" :total="totalDate"
            @size-change="handleSizeChange" @current-change="" />
    </div>

    <!--添加-->
    <el-dialog v-model="dialogAddVisible" title="添加用户" width="500">
        <el-form :model="form">
            <el-form-item label="姓名" label-width="100px">
                <el-input v-model="form.name" autocomplete="off" />
            </el-form-item>
            <el-form-item label="年龄" label-width="100px">
                <el-input v-model="form.age" autocomplete="off" />
            </el-form-item>
            <el-form-item label="地址" label-width="100px">
                <el-input v-model="form.address" autocomplete="off" />
            </el-form-item>
        </el-form>
        <template #footer>
            <div class="dialog-footer">
                <el-button @click="dialogAddVisible = false">取消</el-button>
                <el-button type="primary" @click="addUserData()">
                    确认
                </el-button>
            </div>
        </template>
    </el-dialog>

    <!--编辑-->
    <el-dialog v-model="dialogEditVisible" title="编辑用户" width="500">
        <el-form :model="form">
            <el-form-item label="姓名" label-width="100px">
                <el-input v-model="editForm.name" autocomplete="off" />
            </el-form-item>
            <el-form-item label="年龄" label-width="100px">
                <el-input v-model="editForm.age" autocomplete="off" />
            </el-form-item>
            <el-form-item label="地址" label-width="100px">
                <el-input v-model="editForm.address" autocomplete="off" />
            </el-form-item>
        </el-form>
        <template #footer>
            <div class="dialog-footer">
                <el-button @click="dialogEditVisible = false">取消</el-button>
                <el-button type="primary" @click="editUserData()">
                    确认
                </el-button>
            </div>
        </template>
    </el-dialog>

</template>



<script setup lang="ts">

import type { RefSymbol } from '@vue/reactivity';
import { onMounted, reactive, ref } from 'vue';

const allUserData = ref([
    {
        id: '1',
        name: '张三1',
        age: '20',
        address: '哈尔滨'
    },
    {
        id: '2',
        name: '张三2',
        age: '22',
        address: '吉林'
    },
    {
        id: '3',
        name: ' 张三 3',
        age: '21',
        address: ' 长春 '
    },
    {
        id: '4',
        name: ' 张三 4',
        age: '23',
        address: ' 沈阳 '
    },
    {
        id: '5',
        name: ' 张三 5',
        age: '24',
        address: ' 大连 '
    },
    {
        id: '6',
        name: ' 张三 6',
        age: '19',
        address: ' 鞍山 '
    },
    {
        id: '7',
        name: ' 张三 7',
        age: '25',
        address: ' 抚顺 '
    },
    {
        id: '8',
        name: ' 张三 8',
        age: '18',
        address: ' 本溪 '
    },
    {
        id: '9',
        name: ' 张三 9',
        age: '26',
        address: ' 丹东 '
    },
    {
        id: '10',
        name: ' 张三 10',
        age: '27',
        address: ' 锦州 '
    },
    {
        id: '11',
        name: ' 张三 11',
        age: '17',
        address: ' 营口 '
    },
    {
        id: '12',
        name: ' 张三 12',
        age: '28',
        address: ' 阜新 '
    },
    {
        id: '13',
        name: ' 张三 13',
        age: '29',
        address: ' 辽阳 '
    },
    {
        id: '14',
        name: ' 张三 14',
        age: '16',
        address: ' 盘锦 '
    },
    {
        id: '15',
        name: ' 张三 15',
        age: '30',
        address: ' 铁岭 '
    },
    {
        id: '16',
        name: ' 张三 16',
        age: '31',
        address: ' 朝阳 '
    },
    {
        id: '17',
        name: ' 张三 17',
        age: '15',
        address: ' 葫芦岛 '
    },
    {
        id: '18',
        name: ' 张三 18',
        age: '32',
        address: ' 北京 '
    },
    {
        id: '19',
        name: ' 张三 19',
        age: '33',
        address: ' 上海 '
    },
    {
        id: '20',
        name: ' 张三 20',
        age: '34',
        address: ' 广州 '
    },
    {
        id: '21',
        name: ' 张三 21',
        age: '35',
        address: ' 深圳 '
    },
    {
        id: '22',
        name: ' 张三 22',
        age: '36',
        address: ' 杭州 '
    },
    {
        id: '23',
        name: ' 张三 23',
        age: '37',
        address: ' 南京 '
    },
    {
        id: '24',
        name: ' 张三 24',
        age: '38',
        address: ' 武汉 '
    },
    {
        id: '25',
        name: ' 张三 25',
        age: '39',
        address: ' 成都 '
    },
    {
        id: '26',
        name: ' 张三 26',
        age: '40',
        address: ' 重庆 '
    },
    {
        id: '27',
        name: ' 张三 27',
        age: '41',
        address: ' 西安 '
    },
    {
        id: '28',
        name: ' 张三 28',
        age: '42',
        address: ' 长沙 '
    },
    {
        id: '29',
        name: ' 张三 29',
        age: '43',
        address: ' 郑州 '
    },
    {
        id: '30',
        name: ' 张三 30',
        age: '44',
        address: ' 济南 '
    }
])
const input = ref('');
const dialogAddVisible = ref(false);
const dialogEditVisible = ref(false);
const currentPage = ref(1);
const pageSize = ref(5);
let totalDate = allUserData.value.length;

const del = (index: number) => {
    allUserData.value.splice(index, 1);
    totalDate = allUserData.value.length;
    showData();
}

let editForm = reactive({
    id: '',
    name: '',
    age: '',
    address: ''
});

const edit = (index: number, row: { id: string; name: string; age: string; address: string; }) => {
    editForm = { ...row };
    dialogEditVisible.value = true;
}

const editUserData = () => {
    const editIndex = allUserData.value.findIndex(item => item.id === editForm.id);
    if (editIndex !== -1) {
        allUserData.value[editIndex] = editForm;
    }
    dialogEditVisible.value = false;
    showData();
}

let form = ref({
    name: '',
    age: '',
    address: ''
});

const addUserData = () => {
    allUserData.value.push({
        id: String(allUserData.value.length + 1),
        name: form.value.name,
        age: form.value.age,
        address: form.value.address
    });
    showData();
    dialogAddVisible.value = false;
    form.value = {
        name: '',
        age: '',
        address: ''
    };
    totalDate = allUserData.value.length;
}


const showData = () => {
    let start = (currentPage.value - 1) * pageSize.value;
    return allUserData.value.slice(start, start + pageSize.value);
};


onMounted(() => {
    showData();
});

function handleSizeChange() {
    currentPage.value = 1;
    showData();
}


</script>


<style lang="css" scoped>
.el-button {
    margin: auto 20px;
}
</style>