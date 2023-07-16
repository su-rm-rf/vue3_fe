import axios from 'axios'

export const instance1 = axios.create({
  baseURL: 'http://localhost:7570/wap_pc',
  withCredentials: true,
})
if (process.env.isClient) {
  instance1.defaults.headers.common['Authorization'] = localStorage.getItem('token') || ''
}

export const instance2 = axios.create({
  baseURL: 'http://localhost:7570/admin',
  withCredentials: true,
})
if (process.env.isClient) {
  instance2.defaults.headers.common['Authorization'] = localStorage.getItem('token') || ''
}
