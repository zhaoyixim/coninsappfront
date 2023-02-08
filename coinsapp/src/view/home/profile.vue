<script setup lang="ts">
  import commonFooter from "@/components/common/commonFooter.vue";
</script>

<template>
  <div class="container">
    <div class="profile-title-wrap"> 
       <div class="title-box bgwhite font13 "> 
            <div class="float-box  fontbasecolor bgbasecolor3 ">
              <div class="float-icon font18 icon iconfont icon-homepage_fill"></div>
              <div> 主页</div>
            </div>

        <div class="top-box disflex">
          <div class="left-box">
            <div class="avatar-box">
              <img class="image-box" :src="`/src/assets/girl-17.svg`"  />
            </div>
          </div>
          <div class="right-box">
            <div class="text-area"> 
              <div class="text-name fontbold fontdark font16">
                kuangyihui5875 
              </div>
              <div class="text-identify disflex fontgrey">
                <div class="text-level-box disflex">
                  <div class="text-level-icon icon iconfont icon-31huiyuan"></div>
                  <div class="">一级会员</div>
                </div>
                <div class="text-identify-level-box disflex">
                  <div class="font12 text-idenfify-level-icon icon iconfont icon-yanzheng"></div>
                  <div class="">一级验证</div>
                </div>
              </div>
              <div class="email-box disflex font12 fontgrey">
                <div class="email-icon fontdanger icon iconfont icon-youxiang1"> </div>
                <div>annie2smith2099@gmail.com</div>
              </div>

              <div class="desp-box disflex font12 fontgrey">
                <div>你还没有向大家介绍自己</div>
              </div>

            </div>
          </div>
        </div>
        <div class="bottom-box disflex">
          <div class="wallet-box disflex">
            <div class="wallet-icon icon iconfont icon-wodeqianbao-m basefontcolor font30"> </div>
            <div class="wallet-coins fontbold font16">0 USDT</div>
          </div>
          <div class="wallet-btn-box disflex">
            <div class="wallet-btn wallet-input">充值</div>
            <div class="wallet-btn">提现</div>
          </div>
        </div>
       </div>
    </div>



    <commonFooter factive='2' />
  </div>
</template>
<style lang="scss" scoped>
.title-box{position: relative;padding:2px 1.5rem; min-height: 200px; box-sizing:border-box; width: 90%; margin: auto; box-shadow:2px 2px 5px rgba(0,0,0,0.2);}
.float-box{position: absolute; right: 0; margin-right:25px; display: flex; padding: 6px; border-bottom-left-radius: .42rem;  border-bottom-right-radius: .42rem;
  .float-icon{margin-right: 2px;}
}
.top-box{
  
  .left-box{
    .avatar-box{height: 62px; width: 62px; border-radius: .42rem; margin-right: 1.55rem; margin-top: .75rem;}
  }
  .right-box{
    padding-top: 33px;
    .text-name{}
    .text-identify{
      box-sizing: border-box;
      padding: 4px 0;
      .text-level-box{margin-right: 6px;}
      .text-level-icon{margin-right: 3px;}
      .text-idenfify-level-icon {position: relative; top:2px; margin: 0 3px;}
    }
    .email-box{padding-bottom: 4px;
      .email-icon{margin-right: 4px;}
    }
  }
}
.bottom-box{
  border-top: 1px #EBEDF3 solid;margin-top: 20px;padding: 22px 0; justify-content: space-between;
  .wallet-box{align-items: center;
    .wallet-icon{position: relative; top:-2px;}
    .wallet-coins{padding-left: 10px;}
  }
  .wallet-btn-box{
    align-items: center;
    .wallet-btn{
      color: #8950FC; background-color: transparent; border:1px #8950FC solid;
      padding: .25rem .45rem; border-radius: .42rem;
    }
    .wallet-input{margin-right: 5px;}
  }
}
</style>
