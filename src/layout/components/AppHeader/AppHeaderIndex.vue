<template>
  <div class="app-header-container">
    <div class="left">
      <toggle-sidebar />
      <bread-crumb />
    </div>
    <div class="right">
      <menu-search />
      <full-screen />
      <notification />
      <user-info />
    </div>
  </div>
</template>

<script lang="ts" setup>
import ToggleSidebar from '@/layout/components/AppHeader/ToggleSidebar.vue'
import BreadCrumb from '@/layout/components/AppHeader/BreadCrumb.vue'
import MenuSearch from '@/layout/components/AppHeader/MenuSearch.vue'
import FullScreen from '@/layout/components/AppHeader/FullScreen.vue'
import Notification from '@/layout/components/AppHeader/HeaderNotification.vue'
import UserInfo from '@/layout/components/AppHeader/UserInfo.vue'

</script>

<style lang="scss" scoped>
.app-header-container {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.left {
  display: flex;
  align-items: start;
}
.right {
  display: flex;
  align-items: center;
}
</style>
