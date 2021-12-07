import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import 'element-plus/lib/theme-chalk/index.css'
import locale from 'element-plus/lib/locale/lang/zh-cn'

// 统一导入el-icon图标
import * as ElIconModules from '@element-plus/icons'

const app = createApp(App)
app.use(ElementPlus, { locale })
// 统一注册el-icon图标
for (const iconName in ElIconModules) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  app.component(iconName, ElIconModules[iconName])
}

app.use(store).use(router).mount('#app')
