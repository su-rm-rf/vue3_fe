<script lang="ts" setup>
  import { ref, onMounted, onUpdated } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { useState, useActions } from '@/hooks'

  import * as echarts from 'echarts/core'
  import { 
    BarChart, LineChart, PieChart, 
  } from 'echarts/charts'
  import {
    TitleComponent, TooltipComponent, GridComponent, DatasetComponent, TransformComponent,
  } from 'echarts/components'
  import { LabelLayout, UniversalTransition } from 'echarts/features'
  import { SVGRenderer, CanvasRenderer } from 'echarts/renderers'

  echarts.use([
    SVGRenderer, CanvasRenderer,
    LabelLayout, UniversalTransition,
    TitleComponent, TooltipComponent, GridComponent, DatasetComponent, TransformComponent,
    BarChart, LineChart, PieChart,
  ])

  const chart_list1 = ref<null | HTMLElement>(null)
  const chart_list2 = ref<null | HTMLElement>(null)
  
  onMounted(() => {
    setVision('table')
  })

  const route = useRoute()
  const router = useRouter()
  
  const { list }: any = useState('category', ['list'])
  const { getCategoryList }: any = useActions('category', ['getCategoryList'])
  
  getCategoryList()
  
  let vision = ref('chart')
  const setVision = (type) => {
    vision.value = type
    if (type === 'chart' && chart_list1?.value?.innerHTML === '') {
      let chartList1 = echarts.init(chart_list1?.value, null, { renderer: 'svg' })
      let chartList2 = echarts.init(chart_list2?.value)

      const x = list.value.map(item => item.name)
      const y = list.value.map(item => item.goods_list.length)
      const z = list.value.map(item => ({
        name: item.name,
        value: item.goods_list.length,
      }))
      console.log(z)
      chartList1.setOption({
        title: {
          text: '商品管理'
        },
        tooltip: {},
        xAxis: {
          data: x
        },
        yAxis: {},
        series: [
          {
            name: '商品种类',
            type: 'bar',
            data: y
          },
        ]
      })
      chartList2.setOption({
        title: {
          text: '商品管理'
        },
        tooltip: {},
        // xAxis: {},
        // yAxis: {},
        series: [{
          type: 'pie',
          data: z
        }]
      })
    }
  }

  const detail_row = (id) => {
    router.push(`/category/${ id }`)
  }

  const delete_row = (id) => {
  }
</script>

<template>
  <div>
    <ul class="category_vision">
      <li @click="setVision('table')" :class="{ active: vision === 'table' }">表格</li>
      <li @click="setVision('chart')" :class="{ active: vision === 'chart' }">图表</li>
    </ul>
    <ul class="category_list" v-show="vision === 'table'">
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
    <div class="category_chart_list_wrap">
      <div class="category_chart_list" ref="chart_list1" v-show="vision === 'chart'"></div>
      <div class="category_chart_list" ref="chart_list2" v-show="vision === 'chart'"></div>
    </div>
  </div>
</template>

<style lang="scss">
  .loading-enter-active, .loading-leave-active {
    transition: opacity 1s ease;
  }
  .loading-enter-from, .loading-leave-to {
    opacity: 0;
  }
  
  .category_vision {
    width: 4rem;
    line-height: 1rem;
    display: flex;
    position: sticky;
    top: 0;
    li {
      flex: 1;
      text-align: center;
      background: #2d9;
      margin: .1rem;
      &.active {
        color: #fff;
      }
    }
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
  .category_chart_list_wrap {
    clear: both;
    .category_chart_list {
      width: 40vw;
      height: 50vh;
      float: left;
    }
  }
</style>