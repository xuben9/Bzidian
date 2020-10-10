import Vue from 'vue'
import VueRouter from 'vue-router'
import ShowPage from '@/views/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Show',
    component: ShowPage
  },
]

const router = new VueRouter({
 //mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
