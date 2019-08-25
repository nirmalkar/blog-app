import Vue from 'vue'
import Router from 'vue-router'
import BlogList from './views/BlogList.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: BlogList
    },
    {
      path: '/new',
      name: 'create',
      component: () => import('./views/BlogForm.vue')
    },
    {
      path: '/:id',
      name: 'details',
      component: () => import('./views/BlogDetails.vue')
    },
    {
      path: '/:id/edit',
      name: 'update',
      component: () => import('./views/BlogForm.vue')
    },
  ]
})
