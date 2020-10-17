import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const adminLoggedIn = true;

const routes = [
  {
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
    beforeRouteEnter (to, from, next) {
      if(adminLoggedIn){
        next()
      }else{
        next('/');
      }
    }
    
  },
  {
    path:'*',
    redirect:'/'
  }
]

const router = new VueRouter({
  routes
})

export default router
