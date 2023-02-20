<script lang="ts" setup>
import { reactive } from "@vue/reactivity";
import validate from "@/utils/validate.js";
let formdata = reactive([
  {labelname:"登陆账号",labelkey:"username",labelvalue:"", placetxt:"长度在5-16字符之内",required:true, validFunc:"checkusernamelength", checked:false},
  {labelname:"登陆邮箱",labelkey:"email",labelvalue:"", placetxt:"请输入邮箱",required:true,validFunc:"email", checked:false},
  {labelname:"登陆密码",labelkey:"password",labelvalue:"", placetxt:"长度在6-16字符之间", required:true,validFunc:"checkpasswordlength", checked:false},
  {labelname:"推荐码",labelkey:"recode",labelvalue:"", placetxt:"没有可不填",required:false,checked:false}
])

const  submitClick=()=>{
  let checkall = true;
  formdata.forEach(it=>{
     if(it.required){
        if(validate.notEmpty(it.labelvalue)) {
         
              if(undefined != it.validFunc){
                let evalfunc = "validate."+it.validFunc + "("+it.labelvalue + ")";
             
                if( eval(evalfunc) ){
                  console.log("func",evalfunc)
                  it.checked = true;
                }else{
                  console.log("labelvalue",it.labelvalue)
                  it.checked=false;
                  checkall = false;
                }
              }
        }else{
          it.checked=false
        }
    }
  })


}
</script>
<template>
  <div class="container vh100">
    <div class="form-box-wrap font14 fontbold fontdark"> 
      <div class="lr-title font22">注册</div>
      <div class="lr-input-wrap" v-for="(item,index) in  formdata" :key="index">
        <div>{{item.labelname}}</div>
        <div> <input type="text" v-model="item.labelvalue" :class='{"lr-input":true,"dangerred":item.checked}' :placeholder="item.placetxt"  /> </div>
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