<template>
  <div
    @click="handleCollapse"
    class="icon-container"
  >
    <template v-if="collapseStatus">
      <el-icon class="button">
        <Expand />
      </el-icon>
    </template>
    <template v-else>
      <el-icon class="button">
        <Fold />
      </el-icon>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { Fold, Expand } from '@element-plus/icons'
import { useStore } from '@/store'
import { computed } from '@vue/reactivity'

const store = useStore()

const collapseStatus = computed(() => store.state.isCollapse)

const handleCollapse = () => {
  store.commit('setIsCollapse', !store.state.isCollapse)
}
</script>

<style lang="scss" scoped>
.button {
  cursor: pointer;
}

.icon-container {
  display: flex;
  align-items: center;
  margin-right: 10px;
}
</style>
