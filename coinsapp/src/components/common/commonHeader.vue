<script setup lang="ts">
import { reactive, } from 'vue'
import { useRouter } from 'vue-router';

let gettitle = defineProps<{ ftitle: {type:string,default:"首页"},needBack: {type:boolean,default:false} }>();

</script>

<template>
  <div class="header-wrap bgbasecolor2 fontbasecolor">
    <div  class="float-header-box disflex">
      <div class="icon iconfont icon-jiantouyou icon-left"> </div>
      <div class="icon iconfont icon-geren font20"></div>
    </div>
    <div class="font16 header-box fontbold">
      {{gettitle.ftitle || '首页'}}
    </div>
  </div>
</template>

<style lang="scss" >
.header-wrap{ box-sizing: border-box; width: 100%;  position: relative;height: 44px; overflow: hidden;
  .float-header-box{ position: absolute; top: 0; box-sizing: border-box; width: 100%; justify-content: space-between; 
    padding: 10px 15px;
    .icon-left{transform: rotate(180deg);}
  }
  .header-box{ padding: 12px;  text-align: center; }
}


</style>
