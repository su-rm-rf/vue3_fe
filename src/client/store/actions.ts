import { instance2 } from '@/utils/axios'

export default {
  async signinHandler({ dispatch, commit, state, rootState, getters, rootGetters }, 
    { username, password }
  ) {
    const res = await instance2.post('/user/signin', {
      username, password
    })
    const token = res.data?.data?.token
    if (token) {
      localStorage.setItem('token', token)
      commit('signin', token)
    }
    return token
  }
}