<template>
  <el-container>


    <el-header height="120px">
      <h1>xxx系统</h1>
    </el-header>

    <el-container>

    <el-aside>
      <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo"
        :default-active="$route.path" text-color="#fff" @open="handleOpen" @close="handleClose" router="true">

        <el-sub-menu index="1">
          <template #title>
            <el-icon>
              <location />
            </el-icon>
            <span>ElementPlus组件介绍</span>
          </template>
          <el-menu-item-group title="一组">
            <el-menu-item index="1-1">Button</el-menu-item>
            <el-menu-item index="1-2">Table</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="/pagination">分页管理</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title>三级菜单示例</template>
            <el-menu-item index="1-4-1">示例</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>

        <el-menu-item index="/a1" @click="handleClick()">
          <el-icon><icon-menu /></el-icon>
          <span>采购管理</span>
        </el-menu-item>

        <el-menu-item index="3" disabled>
          <el-icon>
            <document />
          </el-icon>
          <span>disabled示例</span>
        </el-menu-item>

        <el-menu-item index="/a2">
          <el-icon>
            <setting />
          </el-icon>
          <span>库存管理</span>
        </el-menu-item>

      </el-menu>
    </el-aside>



    <el-main>
      <router-view></router-view>
    </el-main>

  </el-container>
  </el-container>


</template>



<script setup lang="ts">
import router from './router';


function handleClick() {
  console.log('采购管理被点击了');
}


</script>



<style lang="css" scoped>
.el-header {
  background-color: #ccc;
}

.el-menu {
  height: 600px;
}
</style>