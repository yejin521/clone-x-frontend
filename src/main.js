import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ConfirmDialog from 'vue3-confirm-dialog'
import 'vue3-confirm-dialog/style'
import App from './App.vue'
import router from './router'

const pinia = createPinia()
const app = createApp(App)
app.use(ConfirmDialog)
app.use(pinia)
app.use(router)
app.mount('#app')
