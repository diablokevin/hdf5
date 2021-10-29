import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import 'element-plus/lib/theme-chalk/index.css'
import locale from 'element-plus/lib/locale/lang/zh-cn'

// import ElementPlusIcons from '@element-plus/icons'

const app = createApp(App)
app.use(ElementPlus, { locale })


// app.component('expand',Expand)
// installElementPlus(app)
app.use(store).use(router).mount('#app')