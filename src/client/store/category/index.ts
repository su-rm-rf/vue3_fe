import actions from "./actions"
import mutations from "./mutations"
import getters from "./getters"

export default {
  namespaced: true,
  state() {
    return {
      list: [],
      detail: {},
    }
  },
  actions,
  mutations,
  getters,
}