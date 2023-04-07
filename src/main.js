import { createApp } from 'vue'
import App from './App.vue'
import '@popperjs/core/dist/umd/popper';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import router from './routes'
createApp(App).use(router).mount('#app')
