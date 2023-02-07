<script lang="ts">
export default {
  name:"homeIndex"
}
</script>
<script setup lang="ts">
import commonFooter from "@/components/common/commonFooter.vue";
import { ref } from 'vue';
 
let showbarTap = ref<boolean | true>()
showbarTap.value = true

defineExpose({
  showbarTap
});
</script>

<template>
  <div class="container">
    <div class="showbar-wrap bgbasecolor3" v-if="showbarTap"> 
      <div class="showbar"></div>
    </div>
    <div class="main-body-box">
      <div class="search-box-wrap margintop10">
        <div class="btn-wrap">
            <div class="vbtn bgbasecolor3 fontbasecolor uicon">
              <div class="icon iconfont icon-U uiconfixed uiconwhite"></div>  
              <div>购买USDT</div>
            </div>

            <div class="vbtn bgbasecolor4 basecolor uicon">
              <div class="icon iconfont icon-U uiconfixed uiconbasecolor"></div>  
              <div>出售USDT</div>
            </div>
        </div>
        <div class="search-box-body margintop10 bgwhite">
          <div class="select-area "> 
            <div class="select-box">
               <select class="select-item font16">
                <option selected="selected">购买USDT</option>
                <option>出售USDT</option>
               </select>
            </div>
            <div class="select-box">
               <select class="select-item font16">
                <option selected="selected">微信支付</option>
                <option>支付宝支付</option>
               </select>
            </div>
          </div>
          <div class="search-input-area margintop10">
            <input type="number" class="search-input" placeholder="交易金额" />
          </div>
          <div class="search-btn-area margintop10">
           <button class="search-btn-box basecolor font16">搜索优惠</button>
          </div>

        </div>
      </div>
      <!--list-->
      <div class="list-area-wrap">
        <div class="list-box bgwhite">
          <div class="left-area">
              <div class="title-box-wrap"> 
                <div class="identify-flg"></div>
                <div class="title-box">
                  长期收，保障交易，干净、安全，欢…
                </div>
              </div>
              <div  class="limit-wrap">
                <div class="limit-words"> 限额 ¥200 - ¥30000 </div>
                <div class="limit-words-tips">需要同屏截图！ 大额需要流水！</div>
              </div>
              <div class="list-bottom-wrap">
                <div class="avatar-box"></div>
                <div class="u-cname">大发商行</div>
                <div class="diamonds-icon"></div>
                <div class="identyfy-box">
                  <div class="identify-flg"></div>
                  <div>5000 USDT</div>
                </div>
              </div>

          </div>
          <div class="right-area font12">
            <div class="list-btn-box">
              <div class="icon iconfont icon-U uiconfixed uiconbasecolor"></div>  
              <div> 出售</div>
            </div>
            <div class="list-total-msg">成交4000笔</div>
          </div>
        </div>
      </div>
      <!--list end-->
    </div>
    <commonFooter factive='0' />
  </div>
</template>
<style lang="scss">
  .showbar-wrap{
    height:160px;
    .showbar{
      width: 100%; height: 100%;
    }
  }
.main-body-box{padding: 10px;}
.btn-wrap{display: flex; justify-content: space-between; }
.vbtn{padding-left: 33px; padding-right: 33px;}
.search-box-body{ border-radius: 2px; padding: 10px;
  .select-area{display: flex; flex-direction: row; justify-content: space-between;
    .select-item{
      display: inline-block; 
      padding: .65rem 1rem;padding-left: 33px; padding-right: 33px; line-height: 1.5;border-radius: .42rem;background-color: #F3F6F9; border: 1px #F3F6F9 solid;
    }
  }
  .search-input-area{
    .search-input{
      border-radius: .42rem;
      border: 1px #F3F6F9 solid; background-color: #F3F6F9; color: #3F4254;
      padding: 0.65rem 1rem;box-sizing: border-box; width: 100%;
    }
  }
  .search-btn-area{
    .search-btn-box{
      border-radius: .42rem;padding: 4px 0;box-sizing: border-box;
      width: 100%; text-align: center; border: 1px #8950FC solid;background-color: transparent;
    }
  }
}



</style>