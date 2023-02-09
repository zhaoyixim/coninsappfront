<script lang="ts" setup>


</script>
<template>
  <div class="container vh100">
    <div class="form-box-wrap font14 fontbold fontdark"> 
      <div class="lr-title font22">注册</div>
      <div class="lr-account  lr-input-wrap">
        <div>登陆账号</div>
        <div> <input type="text" class="lr-input lr-username" /> </div>
      </div>
      <div class="lr-passwd lr-input-wrap">
        <div>登陆密码</div>
        <div> <input type="text" class="lr-input lr-passwd" /> </div>
      </div>
      <div class="lr-recommment lr-input-wrap">
        <div>推荐码</div>
        <div> <input type="text" class="lr-input lr-passwd" placeholder="没有可不填" /> </div>
      </div>
      <div class="vbtn-box">
        <button class="vbtn fontbasecolor bgbasecolor3">登陆</button>
        <button class="vbtn  basefontcolor bgbasecolor4 margintop10">账号登陆</button>
      </div>
    </div>
   
  </div>
</template>
<style lang="scss">
@import "@/assets/css/loginAndreg.scss";
</style>