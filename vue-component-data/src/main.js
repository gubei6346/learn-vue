

import { createApp } from 'vue'
import App from './App.vue'

//app:Vue的实例对象
//在一个vue项目中，有且只有一个vue的实例对象
const app = createApp(App)
//App:根组件
app.provide("globalData", "全局数据")
//挂载应用 mount  #app---index.html
app.mount('#app')
