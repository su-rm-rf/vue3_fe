<script lang="ts" setup>
  import { RouterLink } from 'vue-router'
</script>

<template>
  <ul class="nav_aside">
    <li>
      <RouterLink to="/category">商品管理</RouterLink>
    </li>
    <li>
      <RouterLink to="/user">人员管理</RouterLink>
    </li>
    <li>
      <RouterLink to="/todo">Todo</RouterLink>
    </li>
  </ul>
</template>

<style lang="scss">
  
</style>