const validate = {
	notEmpty:(val)=>{
		if(undefined == val || "" == val || null == val) return false
		else return true
	},
	telphone:(_val)=>{
		let reg = /^[1][3-9][\d]{9}/;
		return reg.test(_val)
	},
	email:(_val)=>{
		let reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
		return reg.test(_val);
	},
	checkusernamelength:(_val)=>{
		if(_val.length>=5 && _val.length<=16) return true;
		return false;
	},
	checkpasswordlength:(_val)=>{
		if(_val.length>=5 && _val.length<=16) return true;
		return false;
	}
}
export default validate