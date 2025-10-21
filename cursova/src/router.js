import { createRouter, createWebHistory } from 'vue-router';
import IntroPage from '@/components/IntroPage.vue';
import PageF1 from '@/pages/PageF1.vue';

const routes = [
  {
    path: '/',
    name: 'Intro',
    component: IntroPage,
  },
  {
    path: '/page1',
    name: 'PageF1',
    component: PageF1,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

