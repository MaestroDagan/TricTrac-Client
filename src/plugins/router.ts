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
  {
    path: '/play',
    name: 'Play',
    component: () => {
      return import('@/views/play.vue');
    },
  },
  {
    path: '/matchmaking',
    name: 'Matchmaking',
    component: () => {
      return import('@/views/matchmaking.vue');
    },
  },
];

export default createRouter({
  routes,
  history: createWebHistory(),
});
