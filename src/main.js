import { createApp } from 'vue'
import './index.scss'
import './main.scss'
import router from './routes'
import App from './App.vue'

createApp(App)
	.use(router)
	.mount('#app')
