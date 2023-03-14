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
    name:"transdetail",
    path:'/transdetail',component:()=>import('../view/home/transdetailbuy.vue')
  },
  {
    name:"transdetal",
    path:'/transdetal',component:()=>import('../view/home/transdetailsell.vue')
  },
  {
    name:"profile",
    path:'/profile',component:()=>import('../view/home/profile.vue')
  },
  {
    name:"recharge",
    path:'/recharge',component:()=>import('../view/trans/recharge.vue')
  },
  {
    name:"chargeusdt",
    path:'/chargeusdt',component:()=>import('../view/trans/chargeusdt.vue')
  },  
  {
    name:"chargetrx",
    path:'/chargetrx',component:()=>import('../view/trans/chargetrx.vue')
  },
  {
    name:"chargeing",
    path:'/chargeing',component:()=>import('../view/trans/chargeing.vue')
  },
  {
    name:"withdraw",
    path:'/withdraw',component:()=>import('../view/withdraw/index.vue')
  },
  {
    name:"usdtout",
    path:'/usdtout',component:()=>import('../view/withdraw/usdtout.vue')
  },
  {
    name:"trxexchange",
    path:'/trxexchange',component:()=>import('../view/withdraw/trxexchange.vue')
  },
  {
    name:"merchalexchange",
    path:'/merchalexchange',component:()=>import('../view/withdraw/merchalexchange.vue')
  },

  /*发布出价 */

  
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