import md5 from 'js-md5'
import request from './request';
import vcache from './vcache.js';
import { showToast  } from 'vant';
import { useRouter } from "vue-router";
/*token 存储有效时间--单位秒*/
const expiretime = 3600
const router = useRouter()
const commonFunc = {
	getRandomString:(code=10)=>{
	      let len = code
	      let $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz123456789' 
	      let maxLen = $chars.length
	      let pwd = ''
	      for (let i = 0; i < len; i++) {
	        pwd += $chars.charAt(Math.floor(Math.random() * maxLen ))
	      }
	      return pwd.toUpperCase()
	},
	setToken:async(authdata = {})=>{
		let timestamp=new Date().getTime()/*毫秒级*/
		let appid = commonFunc.getRandomString(10);
		let secrect = commonFunc.getRandomString(16);
		let mphone = commonFunc.getRandomString(11);
		let senddata = {
			appId : appid.toUpperCase(),
			secrect : secrect,
			imel : md5(appid+secrect+mphone),
			timeId : timestamp,
			mphone : mphone,
			randStr : commonFunc.getRandomString()
		}
		let json1 =  "";
		for(let key in senddata){
			json1 += senddata[key]
		}
		let json2 = md5(json1)
		senddata.authId = md5(md5(json1) + json2)
		let authurl = '/api/auth/token'
		let postdata = {authcode:senddata,...authdata}
		let accesscode = await request.post({url:authurl,data:postdata})
		if(accesscode){
			await vcache.vset("token",accesscode.access_token,expiretime);
			return true
		}else{
			showToast("token获取失败");
			return false
		}
	},
	tokenCheck:async(flag = false)=>{
		/*flag == true 强制刷新token*/
		let gettoken = await vcache.vget("token")
		let meminfo = await vcache.vget("meminfo")
		if(!meminfo){
			showToast({title:"未登录!"})
			setTimeout(function(){
				router.push('/login')
			},1000)
			return ;
		}
		 if(flag || null == gettoken || undefined ==gettoken){
			 console.log("token过期")
			 
			 let gettokenfundata = await commonFunc.setToken(Vue.prototype.$adpid,Vue.prototype.$secrect,meminfo.m_phone)		
			
			 return gettokenfundata
		 }
		 return true
	},
	updatememinfo:async()=>{
		let getmeminfo = await vcache.vget("meminfo")
		let memurl = "/user/info"
		let sendPhone = {mphone:getmeminfo.m_phone}
		let meminfo = await request.post(memurl,sendPhone)
		if(meminfo.code == 0) {
			await vcache.vset("meminfo",meminfo.data)
		}else{
			uni.showToast({
				title:meminfo.msg,
				icon:"erorr"
			})
		}
	}
};
export default commonFunc;