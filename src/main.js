import { createApp } from 'vue'
import './index.css'
import './main.css'
import router from './routes'
import App from './App.vue'

createApp(App)
  .use(router)
  .mount('#app')
