import { createApp } from 'vue'
import './style.css'
import { globalRegister } from './golbal'
import App from './App.vue'

const app = createApp(App)
app.use(globalRegister)
app.mount('#app')
