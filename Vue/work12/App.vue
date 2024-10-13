<template>
  <el-container>


    <el-header>
      <span>xxx系统</span>
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
              <span>权限管理</span>
            </template>
            <el-menu-item index="/a1">用户管理</el-menu-item>
            <el-menu-item index="1-2">菜单管理</el-menu-item>
            <el-menu-item index="1-3">角色管理</el-menu-item>
          </el-sub-menu>

          <el-menu-item index="/a2">
            <el-icon>
              <location />
            </el-icon>
            <span>系统管理</span>
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

</script>



<style lang="css" scoped>
.el-header {
  background-color: #75C2F5;
  color: #fff;
}

.el-header span {
  font-size: 22px;
  line-height: 60px;
}

.el-menu {
  height: 600px;
}
</style>