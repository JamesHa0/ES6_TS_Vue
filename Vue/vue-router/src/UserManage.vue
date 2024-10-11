<template>
    <div class="main">
        <div class="left">
            <ul>
                <li><RouterLink to="/home">用户管理</RouterLink></li>
            </ul>
        </div>
        <div class="right">
            <RouterView></RouterView>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="css" scoped>
.left{
  width: 30%;
  height: 100%;
  position: fixed;
  background-color: rgb( 30, 46, 61);
  
}

.left ul{
    list-style: none;
}

.left a{
  text-align: center;
  width: 90px;
  height: 40px;
  line-height: 40px;
  text-decoration: none;
  color: white;
  font-size: 18px;
  letter-spacing: 5px;
}

.right{
    position: fixed;
    height: 100%;
    width: 68%;
    right: 0;
    bottom: 0;
}


</style>