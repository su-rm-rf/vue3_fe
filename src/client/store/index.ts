import { createStore } from "vuex"

import actions from "./actions"
import mutations from "./mutations"
import getters from "./getters"

import category from './category'
import todo from './todo'

export const getStore = (preloadedState) => {
  return createStore({
    strict: process.env.NODE_ENV !== 'production',
    state() {
      return {
        ...preloadedState,
        loading: false,
        token: '',
      }
    },
    actions,
    mutations,
    getters,

    modules: {
      category,
      todo,
    }
  })
}