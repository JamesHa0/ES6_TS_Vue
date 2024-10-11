<template>

<div class="count">
    <h1>欢迎来到：{{ myclass }}，<!-- 大写：{{ upperClass }}， -->地址位于：{{ address }}</h1>
    <h2>当前求和为：{{ sum }}</h2>
    <!-- <h3>十倍：{{ bigSum }}</h3> -->
    <select v-model.number="n">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
    </select>

    <button @click="add">加</button>
    <button @click="sub">减</button>
</div>

</template>

<script setup lang="ts">
import { useCountStore } from '@/store/count';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const countStore = useCountStore();
let {sum,address,myclass} = storeToRefs(countStore);


let n = ref(1);

function add(){
    //第一种方式：直接修改
    //countStore.sum += 1;

    //第二种方式：直接修改对象（可改多个数据）
    // countStore.$patch({
    //     sum:888,
    //     a:"world"
    // })

    //第三种方式：调用
    countStore.increment(n.value);
}

function sub(){
    countStore.minus(n.value);
}

</script>

<style lang="css" scoped>
.count{
    border-color: blue;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
}
select,button{
    margin: 0 5px;
    height: 25px;
}
</style>