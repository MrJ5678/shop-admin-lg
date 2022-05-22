<template>
  <div class="bell-container">
    <el-icon :size="20">
      <Bell />
    </el-icon>
  </div>
</template>

<script lang="ts" setup>
import { Bell } from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped>
.bell-container {
  display: flex;
  align-items: center;
  margin: 0 10px 0 5px;
}
</style>
