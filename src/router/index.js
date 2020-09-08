import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Employees from '../views/Employees.vue';
import Calculator from '../views/Calculator.vue';
import About from '../views/About.vue';
import Member from '../views/Member.vue';
import state from '@/store/state';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/employees',
    name: 'Employees',
    component: Employees
  },
  {
    path: '/calculator',
    name: 'Calculator',
    component: Calculator
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/member',
    name: 'Member',
    component: Member,
    beforeEnter: (to, from, next) => {
      if (state.authenticated) {
        next();
      } else {
        next();
      }
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
