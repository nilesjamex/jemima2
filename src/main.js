import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/global.scss'
import store from './store/index.js'

createApp(App).use(store).use(router).mount('#app')
