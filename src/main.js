import { createApp } from 'vue'
import App from './App.vue'
import { RouterLink, RouterView } from 'vue-router'

const app = createApp(App)
app.use(RouterLink)
app.use(RouterView)
app.mount("#app")