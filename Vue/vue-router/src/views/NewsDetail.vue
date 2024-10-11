<template>
    <h3>News' Detail</h3>
    {{ id }} -- {{ title }} -- {{ content }}
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, toRefs } from 'vue';
import { useRoute } from 'vue-router';

// let route = useRoute();
// let { query } = toRefs(route);

// console.log("query参数")

// let route = useRoute();
// let { params } = toRefs(route);

// console.log("params参数");

defineProps(["id","title","content"]);

 onMounted(()=>{
    console.log("CSS Detail 组件 挂载");
    
 })
 onUnmounted(()=>{
    console.log("CSS Detail 组件卸载");
 })

</script>

<style lang="css" scoped>

</style>