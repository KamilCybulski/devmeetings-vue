import Vue from 'vue';
import Router from 'vue-router';

import Home from './views/Home.vue';
import Score from './views/Score.vue';
import Settings from './views/Settings.vue';
import Vote from './views/Vote.vue';
import UberSettings from './views/UberSettings.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/score',
      name: 'score',
      component: Score,
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
    },
    {
      path: '/vote',
      name: 'vote',
      component: Vote,
    },
    {
      path: '/uber-settings',
      name: 'uber-settings',
      component: UberSettings,
    },
  ],
});
