<script setup lang="ts">
  import commonFooter from "@/components/common/commonFooter.vue";
  import commonHeader from "@/components/common/commonHeader.vue";
  import recordlist from "@/components/lists/recordlist.vue";
 
  import { ref } from "vue";
  let currentPage = ref(1);

</script>

<template>
  <div class="container ">
    <commonHeader ftitle="充值USDT" />
   
    <div class="recharge-box-wrap bgbasecolor3">
        <div class="fontbasecolor">
            <h1>充币USDT</h1>
            <h5>简单三步，快速充币</h5>
        </div>
    </div>

    <div class="charge-box-wrap padding30 bgwhite">
        <div class="alert-box-wrap disflex label-light-danger">
            <div class="alert-icon-box ">
                <div class="icon iconfont icon-jinggao_o fontdanger font42"></div>
            </div>
            <div class="alert-text-box">
                <h5 class="fontbold margin0">提示</h5>
                <div class="font12 margintop3">
                  请仔细选择您的充币网络，如数向订单对应地址转账 <b>泰达币USDT (Tether USD)</b>，随意转入其他任何币种 <b>概不受理损失自负</b>，如无法分辨确认，请勿使用！<b>充币订单地址为易优公用地址，仅在订单时效内匹配充值，请勿私用随意转入</b>，如未按规则流程使用，造成任何损失自负！
                </div>
            </div>
        </div>

        
        <div class="font14 fontbold">二维码</div>            
        <div class="qcord-box">
          <img  class="image-box" src="../../assets/qcord.png"  />
        </div>

        <div class="margintop20 fontdark">
          <div class="font12"> 充币地址</div>
          <button class="vbtn-noborder  font12 bgbasecolor7 fontgrey label-inline step-btn-padding margintop10 step-btn-fixed">复制</button>         
        </div>
        <div class="margintop10 chargeing-lineheight">
          <div class="font14 fontbold font333">TSK4BAwhCFevTZ5vW6cFmWqHNN9hXHSSjS</div>  
          <div class="chargeing-listinfo-box font13 font333">
            <div class="disflex justify-spacebetween">
                <div>充币网络：</div>
                <div class="font12"><span class="label-danger label-inline step-btn-padding step-btn-fixed">TRC20</span></div>
            </div>
            <div class="disflex justify-spacebetween">
                <div>充币数量：</div>
                <div><span class="font14 fontbold">100 USDT</span></div>
            </div>
          </div>

          <div class="font14 fontbold font333 margintop20">订单信息</div>  
          <div class="chargeing-listinfo-box font13 font333">            
            <div class="disflex justify-spacebetween">
                <div>订单编号：</div>
                <div><span class="fontbold">2023031016221517639</span></div>
            </div>
            <div class="disflex justify-spacebetween">
                <div>订单状态：</div>
                <div><span class="fontbold">待支付</span></div>
            </div>
            <div class="disflex justify-spacebetween">
                <div>生成日期：</div>
                <div><span class="fontbold">2023-03-10 16:22:15</span></div>
            </div>
            <div class="disflex justify-spacebetween">
                <div>订单超时：</div>
                <div><span class="fontbold">还剩 28 分 1 秒</span></div>
            </div>
          </div>

          <div class="search-btn-area margintop20 font14 bordertop">
              <button class="search-btn-box search-btn-box-transparent bgbasecolor3 fontbasecolor  search-btn-box-fixed">我已支付</button>
          </div>
          <div class="margintop20 font14">
              <button class="search-btn-box search-btn-box-transparent bgbasecolor7 fontgrey search-btn-box-fixed">取消</button>
          </div>

              
        </div>

        <div class="margintop40 step-box-wrap font14 ">
          <div class="card-title basecolor font14">
            <span class="icon font12 iconfont icon-jiantouxia "></span>
            第一步 填写充币数量
          </div>
          <div class="step-item fontdark font12 margintop5">
            当前支持
            <span class="label-danger label-inline step-btn-padding">TRC20</span>和
            <span class="label-info label-inline step-btn-padding">ERC20</span>
            网络泰达币(USDT)充币，请确认您的转账网络类型，填写要充币的USDT数量，点击
            <button class="vbtn-noborder bgbasecolor3 fontbasecolor label-inline step-btn-padding">下一步</button>。
          </div>

          <div class="card-title fontdark font14 margintop20">
            <span class="icon font12 iconfont icon-jiantouyou basecolor"></span>
             第二步  生成充币订单
          </div>
          <div class="step-item fontdark font12 margintop5">           
            易优会为您分配一个充币地址，并生成充币订单，该充币订单30分钟内有效，转账完成后请点击
            <span class="vbtn-noborder bgbasecolor3 fontbasecolor label-inline step-btn-padding">我已支付</span>
            开始验证。如超时前您<span class="basecolor">未完成支付</span>
            ，则超时后自动取消该充币订单。
            ，<span class="fontdanger">订单取消后请勿向订单地址转账，否则有可能被他人订单认领</span>

          </div>

          <div class="card-title fontdark font14 margintop20">
            <span class="icon font12 iconfont icon-jiantouyou basecolor"></span>
            第三步 转账支付充币
          </div>
          <div class="step-item fontdark font12 margintop5"> 
            使用您的钱包扫码或输入我们的充币地址，足额转账要充币的数量，转账完成点击
            <span class="vbtn-noborder bgbasecolor4 basecolor label-inline step-btn-padding">我已支付</span>
            开始验证，区块验证成功后充币到账。
           <span class="basecolor">如因您转账数量误差</span>
           ，转账后超过10分钟未自动验证入账，请尽快联系 
           <span class="vbtn-noborder bgbasecolor3 fontbasecolor label-inline step-btn-padding">在线客服</span>
           处理。
          </div>

        </div>        
    </div>
   
    <div class="margintop20 fontdark bgwhite padding20">
          <div class="font16"> 充币订单</div>
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
                  <select class="select-item2 fontdark font14" placeholder="请选择充币网络">
                    <option>充币网络</option>   
                    <option>波场-TRC20</option>
                    <option>以太坊-ERC20</option>            
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
@import './common.scss';
.chargeing-lineheight{line-height: 28px;}
.qcord-box{width: 200px; height: 200px; margin-bottom: 15px;  border-radius: 0.42rem;border: 1px solid #EBEDF3;padding: 2px;}
.step-btn-fixed{padding: 2.4px 9px !important;}
.search-btn-box-fixed{padding: 2px 0 !important;}
.search-btn-area{padding-top: 20px; }
</style>
