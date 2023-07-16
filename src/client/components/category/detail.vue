<script lang="ts" setup>
  import { useRoute } from 'vue-router'
  import { useState, useActions } from '@/hooks'

  const route = useRoute()
  
  const { detail }: any = useState('category', ['detail'])
  const { getCategoryDetail }: any = useActions('category', ['getCategoryDetail'])

  const { id } = route.params
  getCategoryDetail(id)

</script>

<template>
  <div>
    <ul>
      <li>{{ detail.id }}</li>
      <li>{{ detail.name }}</li>
      <li>{{ detail.price }}元</li>
      <li>{{ detail.id_1 }}</li>
    </ul>
  </div>
</template>

<style lang="scss">
  
</style>