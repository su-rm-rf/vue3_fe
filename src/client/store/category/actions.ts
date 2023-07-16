import { instance2 } from '@/utils/axios'

export default {
  getCategoryList({ dispatch, commit, state, rootState, getters, rootGetters }) {
    instance2.get('/category/list').then(res => {
      commit('setCategoryList', res.data)
    })
  },
  getCategoryDetail({ dispatch, commit, state, rootState, getters, rootGetters }, id) {
    instance2.get(`/category/detail/${id}`).then(res => {
      commit('setCategoryDetail', res.data)
    })
  },
}