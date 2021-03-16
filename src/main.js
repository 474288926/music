import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'
import $bus from './common/event.js'

import store from './store'

// import less from 'less'

//创建Vue应用实例
const app = createApp(App)
//挂载事务总线为全局属性
app.config.globalProperties.$mybus = $bus

app.use(router).use(ElementPlus).use(VueAxios, axios).use(store).mount('#app')
