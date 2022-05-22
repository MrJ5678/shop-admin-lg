<template>
  <el-container>
    <el-aside>
      <app-menu />
    </el-aside>
    <el-container>
      <el-header>
        <app-header-index />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import AppMenu from '@/layout/components/AppMenu/AppMenu.vue'
import AppHeaderIndex from '@/layout/components/AppHeader/AppHeaderIndex.vue'
</script>

<style lang="scss" scoped>
.el-container {
  height: 100vh;
  min-width: 800px;
}
.el-header {
  margin: 10px 10px 10px 0;
  border-radius: 5px;
  display: flex;
  align-items: center;
  background-color: #b3c0d1;
  color: #333;
}

.el-aside {
  margin: 10px;
  border-radius: 5px;
  width: auto;
  background-color: #304156;
  color: #333;
}

.el-main {
  margin: 0 10px 10px 0;
  border-radius: 5px;
  background-color: #e9eef3;
  color: #333;
}
</style>
