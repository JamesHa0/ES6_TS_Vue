<template>
<div>
    <ul>
        <li v-for="item in props.list" :key="item.id">
            {{ item.name }} -- {{ item.age }}
        </li>
    </ul>
</div>
</template>

<script setup lang="ts">
import { type PersonInter, type Persons } from "@/types";

// const props = defineProps(['list','username'])  //1.仅接收
const props = defineProps<{list:Persons,username?:number}>() //2.接收+限制类型
// let props = withDefaults(defineProps< {list?:Persons}>() , {list:()=>[{id:"e000",name:"未传值",age:"99"}]} ) //3.接收+限制类型+指定默认值+限制必要性
console.log((props.list));
console.log(props.username);


</script>

<style lang="css" scoped>

</style>