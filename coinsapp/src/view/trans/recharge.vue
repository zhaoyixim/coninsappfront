<script setup lang="ts">
  import commonFooter from "@/components/common/commonFooter.vue";
  import commonHeader from "@/components/common/commonHeader.vue";
  import { useRouter } from "vue-router";
  const router = useRouter();
  const toUsdtcharge = ()=>{router.push({path:"/chargeusdt"})}  
  const toTrxcharge = ()=>{router.push({path:"/chargetrx"})}  

  
</script>

<template>
  <div class="container ">
    <commonHeader ftitle="充值" />
   
    <div class="recharge-box-wrap bgbasecolor3">
        <div class="fontbasecolor">
            <h1>充值</h1>
            <h5>多种方式，快速充值</h5>
        </div>
    </div>

    <div class="charge-box-wrap padding30 bgwhite">
        <div class="charge-box">
            <div class="box-items bordercolor1 disflex" @click="()=>toUsdtcharge()">
                <div class="box-item1 ">
                    <div class="icon bgbasecolor3 fontbasecolor iconfont icon-U font34 fontbold uiconfixed3 uiconwhite"></div>  
                </div>
                <div class="box-item2 basecolor">
                    <div class="font16 fontbold">充币USDT</div>
                    <div class="font12 margintop3">使用USDT为您的易优账户充值</div>
                </div>
                <div class="box-item3">
                    <div class="box-item-btn bgbasecolor3 font12 fontbasecolor">开始</div>
                </div>
            </div>

            <div class="box-items bordercolor2 disflex margintop20" @click="()=>toTrxcharge()">

                <div class="box-item1 ">                    
                        <img  class="image=box uiconfixed3" src="../../assets/tron.png" />                   
                </div>
                <div class="box-item2 fontdanger">
                    <div class="font16 fontbold">TRX换汇</div>
                    <div class="font12 margintop3">充币TRX为您的易优账户换汇USDT</div>
                </div>
                <div class="box-item3">
                    <div class="box-item-btn bgbasecolor5 font12 fontbasecolor">开始</div>
                </div>

            </div>
        </div>
    </div>
    
    <div class="margintop20 deal-footer">
      <div class="font12">2021-2023 © otc-u.com</div>
      <div class="disflex font14 footer-item-wrap">
        <div class="footer-item">关于易优</div>
        <div class="footer-item">服务条款</div>
        <div class="footer-item">联系我们</div>
      </div>
    </div>


    <commonFooter factive='2' />
  </div>
</template>
<style lang="scss">
@import './common.scss';
</style>
