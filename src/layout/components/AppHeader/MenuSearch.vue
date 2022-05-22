<template>
  <el-input
    class="my-input"
    v-model="input"
    placeholder="请输入内容"
    :prefix-icon="Search"
    size="small"
  />
</template>

<script lang="ts" setup>
import { Search } from '@element-plus/icons-vue'
import { ref } from 'vue'

const input = ref('')
</script>

<style lang="scss" scoped>
.my-input {
  width: 200px;
}
</style>
