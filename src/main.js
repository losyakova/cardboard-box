import { createApp } from 'vue';
import App from './App.vue';
import bootstrap from 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './theme.css';
import router from './router';

createApp(App).use(router).use(bootstrap).mount('#app');
