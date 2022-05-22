<template>
  <div class="bread-container">
    <el-breadcrumb
      :separator-icon="ArrowRight"
    >
      <el-breadcrumb-item
        class="my-color"
        v-for="item in routes"
        :key="item.path"
        :to="{path: item.path}"
      >
        {{ item.meta.title }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts" setup>
import { ArrowRight } from '@element-plus/icons-vue'
import { computed } from '@vue/reactivity'
import { useRouter } from 'vue-router'

const router = useRouter()

const routes = computed(() => {
  const length = router.currentRoute.value.matched.length
  if (length > 1) {
    return router.currentRoute.value.matched.filter(item => item.meta.title).slice(1)
  }
  return router.currentRoute.value.matched.filter(item => item.meta.title)
})

// console.log(router.currentRoute.value.matched)
</script>

<style lang="scss">
.bread-container {
  display: flex;
  align-items: center;

  .my-color .el-icon.el-breadcrumb__separator {
    color: #191616;
    font-weight: 700;
  }
}
</style>
