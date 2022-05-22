<template>
  <el-menu
    :unique-opened="true"
    active-text-color="#ffd04b"
    background-color="#304156"
    class="el-menu-vertical"
    default-active="/"
    text-color="#fff"
    router
    :collapse="$store.state.isCollapse"
  >
    <el-menu-item index="/">
      <el-icon><Menu /></el-icon>
      <span>首页</span>
    </el-menu-item>
    <el-sub-menu index="/product">
      <template #title>
        <el-icon><Location /></el-icon>
        <span>商品</span>
      </template>
      <el-menu-item index="/product/product_attr">
        <el-icon><Document /></el-icon>
        商品规格
      </el-menu-item>
      <el-menu-item index="/product/product_classify">
        <el-icon><Document /></el-icon>
        商品分类
      </el-menu-item>
      <el-menu-item index="/product/product_list">
        <el-icon><Document /></el-icon>
        商品管理
      </el-menu-item>
      <el-menu-item index="/product/product_reply">
        <el-icon><Document /></el-icon>
        商品评论
      </el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="/order">
      <template #title>
        <el-icon><Location /></el-icon>
        <span>订单</span>
      </template>
      <el-menu-item index="/order/order_list">
        <el-icon><Document /></el-icon>
        list
      </el-menu-item>
      <el-menu-item index="/order/order_offline">
        <el-icon><Document /></el-icon>
        offline
      </el-menu-item>
    </el-sub-menu>
    <el-menu-item index="/media">
      <el-icon><Setting /></el-icon>
      <span>媒体</span>
    </el-menu-item>
    <el-sub-menu index="/permission">
      <template #title>
        <el-icon><Setting /></el-icon>
        <span>权限</span>
      </template>
      <el-menu-item index="/permission/permission_admin">
        <el-icon><Document /></el-icon>
        admin
      </el-menu-item>
      <el-menu-item index="/permission/permission_role">
        <el-icon><Document /></el-icon>
        role
      </el-menu-item>
      <el-menu-item index="/permission/permission_rule">
        <el-icon><Document /></el-icon>
        rule
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import { Location, Setting, Menu, Document } from '@element-plus/icons'
</script>

<style lang="scss" scoped>
 .el-menu {
    border-right: none;
  }

  .el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
