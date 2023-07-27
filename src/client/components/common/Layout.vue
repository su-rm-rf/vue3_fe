<script lang="ts" setup>
  import { useRouter } from 'vue-router'

  import Header from '@/components/common/Header.vue'
  import Menu from '@/components/common/Menu.vue'
  import Footer from '@/components/common/Footer.vue'

  const router = useRouter()

  const signoutCb = () => {
    router.replace('/signin')
  }
</script>

<template>
  <div>
    <Header :handleSignout="signoutCb" />
    <!-- <component :is="Header" @handleSignout="signoutCb"></component> -->
    <!-- <Header @handleSignout="signoutCb" /> -->
    <div class="body">
      <Menu />
      <div class="main_body">
        <div class="section">
          <router-view />
        </div>
        <Footer />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  
</style>