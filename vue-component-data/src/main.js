

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.provide("globalData", "全局数据")
app.mount('#app')
