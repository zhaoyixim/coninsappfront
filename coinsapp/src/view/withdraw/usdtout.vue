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
            <h1>提币USDT</h1>
            <h5>简单三步，快速提币</h5>
        </div>
    </div>

    <div class="charge-box-wrap padding30 bgwhite">
        <div class="alert-box-wrap disflex label-light-danger">
            <div class="alert-icon-box ">
                <div class="icon iconfont icon-jinggao_o fontdanger font38"></div>
            </div>
            <div class="alert-text-box">                
                <div class="font12 margintop3">
                    提示：谨防油卡，话费卡，灰U变现，USDT跑分等欺诈骗局，点击查看 
                    <span> 防诈骗指南>></span>
                </div>
            </div>
        </div>

        <div>
            <div class="font12">提币网络</div>
            <div class="radio-box-wrap fontdark">
              <div class="radio-box font12 fontbold">
                  <label class="disflex option borderbox">
                    <span class="option-control">
                      <span class="disflex radio">
                        <input class="radio-input" type="radio" name="usdt_terc" value="1" checked="checked" />
                        <span class="disflex radio-circle borderbox bgbasecolor3 radio-circle-after "></span>
                      </span>
                    </span>
                    <span class="option-label">
                      <span class="disflex option-head fontbold borderbox">
                        <span class="option-title font12">
                          <span class="label-danger label-inline label-fixed">TRC20</span>
                        </span>
                        <span class="option-focus font13">波场 Tron</span>
                      </span>
                    </span>
                  </label>
              </div>

              <div class="radio-box font12 fontbold">
                  <label class="disflex option borderbox">
                    <span class="option-control">
                      <span class="disflex radio">
                        <input class="radio-input" type="radio" name="usdt_terc" value="1" checked="checked" />
                        <span class="disflex radio-circle borderbox bgbasecolor6"></span>
                      </span>
                    </span>
                    <span class="option-label">
                      <span class="disflex option-head fontbold borderbox">
                        <span class="option-title font12">
                          <span class="label-info label-inline label-fixed">ERC20</span>
                        </span>
                        <span class="option-focus font13">以太坊 Ethereum</span>
                      </span>
                    </span>
                  </label>
              </div>

            </div>
        </div>

        <div class="margintop20 fontdark">
          <div class="font12"> 提币地址</div>
          <div>
            <input type="number" class="text-input bgbasecolor7 fontdark font16 borderbox margintop10" placeholder="输入要提币的地址" />
          </div>           
        </div>

        <div class="margintop20 fontdark">
          <div class="font12"> 充币数量</div>
          <div>
            <input type="number" class="text-input bgbasecolor7 fontdark font16 borderbox margintop10" placeholder="输入要充币的USDT数量" />
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
            第一步 填写提币信息
          </div>
          <div class="step-item fontdark font12 margintop5">
            当前支持
            <span class="label-danger label-inline step-btn-padding">TRC20</span>和
            <span class="label-info label-inline step-btn-padding">ERC20</span>
            网络泰达币(USDT)提币，请确认您的钱包网络类型，填写您的提币钱包地址和要提币的USDT数量，点击
            <button class="vbtn-noborder bgbasecolor3 fontbasecolor label-inline step-btn-padding">下一步</button>。
          </div>

          <div class="card-title fontdark font14 margintop20">
            <span class="icon font12 iconfont icon-jiantouyou basecolor"></span>
            第二步  提交提币订单
          </div>
          <div class="step-item fontdark font12 margintop5">           
            
            将根据您的提币数量计算转账网络手续费，确认提币信息后，输入您的安全密码点击
            <button class="vbtn-noborder bgbasecolor3 fontbasecolor label-inline step-btn-padding">提交订单</button>
          

          </div>

          <div class="card-title fontdark font14 margintop20">
            <span class="icon font12 iconfont icon-jiantouyou basecolor"></span>
            第三步 平台提币转账
          </div>
          <div class="step-item fontdark font12 margintop5">            
            您的提币订单提交，平台工作时间核验确认后10分钟内完成转账，请注意查收。如超过30分钟未转账，请联系
           <span class="vbtn-noborder bgbasecolor3 fontbasecolor label-inline step-btn-padding">在线客服</span>           
          </div>

        </div>        
    </div>
   
    <div class="margintop20 fontdark bgwhite padding20">
          <div class="font16"> 提币订单</div>
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
                    <option>提币网络</option>   
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
@import '../trans/common.scss';
</style>
