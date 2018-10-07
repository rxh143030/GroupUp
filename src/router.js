import Vue from 'vue'
import Router from 'vue-router'
import Map from './views/Map.vue'
import Calendar from'./views/Calendar.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Map',
      component: Map
    },
    {
      path: '/calendar',
      name: 'Calendar',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Calendar.vue')
    }
  ]
})
