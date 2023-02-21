import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import request from './utils/request'
import vcache from './utils/vcache.js'
import commonFunc from './utils/vcommon.js'
import 'vant/es/toast/style';
import 'vant/es/dialog/style';
import 'vant/es/notify/style';
const app = createApp(App)
app.use(router)
app.config.globalProperties.$request = request;
app.config.globalProperties.$vcache = vcache;
app.config.globalProperties.$commonFunc = commonFunc;
app.mount('#app')



