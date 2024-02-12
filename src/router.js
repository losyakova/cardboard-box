import { createRouter, createWebHistory } from 'vue-router';
import MainPage from './assets/views/MainPage.vue';
import OnlineShowPage from './assets/views/OnlineShowPage.vue';
import RulesPage from './assets/views/RulesPage.vue';
import GuideCatPage from './assets/views/GuideCatPage.vue';
import NorFoundPage from './assets/views/NorFoundPage.vue';
import AboutPage from './assets/views/AboutPage.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/main', component: MainPage, alias: '/' },
    { path: '/show', component: OnlineShowPage },
    { path: '/rules', component: RulesPage },
    { path: '/guide', component: GuideCatPage },
    { path: '/:notFound(.*)', component: NorFoundPage },
    { path: '/about', component: AboutPage },
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
});
