import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import About from '@/components/about'
import Contact from '@/components/contact'
import User from '@/components/user'
import PageNotFound from '@/components/page-not-found'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/user/:id',
      name: 'user',
      component: User
    },
    {
      path: '*',
      name: 'PageNotFound',
      component: PageNotFound
    },
  ]
})
