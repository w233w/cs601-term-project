import { createApp } from 'vue'
import App from './App.vue'
import routers from './index'
import Element from "element-plus"

const app = createApp(App)
app.use(routers)
app.use(Element)
app.mount("#app")