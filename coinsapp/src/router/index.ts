import { createRouter,createWebHashHistory } from "vue-router";
import  homeIndex from '@/view/home/index.vue';

const routes = [
  {
    path:'/',
    redirect:"/index"
  },
  {
    path:'/index',component:homeIndex
  },
  {
    name:"transaction",
    path:'/transaction',component:()=>import('../view/home/transaction.vue')
  },
  {
    name:"profile",
    path:'/profile',component:()=>import('../view/home/profile.vue')
  },
  {
    name:"login",
    path:'/login',component:()=>import('../view/home/login.vue')
  },
  {
    name:"reg",
    path:'/reg',component:()=>import('../view/home/reg.vue')
  },
  {
    name:"forget",
    path:'/forget',component:()=>import('../view/home/forget.vue')
  },
  {
    name:"news",
    path:'/news',component:()=>import('../view/home/news.vue')
  }

]
const router = createRouter({
  history:createWebHashHistory(),
  routes
})
export default router