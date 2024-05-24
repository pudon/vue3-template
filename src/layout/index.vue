<script setup>
import SideBar from './components/SideBar.vue'
</script>

<template>
  <el-container class="layout-wrap">
    <el-aside>
      <SideBar />
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <router-view />
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<style lang="scss" scoped>
.layout-wrap {
  height: 100%;

  .el-aside,
  .el-header,
  .el-main,
  .el-footer {
    border: 1px solid #000;
  }
}
</style>
