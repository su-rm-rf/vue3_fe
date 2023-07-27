<script lang="ts" setup>
  import { 
    defineComponent, ref, reactive, computed, nextTick,
    onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, 
    onActivated, onDeactivated, onErrorCaptured, onServerPrefetch,
  } from 'vue'
  import { debounce, throttle } from '@/utils/_'


  const msg = ref('hello')
  const obj = ref({aa: 11, bb: 22, cc: 33})
  const arr = ref(['aa', 'bb', 'cc'])

  const el = ref()

  const search = ref('')
  const suggest = ref('')
  
  const doSearch = debounce(function() {
    console.log(search.value, new Date())
  }, 1000)
  const doSuggest = throttle(function() {
    console.log(suggest.value, new Date())
  }, 1000)

  // const updateCount = computed(() => {
  //   return count++
  // })
  const reverseMsg = computed(() => {
    // console.log(msg.value)
    // console.log(obj.value)
    return msg.value.split('').reverse().join('')
  })
  computed(() => {})

  defineComponent({
  })
  
  onBeforeMount(() => {
    console.warn('onBeforeMount', obj.value, arr.value)
  })

  onMounted(() => {
    console.warn('onMounted', el.value)
  })
  
  const changeTitle = async() => {
    msg.value = 'olleh'
  
    console.warn('changeTitle', msg.value)
    // await nextTick()
    // console.warn('nextTick', msg.value)
    nextTick(() => {
      console.warn('nextTick', msg.value)
    })
  }
  
  onBeforeUpdate(() => {
    console.warn('onBeforeUpdate', msg.value)
  })
  
  onUpdated(() => {
    console.warn('onUpdated', msg.value)
  })
  
  onBeforeUnmount(() => {
    console.warn('onBeforeUnmount', msg.value)
  })
  
  onUnmounted(() => {
    console.warn('onUnmounted', msg.value)
  })

  onActivated(() => {
  })

  onDeactivated(() => {
  })

  onErrorCaptured(() => {
  })

  onServerPrefetch(() => {

  })
</script>

<template>
  <div>
    <dl ref="el" class="system_info" @click="changeTitle">
      <dt>系统公告</dt>
      <dd>word-break:break-all;//只对英文起作用，以字母作为换行依据
        word-wrap:break-word;//只对英文起作用，以单词作为换行依据
        overflow-wrap: break-word;//仅在无法将整个单词放在自己的行而不会溢出的情况下才会产生中断。
        white-space:pre-wrap;//对中英文作用，强制换行；
      </dd>
    </dl>
    <input type="text" v-model="search" @input="doSearch" />
    <input type="text" v-model="suggest" @input="doSuggest" />

    <div class="clear">
      <div class="fr">右右右</div>
      <div class="fl">左左左</div>
      <!-- <div class="clear"></div> -->
    </div>
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
  .system_info {
    dd {
      transform: scale(1,1);
      color: #888;
      width: 3rem;
      overflow: hidden;
      text-overflow: ellipsis;
      /* white-space: nowrap; */
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
    }
  }
  .fl, .fr {
    width: 2rem;
    line-height: .4rem;
  }
  .fl::first-letter {
    color: #f00;
  }
</style>