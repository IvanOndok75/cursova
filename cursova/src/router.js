import { createRouter, createWebHistory } from 'vue-router';
import IntroPage from '@/components/IntroPage.vue';
import PageF1 from '@/pages/PageF1.vue';
import PageF2 from '@/pages/PageF2.vue';

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
  {
    path: '/page2',
    name: 'PageF2',
    component: PageF2,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
