<script lang="ts" setup>
  import { ref, inject } from 'vue'

  const props = defineProps<{
    handleSignout: Function,
  }>()
  const emit = defineEmits(['handleSignout'])

  const token = localStorage.token
  const info = JSON.parse(atob(token.split('.')[1]))
  
  const user:any = ref(info)

  const roles = { 0: '超级管理员', 1: '管理员', 2: '用户' }

  const signout = () => {
    localStorage.removeItem('token')
    props.handleSignout()
  }

  const i18n: any = inject('i18n')
  console.log(i18n.youyuxi.chinese)
</script>

<template>
  <div class="header">{{ $translate('youyuxi.chinese') }}
    欢迎~ <em>{{ roles[user.level] }}</em>{{ user.username }}
    <button @click="signout">退出</button>
    <button @click="$emit('handleSignout')">退出</button>
  </div>
</template>

<style lang="scss">
  .header {
    text-align: right;
  }
</style>