import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/blogs',
      name: 'about',
      component: () => import('./views/BlogList.vue')
    },
    {
      path: '/blogs/new',
      name: 'about',
      component: () => import('./views/BlogForm.vue')
    },
    {
      path: '/blogs/:id',
      name: 'about',
      component: () => import('./views/BlogDetails.vue')
    },
    {
      path: '/blogs/:id/edit',
      name: 'about',
      component: () => import('./views/BlogForm.vue')
    },
  ]
})
