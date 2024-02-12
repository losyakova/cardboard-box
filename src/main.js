import { createApp } from 'vue';
import App from './App.vue';
import bootstrap from 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './theme.css';
import store from './store';
import router from './router';

createApp(App).use(store).use(router).use(bootstrap).mount('#app');
