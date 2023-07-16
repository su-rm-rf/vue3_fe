<script lang="ts" setup>
  import { ref } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { useState, useActions } from '@/hooks'

  const route = useRoute()
  const router = useRouter()

  const { list }: any = useState('category', ['list'])
  console.log(list.length)
  const { getCategoryList }: any = useActions('category', ['getCategoryList'])

  getCategoryList()

  let loading = ref(false)
  const detail_row = (id) => {
    loading.value = !loading.value
    // router.push(`/category/${ id }`)
  }

  const delete_row = (id) => {
  }
</script>

<template>
  <div>
    a{{list.length}}b
    <Transition name="loading">
      <span v-if="!list.length">加载中1</span>
    </Transition>
    <span v-if="loading">加载中2</span>
    <ul class="category_list">
      <li class="category_list_header">
        <label>商品ID</label>
        <label>商品名称</label>
        <label>商品价格（{{ list[0].goods_list[0].bill }}）</label>
        <label>所属品类</label>
        <label>操作</label>
      </li>
      <li v-for="category in list" class="category_list_row">
        <ul>
          <li v-for="goods in category.goods_list">
            <span>{{ goods.id }}</span>
            <span>{{ goods.name }}</span>
            <span>{{ goods.price }}</span>
            <span>{{ category.name }}</span>
            <span>
              <button @click="detail_row(goods.id)">查看</button>
              <button @click="delete_row(goods.id)">删除</button>
            </span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
  .loading-enter-active, .loading-leave-active {
    transition: opacity 1s ease;
  }
  .loading-enter-from, .loading-leave-to {
    opacity: 0;
  }
  
  .category_list {
    text-align: center;
    &_header {
      display: flex;
      justify-content: space-around;
      label {
        width: 100%;
        color: #99f;
        line-height: .6rem;
      }
    }
    &_row {
      ul {
        li {
          display: flex;
          justify-content: space-around;
          span {
            width: 100%;
            line-height: .6rem;
          }
        }
      }
    }
  }
</style>