<script setup lang="ts">
  import commonFooter from "@/components/common/commonFooter.vue";
  import commonHeader from "@/components/common/commonHeader.vue";

const clicktips = (itemkey:number)=>{


}
</script>

<template>
  <div class="container ">
    <commonHeader ftitle="购买交易" />
    <div class="disflex dtl-box ">
      <div class="dtl-header-wrap bgwhite paddingbottom20">
        <div class="bgbasecolor3 dtl-bg-header">
            <div class="dtl-title-box fontbasecolor">
              <h3 class="font20">使用 微信支付 从 南山币胜客 手中购买泰达币(USDT)</h3>
              <h5 class="fontnormal font14"> 微信支付宝、骗子黑资小白勿扰、安全快速、欢迎长期合作！</h5>
            </div>
        </div>
        <div class="bgwhite header-box borderradius10 boxshadow">
            <div class="input-wrap first-input-wrap">
              <p class="font14 fontbold">我将支付</p>
              <div class="buy-box disflex font14 borderbox">
                <input type="number" class="fill-input" placeholder="输入购买金额" />
                <div class="right-tips-box disflex font666 borderbox">
                  <span class="right-tips disflex">RMB</span>
                </div>                
              </div>
              <div class="right-tips-mute font12 borderbox">请输入您要购买金额</div>
            </div>

            <div class="input-wrap second-input-wrap">
              <p class="font14 fontbold">我将收到</p>
              <div class="buy-box disflex font14 borderbox">
                <input type="number" class="fill-input " placeholder="输入购买数量" />
                <div class="right-tips-box disflex font666 borderbox">
                  <span class="right-tips disflex">USDT</span>
                </div>                
              </div>             
            </div>

            <div class="btn-box-wrap">
              <button class="btn-box font14 fontbasecolor fontnormal borderbox">注册并购买</button>
              <div class="btn-fixed right-tips-mute font12 borderbox">创新C2C交易平台，安全可靠，交易便捷</div>
            </div>            
        </div>
      </div>
    </div>
    <div class="deal-info-wrap bgwhite">     
        <div class="deal-title-box disflex">
            <div class="deal-title font16 fontbold">交易出价</div>
            <div class="collect-deal-box disflex">                
                <div class="icon iconfont icon-star1 font16  basefontcolor"></div>                
                <div class="font12">收藏出价</div>
            </div>
        </div>

        <div class="deal-list-wrap">         
          <div class="item-wrap disflex bottomborder">
            <div class="item-box font14">
              <div class="font666">交易价格</div>
              <div class="disflex margintop5 fontbold">￥7.5/ 
                <div class="disflex tips-box font12 fontnormal">
                  <div class="">usdt</div> 
                  <div class="disflex font12 fontdanger">
                    <div class="icon font12 fontbold iconfont icon-jiantou_xiangxia xiangshangfixed"> </div>
                    <div>高于市价 2.11% </div> 
                  </div>
                </div>
              </div>
            </div>
            <div class="item-box font14">
              <div class="font666">手续费率
                <div class="tips-item bgwhite font12 boxshadow tips-tax">
                  <div class="tips-content">该类型交易将额外收取您的交易手续费率</div>
                  <div class="litter-arrow"></div>
                </div>
                <span class="icon iconfont icon-wenhao font12" @click="()=>clicktips(1)"></span>
              </div>
              <div class="disflex margintop5 fontbold">0%</div>
            </div>                           
          </div>

          <div class="item-wrap disflex bottomborder">
            <div class="item-box font14">
              <div class="font666">交易限额</div>
              <div class="disflex margintop5 font12 ">
                <span class=" item-fixed">最低</span>
                <span class="font14 fontbold">￥50 ~</span>
                <span class=" item-fixed">最高</span>
                 <span class="font14 fontbold">￥88888</span>                
              </div>
            </div>
            <div class="item-box font14">
              <div class="font666">交易时限

                <div class="tips-item bgwhite font12 boxshadow tips-timelimit">
                  <div class="tips-content">交易超时40分钟后买方未支付则交易取消，卖方USDT将退还</div>
                  <div class="litter-arrow"></div>
                </div>

                <span class="icon iconfont icon-wenhao font12"  @click="()=>clicktips(2)"></span>
              </div>
              <div class="disflex margintop5 fontbold">40分钟</div>
            </div>                       
          </div>  
          
          
          <div class="item-wrap disflex bottomborder">
            <div class="item-box font14">
              <div class="font666">用户限定</div>
              <div class="disflex margintop5 font12 ">
                <span class=" item-fixed">仅限</span>
                <span class="font14 fontbold">一级会员</span>
                <span class=" item-fixed"> 及以上，</span>
                <span class="font14 fontbold">一级验证</span>  
                <span class=" item-fixed"> 及以上，</span>              
              </div>
            </div>                                 
          </div>  

          <div class="item-wrap disflex">
            <div class="item-box font14">
              <div class="font666">交易限制</div>
              <div class="disflex margintop5 font12 ">
                <span class=" item-fixed">交易</span>
                <span class="font14 fontbold">不限次数</span>
                <span class=" item-fixed"> ，新交易对象</span>
                <span class="font14 fontbold">不限数额</span>
              </div>
            </div>                                 
          </div>  
        
        </div>
    </div>

   
    <div class="deal-info-wrap  merch-dtl-wrap bgwhite bottomborder">     
        <div class="deal-title-box disflex">
            <div class="deal-title font16 fontbold">商家信息</div>
        </div>
        <div class="avatar-box-item disflex">
          <div class="avatar-img-box">
            <img class="avatar-box image-box" src="../../assets/avatar.jpg" />
          </div>
          <div class="right-avatar">
            <div class="right-item disflex">
              <div> 希特勒</div> 
              <div class="right-item-icon basecolor icon iconfont font14 icon-renzheng"></div>
            </div>
            <div class="right-item disflex fontgrey font12">
              <div > 贝宁</div> 
              <div class="dot-position">
                <span class="label-dot"></span>
                2秒前在线
              </div>
            </div>
            <div class="disflex  right-item-main basecolor font14 bgbasecolor4">               
              <div class="basecolor icon iconfont  icon-homepage_fill"></div>
              <div> 主页</div>
            </div>
          </div>
        </div>

        <div class="deal-info-list  font12">
           <div class="infolist-item disflex">
            <div class="info-list-left">
              交易保障：
            </div>
            <div class="info-list-right">
              <div class="identyfy-box font12 fontcolortips">
                  <div class="identify-flg fontcolortips"><div class="icon iconfont icon-yanzheng fontcolortips font12 "></div></div>
                  <div>保证金5000 USDT</div>
                </div>
            </div>           
          </div>
           
          <div class="infolist-item disflex">
            <div class="info-list-left">
              用户等级：
            </div>
            <div class="info-list-right">
              <div class="list-item-label label-light">一级VIP</div>
            </div>           
          </div>

          <div class="infolist-item disflex">
            <div class="info-list-left">
              验证等级：
            </div>
            <div class="info-list-right">
              <div class="list-item-label label-success">四级验证</div>
            </div>           
          </div>

          <div class="infolist-item disflex">
            <div class="info-list-left">
              邮箱验证：
            </div>
            <div class="info-list-right">
              <div class="list-item-label label-light">
                <span class="font13 icon iconfont icon-duigou_kuai text-success"></span>
                已验证</div>
            </div>           
          </div>

          <div class="infolist-item disflex">
            <div class="info-list-left">
              手机验证：
            </div>
            <div class="info-list-right">
              <div class="list-item-label label-light">
                <span class="font13 icon iconfont icon-duigou_kuai text-success"></span>
                已验证</div>
            </div>           
          </div>

          <div class="infolist-item disflex">
            <div class="info-list-left">
              身份验证：
            </div>
            <div class="info-list-right">
              <div class="list-item-label label-light">
                <span class="font13 icon iconfont icon-duigou_kuai text-success"></span>
                已验证</div>
            </div>           
          </div>

          <div class="infolist-item disflex">
            <div class="info-list-left">
              地址验证：
            </div>
            <div class="info-list-right">
              <div class="list-item-label label-light">
                <span class="font13 icon iconfont icon-duigou_kuai text-success"></span>
                已验证</div>
            </div>           
          </div>

          <div class="infolist-item disflex">
            <div class="info-list-left">
              收藏关注：
            </div>
            <div class="info-list-right">
              <b>171</b>
              人收藏
            </div>           
          </div>

          <div class="infolist-item disflex">
            <div class="info-list-left">
             累计交易：
            </div>
            <div class="info-list-right">
              <b>5165</b>
              笔
            </div>           
          </div>

          <div class="infolist-item disflex">
            <div class="info-list-left">
              正面反馈：
            </div>
            <div class="info-list-right">
              <b>5157</b>
              次
            </div>           
          </div>

          <div class="infolist-item disflex">
            <div class="info-list-left">
              负面反馈：
            </div>
            <div class="info-list-right">
              <b>0</b>
              次
            </div>           
          </div>

          <div class="infolist-item disflex">
            <div class="info-list-left">
              最近登录：
            </div>
            <div class="info-list-right">
              <b>
                2023年03月08日
              </b>
              
            </div>           
          </div>

          <div class="infolist-item disflex">
            <div class="info-list-left">
              注册时间：
            </div>
            <div class="info-list-right">
              <b>
                2022年08月27日
              </b>
              
            </div>           
          </div>
        </div>
    </div>

   
    <div class="deal-info-wrap deal-desp bgwhite">     
        <div class="deal-title-box disflex">
            <div class="deal-title font16 fontbold">交易说明</div>            
        </div>
        <div class="litter-mute-box disflex font12">
            <div class="label-inline label-light">不接受议价</div>
            <div class="label-inline label-light">无需身份验证</div>
            <div class="label-inline label-light">需要提供流水证明</div>
        </div>

        <div class="desp-content font14">
			
      温馨提示：《南山币胜客》不会和任何易优以外的平台或商家合作！请各位老板注意！！！				
    </div>
    </div>
   

    <div class="deal-info-wrap deal-flue bgwhite">         
        <div class="deal-title-box disflex">
            <div class="deal-title font16 fontbold">交易流程</div>            
        </div>
        <div class="deal-card-box">
          <div class="timeline">
            <div class="timeline-items boxborder">
              <div class="timeline-item">
                <div class="timeline-media boxborder">
                  <b class="timeicon">1</b>
                </div>
                <div class="timeline-content boxborder">
                  <div class="timeblock disflex boxborder">
                    <div class="timeline-title boxborder">
                      <b class="font16 fontdark fontbold">发起交易</b>
                    </div>
                  </div>
                  <div class="timeline-items boxborder font12 ">
                  输入您要出售或购买的数量，确定交易数量和金额后点击 立即购买 or 立即出售 按钮发起交易。发起成功会从卖方账户托管交易对应数量的USDT，并将交易信息发送给买方。您可以将您的telegram绑定 <a class="basecolor" href="https://t.me/Eu_otc_bot">易优Bot @Eu_otc_bot</a>，或开启邮件提醒，更便捷的接收交易通知 <a class="basecolor" href="https://www.otc-u.com/h5/my_ding.html">去设置&gt;</a>。
                </div>
                </div>
              </div>
            </div>
          </div>


          <div class="timeline">
            <div class="timeline-items boxborder">
              <div class="timeline-item">
                <div class="timeline-media boxborder">
                  <b class="timeicon">2</b>
                </div>
                <div class="timeline-content boxborder">
                  <div class="timeblock disflex boxborder">
                    <div class="timeline-title boxborder">
                      <b class="font16 fontdark fontbold">买方付款 or 交易取消</b>
                    </div>
                  </div>
                  <div class="timeline-items boxborder font12 ">
                    交易订单发起成功后，您可在交易对话页面与对方联系，确认交易信息或支付交易金额，如交易超过交易时限后买方仍未支付或双方自助取消交易，交易取消成功后交易托管USDT数量将退回卖方账户。

                  </div>
                </div>
              </div>
            </div>
          </div>


          <div class="timeline">
            <div class="timeline-items boxborder">
              <div class="timeline-item">
                <div class="timeline-media boxborder">
                  <b class="timeicon">3</b>
                </div>
                <div class="timeline-content boxborder">
                  <div class="timeblock disflex boxborder">
                    <div class="timeline-title boxborder">
                      <b class="font16 fontdark fontbold">卖方放行 or 发起争议</b>
                    </div>
                  </div>
                  <div class="timeline-items boxborder font12 ">
                    如买方支付成功，卖方已确认收到交易对应金额，请尽快放行交易订单，放行后托管USDT将转入买方账户。如买方确认订单已支付状态而卖方实际未收到款，或某方未遵从交易流程规范进行的其他事项，双方都可在交易对话界面发起争议维权 
                    <a class="basecolor" href="https://www.otc-u.com/h5/news_show.html?sn=eccbc87e4b5ce2fe28308fd9f2a7baf3">点击查看详情&gt;</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          
          <div class="timeline">
            <div class="timeline-items boxborder">
              <div class="timeline-item border-left-no">
                <div class="timeline-media boxborder">
                  <b class="timeicon">4</b>
                </div>
                <div class="timeline-content boxborder">
                  <div class="timeblock disflex boxborder">
                    <div class="timeline-title boxborder">
                      <b class="font16 fontdark fontbold">交易结束</b>
                    </div>
                  </div>
                  <div class="timeline-items boxborder font12 ">
                    交易结束用户可对该笔交易点评反馈，如超时未反馈则默认正面好评。  
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
    </div>


    <div class="deal-info-wrap  bgwhite">     
        <div class="deal-title-box disflex">
            <div class="deal-title font16 fontbold">交易反馈</div>            
        </div>

        <div class="card-body boxborder">
          <div class="card-title paddingbottom20 bottomborder">
            <div class="disflex boxborder card-title-item font12">
              <div class="disflex card-pill-all label-pill ">
                全部评价
                <span class="title-pill">2811</span>
              </div>

              <div class="disflex card-pill-all label-default ">
                正面反馈 
                <span class="title-pill">2811</span>
              </div>

              <div class="disflex card-pill-all label-default ">
                负面反馈 
                <span class="title-pill">0</span>
              </div>

            </div>
          </div>

          <div class="comment-box-wrap ">
            <div class="comment-box paddingbottom20 bottomborder">
                <div class="comment-padding ">
                  <div class="disflex  item-box">
                    <div class="item-avatar">
                        <img class="image-box item-img" src="../../assets/avatar.jpg" />
                    </div>
                    <div class="item-right font12">
                        <div class="fontbold">zhouqupeng8617 <span class="dot-position label-dot"></span> </div>
                        <div class="fontgrey item-time">2023-03-08</div>
                    </div>
                  </div>
                </div>

                <div class="comment-padding comment-item-tips font12">
                  <div class="fontbold">[购买] 微信支付</div>
                  <div class="fontnormal">买方满意，默认好评</div>
                </div>

                <div class="comment-padding comment-item-tips font12 item-label disflex text-success">
                  <div class="fontbold icon iconfont icon-jurassic_zan"></div>
                  <div class="">正面</div>
                </div>
            </div>

            <div class="text-conter font12">
              <div class="conter-btn fontgrey">
                 加载中
              </div>
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
@import '@/assets/css/transdtl.scss';
.bottomborder{
  border-bottom:1px solid #EBEDF3;
}
</style>