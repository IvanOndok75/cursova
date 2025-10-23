import { createRouter, createWebHistory } from 'vue-router';
import IntroPage from '@/components/IntroPage.vue';
import PageF1 from '@/pages/PageF1.vue';
import PageF2 from '@/pages/PageF2.vue';
import PageF3 from '@/pages/PageF3.vue';
import PageF4 from '@/pages/PageF4.vue';
import PageF5 from '@/pages/PageF5.vue';
import PageF6 from '@/pages/PageF6.vue';

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
  {
    path: '/page3',
    name: 'PageF3',
    component: PageF3,
  },
  {
    path: '/page4',
    name: 'PageF4',
    component: PageF4,
  },
  {
    path: '/page5',
    name: 'PageF5',
    component: PageF5,
  },
  {
    path: '/page6',
    name: 'PageF6',
    component: PageF6,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
