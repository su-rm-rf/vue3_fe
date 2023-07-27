export default {
  setCategoryList(state, payload) {
    state.list = payload.data
  },
  setCategoryDetail(state, payload) {
    state.detail = payload.data
  },
}