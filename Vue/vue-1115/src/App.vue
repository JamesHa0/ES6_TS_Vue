<template>
  <h1>首页</h1>
  <button @click="test">发送请求</button>
</template>

<script setup lang="ts">
import axios from 'axios'

function test() {
  axios.get('http://localhost:8080/demo1114/first').then(function (response) {
    console.log(response.data[0]);
    console.log(response.data[1]);

  })
}
</script>

<style scoped></style>
