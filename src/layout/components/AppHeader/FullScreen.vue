<template>
  <div
    class="full-container"
    @click="toggleFullScreen"
  >
    <el-icon :size="20">
      <FullScreen />
    </el-icon>
  </div>
</template>

<script lang="ts" setup>
import { FullScreen } from '@element-plus/icons-vue'

const toggleFullScreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen()
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    }
  }
}
</script>

<style lang="scss" scoped>
.full-container {
  margin: 0 10px 0 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

</style>
