<script lang="ts" setup>
  import { ref, reactive, onMounted } from 'vue'
  import { useRouter } from 'vue-router'
  import { useState } from '@/hooks'

  import Header from '@/components/common/Header.vue'
  import Menu from '@/components/common/Menu.vue'
  import Footer from '@/components/common/Footer.vue'
  import Signin from '@/components/common/Signin.vue'

  const { loading }: any = useState(['loading'])
  const router = useRouter()

  let token:any = ref('')
  onMounted(() => {
    token.value = localStorage.token
  })

  const signoutCb = (params) => {
    token.value = params
    router.replace('/signin')
  }
</script>

<template>
  <div>
    <Header :handleSignout="signoutCb" />
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