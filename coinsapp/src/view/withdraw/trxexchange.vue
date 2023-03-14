<script setup lang="ts">
  import commonFooter from "@/components/common/commonFooter.vue";
  import commonHeader from "@/components/common/commonHeader.vue";
  import recordlist from "@/components/lists/recordlist.vue";
 
  import { ref } from "vue";
  let currentPage = ref(1);

</script>

<template>
  <div class="container ">
    <commonHeader ftitle="充值" />
   
    <div class="recharge-box-wrap bgbasecolor3">
        <div class="fontbasecolor">
            <h1>兑换TRX</h1>
            <h5>简单三步，快速兑换</h5>
        </div>
    </div>

    <div class="charge-box-wrap padding30 bgwhite">

        <div class="margintop20 fontdark">
          <div class="font12"> 兑换地址</div>
          <div>
            <input type="number" class="text-input bgbasecolor7 fontdark font16 borderbox margintop10" placeholder="输入您的TRC-20钱包地址" />
          </div>           
        </div>

        <div class="margintop20 fontdark">
          <div class="font12"> 兑换数量</div>
          <div>
            <input type="number" class="text-input bgbasecolor7 fontdark font16 borderbox margintop10" placeholder="输入兑换花费的USDT数量" />
          </div>
          <div class="font12 margintop5">账户余额：<b>0 USDT</b> </div>
          <div class="btn-box-wrap margintop20">
              <button class="btn-box font14 fontbasecolor fontnormal borderbox " disabled>下一步</button>
              <div class="btn-fixed right-tips-mute font12 borderbox margintop5">
                账户邮箱未验证，请验证后充币       
                <span class="basecolor">去验证</span>         
                <span class="icon font12 iconfont icon-jiantouyou basecolor"></span>
              </div>
            </div> 
        </div>

        <div class="margintop20 step-box-wrap font14 ">
          <div class="card-title basecolor font14">
            <span class="icon font12 iconfont icon-jiantouxia "></span>
            第一步 填写兑换信息
          </div>
          <div class="step-item fontdark font12 margintop5">
           
            当前仅支持向您的
            <span class="basecolor fontbold">TRC-20网络地址兑换TRX</span>
            ，请确认您的钱包地址类型，填写您的钱包地址和兑换花费USDT数量，点击
            <button class="vbtn-noborder bgbasecolor3 fontbasecolor label-inline step-btn-padding">下一步</button>。
          </div>

          <div class="card-title fontdark font14 margintop20">
            <span class="icon font12 iconfont icon-jiantouyou basecolor"></span>
            第二步  提交兑换订单
          </div>
          <div class="step-item fontdark font12 margintop5">
            将根据您的花费的USDT数量计算实际兑换TRX数量和转账网络手续费，确认兑换信息后，输入您的安全密码点击
            <button class="vbtn-noborder bgbasecolor3 fontbasecolor label-inline step-btn-padding">提交订单</button>
          

          </div>

          <div class="card-title fontdark font14 margintop20">
            <span class="icon font12 iconfont icon-jiantouyou basecolor"></span>
            第三步 平台兑换转账
          </div>
          <div class="step-item fontdark font12 margintop5">            
            
            您的兑换订单提交，平台核验确认后10分钟内完成兑换转账，请注意查收。如超过60分钟未转账，请联系
           <span class="vbtn-noborder bgbasecolor3 fontbasecolor label-inline step-btn-padding">在线客服</span>           
          </div>

        </div>        
    </div>
   
    <div class="margintop20 fontdark bgwhite padding20">
          <div class="font16"> 兑换订单</div>
          <div class="margintop20">
             <div class="padding10 paddingbottom0 font14">
              <div class=" disflex align-items-center bgbasecolor7 charge-search-box">
                <div class="charge-search-input-icon font26 icon iconfont icon-sousuo1"></div>
                <div class="charge-search-input-wrap"> <input type="number" class="search-input" placeholder="搜索编号" /></div>
              </div>             
             </div>

            <div class="search-box-body bgwhite">
              <div class="select-area-charge "> 
                <div class="select-box ">
                  <select class="select-item2 fontdark font14" placeholder="请选择提币网络">
                    <option>兑换类型</option>   
                    <option>USDT → TRX</option>                   
                  </select>
                </div>
                <div class="select-box margintop10">
                  <select class="select-item2 fontdark font14">
                    <option value="">订单状态</option>
                    <option value="1">支付成功</option>
                    <option value="2">转账验证</option>
                    <option value="3">等待支付</option>
                    <option value="4">验证超时</option>
                    <option value="5">订单取消</option>                                                                                                                                                                        
                  </select>
                </div>
              </div>
              
              <div class="search-btn-area margintop10">
              <button class="search-btn-box search-btn-box-transparent bgbasecolor4 basecolor font16">搜索</button>
              </div>

            </div>

          </div>
          <div class="recordlist-wrap">
              <recordlist />
              <div class="margintop10">
                <van-pagination v-model="currentPage" :total-items="50" :show-page-size="5">
                  <template #prev-text>
                    <van-icon name="arrow-left" />
                  </template>
                  <template #next-text>
                    <van-icon name="arrow" />
                  </template>
                  <template #page="{ text }">{{ text }}</template>
                </van-pagination>
                <div class="text-align font12 fontgrey margintop10">共1条记录，每页显示10条，当前第1/1页</div>
              </div>
             
          </div>
          <div class="charge-no-content no-content fontgrey">暂无相关数据 </div>
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
@import '../trans/common.scss';
</style>
