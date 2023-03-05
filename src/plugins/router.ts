import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => {
      return import('@/views/home.vue');
    },
  },
  { path: '/home', redirect: '/' },
];

export default createRouter({
  routes,
  history: createWebHistory(),
});
