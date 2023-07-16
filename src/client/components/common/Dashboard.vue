<script lang="ts" setup>
  import { defineComponent, ref, reactive, computed } from 'vue'

  defineComponent({

  })

  const fn1 = () => { console.log('fn1') }
  const count = ref(0)
  const msg = ref('hello')
  const obj = ref({aa: 11, bb: 22, cc: 33})
  const arr = ref(['aa', 'bb', 'cc'])
  // const updateCount = computed(() => {
  //   return count++
  // })
  const reverseMsg = computed(() => {
    console.log(msg.value)
    console.log(obj.value)
    return msg.value.split('').reverse().join('')
  })
  computed(() => {})
</script>

<template>
  <div>
    <div>系统公告</div>
    <div>{{ msg }} -> {{ reverseMsg }}</div>
    <ul>
      <li v-for="kv of obj">{{ kv }}</li>
      <li v-for="kv in obj">{{ kv }}</li>
      <li v-for="(k, v) of obj">{{ k }}{{ v }}</li>
      <li v-for="(k, v) in obj">{{ k }}{{ v }}</li>
    </ul>
    <ul>
      <li v-for="ki of arr">{{ ki }}</li>
      <li v-for="ki in arr">{{ ki }}</li>
      <li v-for="(k, i) of arr">{{ k }}{{ i }}</li>
      <li v-for="(k, i) in arr">{{ k }}{{ i }}</li>
    </ul>
  </div>
</template>

<style lang="scss">
  
</style>