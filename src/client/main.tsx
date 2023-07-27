import { createSSRApp } from 'vue'

import { getStore} from '@/store'

import router from '@/router'

import '@/styles'
import App from '@/App.vue'

import Header from '@/components/common/Header.vue'
import i18n from './plugins/i18n'

const store = getStore((window as any).__PRELOADED_STATE__)
delete (window as any).__PRELOADED_STATE__

const app = createSSRApp(App)

app.use(store)
.use(router)

app.mount('#root')

app.config.globalProperties.x = {

}

app.config.errorHandler = (err) => {

}

app.component('Header', Header)
app.use(i18n, {
  youyuxi: {
    chinese: '鱿鱼须'
  }
})