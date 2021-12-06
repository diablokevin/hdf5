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
// 导入转换图标名称的函数
// @ts-ignore

const app = createApp(App)
app.use(ElementPlus, { locale })
// 统一注册el-icon图标
// for(let iconName in ElIconModules){
//     // @ts-ignore
//   app.component(transElIconName(iconName),ElIconModules[iconName])
// }

 for(let iconName in ElIconModules) { // @ts-ignore
   app.component(iconName, ElIconModules[iconName])
 }


// app.component('expand',Expand)
// installElementPlus(app)
app.use(store).use(router).mount('#app')
