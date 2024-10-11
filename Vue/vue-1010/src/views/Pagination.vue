<template>

    <h1>Pagination测试</h1>

    <div class="example-pagination-block">
    <div class="example-demonstration">一共50条，默认每页10条</div>
    <el-pagination layout="prev, pager, next" :total="50" />
  </div>

    <div class="example-pagination-block">
    <div class="example-demonstration">一共1000条，每页99条</div>
    <el-pagination :page-size="99" layout="prev, pager, next" :total="1000" />
  </div>

</template>


<script setup lang="ts">



</script>



<style lang="css" scoped>

.example-pagination-block + .example-pagination-block {
  margin-top: 10px;
}
.example-pagination-block .example-demonstration {
  margin-bottom: 16px;
}

</style>