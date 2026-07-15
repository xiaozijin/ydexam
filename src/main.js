import { createApp } from 'vue'
import App from './App.vue'       // 1. 引入根组件 App.vue
import router from './router'     // 2. 引入路由配置（即你刚才贴的那段路由代码）

const app = createApp(App)        // 3. 创建 Vue 应用实例

app.use(router)                   // 4. 将路由挂载到实例上
app.mount('#app')                 // 5. 挂载到 index.html 中的 #app 容器