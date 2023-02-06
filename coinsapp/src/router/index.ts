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
  }
]
const router = createRouter({
  history:createWebHashHistory(),
  routes
})
export default router