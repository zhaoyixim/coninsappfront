<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router';

let router = useRouter()


const tohref = ()=>{
  router.push("/recorddetail")

}
</script>

<template>
  <div class="list-box margintop10 bgwhite bordertop" @click="()=>tohref()">
          <div class="left-area record-lineheight">
              <div class="title-box-wrap">
                <div class="title-box width260 fontdark font14 lineellipsis">
                    <span class="label-danger font12 fontnormal label-inline step-btn-padding">TRC20</span>
                    账户充币 100 USDT
                </div>
              </div>
              <div  class="limit-wrap limit-words font666 font13 width260 lineellipsis">
                <div>编号：2023031016221517639</div>
                <div>数量：<b><b class="fontdanger font13">+100</b> USDT</b></div>
                <div>状态：<span class="step-btn-padding record-label label-light-info label-inline">等待支付</span></div>
                <div>日期：2023-03-10 16:22:15</div>
            </div>
          </div>
          <div class="right-area">
            <div class="list-btn-box paddingright0">             
              <div class="font14">
                详情 <span class="icon font14 iconfont icon-jiantouyou basecolor"></span>
              </div>
            </div>            
          </div>
    </div>
</template>

<style scoped>
.step-btn-padding{padding: 1.8px 9px;line-height: 12px; }
.record-lineheight{line-height: 22px;}
</style>
