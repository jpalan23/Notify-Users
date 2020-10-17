import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import * as auth from '../service/AuthService'

Vue.use(VueRouter)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/admin-view',
      name: 'admin-view',
      component: () => import('../views/AdminView.vue')
    },
    {
      path: '/notify-user',
      name: 'notify-user-view',
      component: () => import('../views/NotifyUserView.vue'),
      beforeEnter(to, from, next) {
        if (auth.isLoggedIn()) {
          next();
        } else {
          next('/admin-view');
        }
      }

    },
    {
      path: '*',
      redirect: '/'
    }
  ],
  mode: 'history'
})
