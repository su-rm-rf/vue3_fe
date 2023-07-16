import { createSSRApp } from 'vue'

import { getStore} from '@/store'

import router from '@/router'

import '@/styles'
import App from '@/App.vue'

const store = getStore((window as any).__PRELOADED_STATE__)
delete (window as any).__PRELOADED_STATE__

const app = createSSRApp(App)

app.use(store)
.use(router)

app.mount('#root')

app.config.errorHandler = (err) => {

}

// app.component('', xx)