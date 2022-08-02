import { createApp } from 'vue'
import App from './App.vue'
import routers from './index'

const app = createApp(App)
app.use(routers)
app.mount("#app")