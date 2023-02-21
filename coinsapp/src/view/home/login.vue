<script lang="ts" setup>
import { reactive } from "@vue/reactivity";
import validate from "@/utils/validate.js";
import { ComponentInternalInstance, getCurrentInstance } from "vue";
import { useRouter } from "vue-router";
//let gettoken = await that.$commonFunc.setToken();
const router = useRouter()
const {proxy} = getCurrentInstance() as ComponentInternalInstance;
const that = proxy;
let formdata = reactive([
  {labelname:"登陆账号",labelkey:"username",labelvalue:"", placetxt:"长度在5-16字符之内",required:true, validFunc:"checkusernamelength", checked:true},
  {labelname:"登陆密码",labelkey:"password",labelvalue:"", placetxt:"长度在6-16字符之间", required:true,validFunc:"checkpasswordlength", checked:true}
])

formdata.forEach(it=>{
     if(it.required){
        if(validate.notEmpty(it.labelvalue)) {
              if(undefined != it.validFunc && validate[it.validFunc](it.labelvalue)) it.checked = true;
              else it.checked=false;
        }else it.checked=false;
    }
  });

  let findItem = formdata.find(it=>!it.checked);
  

  if(undefined != findItem) return  "验证不通过";
  //验证通过
  let senddata:any= {};
  formdata.forEach(item=>{
     senddata[item.labelkey] = item.labelvalue;
  })

  //get token

  
  let memurl = "/api/member/signip";  
  let meminfo = await that.$request.post({url:memurl,data:senddata})
  console.log(meminfo)
   if(meminfo){
     router.push('/index')
   }

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
.dangerred{border:1px red solid !important;color:red !important;}
</style>