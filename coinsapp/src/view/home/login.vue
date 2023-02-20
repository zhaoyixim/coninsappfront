<script lang="ts" setup>


</script>
<template>
  <div class="container vh100">
    <div class="form-box-wrap font14 fontbold fontdark"> 
      <div class="lr-title font22">登陆</div>
      <div class="lr-account  lr-input-wrap">
        <div>登陆账号</div>
        <div> <input type="text" class="lr-input lr-username" /> </div>
      </div>
      <div class="lr-passwd  lr-input-wrap">
        <div class="lr-passwd-title-box">
          <div>登陆密码</div>
          <div class="basefontcolor font13">忘记密码？</div>
        </div>
        <div> <input type="text" class="lr-input lr-passwd" /> </div>
      </div>
      <div class="vbtn-box">
        <button class="vbtn  fontbasecolor bgbasecolor3">登陆</button>
        <router-link to="/reg">
          <button class="vbtn basefontcolor bgbasecolor4 margintop10">注册账号</button>
        </router-link>
      </div>
    </div>
   
  </div>
</template>
<style lang="scss">
@import "@/assets/css/loginAndreg.scss";
</style>