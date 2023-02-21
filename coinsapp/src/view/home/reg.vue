<script lang="ts" setup>
import { reactive } from "@vue/reactivity";
import validate from "@/utils/validate.js";
import { getCurrentInstance } from "vue";
const that = getCurrentInstance()?.proxy;
let formdata = reactive([
  {labelname:"登陆账号",labelkey:"username",labelvalue:"", placetxt:"长度在5-16字符之内",required:true, validFunc:"checkusernamelength", checked:true},
  {labelname:"登陆邮箱",labelkey:"email",labelvalue:"", placetxt:"请输入邮箱",required:true,validFunc:"email", checked:true},
  {labelname:"登陆密码",labelkey:"password",labelvalue:"", placetxt:"长度在6-16字符之间", required:true,validFunc:"checkpasswordlength", checked:true},
  {labelname:"推荐码",labelkey:"recode",labelvalue:"", placetxt:"没有可不填",required:false,checked:true}
])

const  submitClick=async ()=>{
  let checkall = true;
  formdata.forEach(it=>{
     if(it.required){
        if(validate.notEmpty(it.labelvalue)) {
              if(undefined != it.validFunc && validate[it.validFunc](it.labelvalue)) it.checked = true;
              else it.checked=false;
        }else it.checked=false;
    }
  });

  let findItem = formdata.find(it=>!it.checked);
  let gettoken = await that.$commonFunc.setToken();

  if(undefined != findItem) return  "验证不通过";
  //验证通过
  let senddata:any= {};
  formdata.forEach(item=>{
     senddata[item.labelkey] = item.labelvalue;
  })

  let memurl = "/api/member/signup";
  
  let meminfo = await that.$request.post({url:memurl,data:senddata})
  console.log(meminfo)


};

const inputFocus = (item)=>{
  item.labelvalue = ""
}
</script>
<template>
  <div class="container vh100">
    <div class="form-box-wrap font14 fontbold fontdark"> 
      <div class="lr-title font22">注册</div>
      <div class="lr-input-wrap" v-for="(item,index) in  formdata" :key="index">
        <div>{{item.labelname}}</div>
        <div> <input type="text" v-model="item.labelvalue" @focus="()=>inputFocus(item)" :class='{"lr-input":true,"dangerred":!item.checked}' :placeholder="item.placetxt"  /> </div>
      </div>
     
      <div class="vbtn-box">
        <button @click="()=>submitClick()" class="vbtn fontbasecolor bgbasecolor3">登陆</button>
        <router-link to="/login" > 
            <button class="vbtn  basefontcolor bgbasecolor4 margintop10">账号登陆</button>
         </router-link>
      </div>
    </div>
   
  </div>
</template>
<style lang="scss">
@import "@/assets/css/loginAndreg.scss";
.dangerred{border:1px red solid !important;color:red !important;}
</style>