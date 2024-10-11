// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import UserManage from './UserManage.vue'


/*1  引入createPinia，用于创建pinia */
import { createPinia } from 'pinia'
import Pinia from './Pinia.vue'

/*2 创建pinia */
const pinia = createPinia()


const app = createApp(App)
// const app = createApp(UserManage)


/*3 使用插件 */
app.use(pinia)



app.mount('#app')
