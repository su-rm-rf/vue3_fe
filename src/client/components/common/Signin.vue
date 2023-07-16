<script lang="ts" setup>
  import { ref, reactive } from 'vue'
  import { useRouter } from 'vue-router'
  import { useState, useActions } from '@/hooks'

  const router = useRouter()
  
  const { loading }: any = useState(['loading'])
  const { token }: any = useState(['token'])
  const { signinHandler }: any = useActions(['signinHandler'])

  const user = reactive({
    username: 'yuhualing',
    password: 'abc123',
  })
  let errmsg:any = ref('')

  const signin = async () => {
    if (user.username && user.password) {
      const token = await signinHandler({
        username: user.username,
        password: user.password,
      })
      if (token) {
        localStorage.token = JSON.stringify(token)
        router.replace('/')
      } else {
        errmsg.value = '用户名或密码错误'
      }
    } else {
      errmsg.value = '用户名或密码不能为空'
    }
  }
  
  // import img from '@/assets/FE.png'
  // const img = require('@/assets/FE.png')
</script>

<template>
  <div class="signin">
    <!-- <img :src="img" /> -->
    <div class="loading" v-if="loading">处理中</div>
    <div class="signin_box">
      <div class="errmsg">{{ errmsg }}</div>
      <div>
        <label>用户名：</label>
        <input type="text" v-model="user.username" />
      </div>
      <div>
        <label>密码：</label>
        <input type="password" v-model="user.password" />
      </div>
      <div class="button">
        <button @click="signin">登录</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .signin {
    width: 100vw;
    height: 100vh;
    background: url('~@/assets/wallpaper/img (11).jpg') center no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    &_box {
      width: 20vw;
      div {
        height: .8rem;
        line-height: .8rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &.errmsg {
          color: #f00;
          font-size: .28rem;
        }
        &.button {
          margin: .4rem;
          justify-content: center;
          button {
            width: 80%;
            line-height: .6rem;
            background: #30a;
            border: none;
            color: #fff;
          }
        }
      }
    }
  }
</style>