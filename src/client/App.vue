<script lang="ts" setup>
  import { useState } from '@/hooks'

  const { loading }: any = useState(['loading'])
</script>

<template>
  <div>
    <div class="app">
      <div class="loading" v-if="loading">处理中</div>
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
  
</style>