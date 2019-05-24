// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入vuex管理数据商店
import store from '@/vuex/vueShop.js'

/*vue移动端-适配搭配*/
import 'lib-flexible/flexible.js'

//引入axios库
import axios from "./axios_s/request";
//vue添加一个$axios方法
Vue.prototype.$axios = axios;

// 导入vant所有组件
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

/*阻止启动生产消息，常用作指令*/
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,// 全局注册 vuex状态管理
  components: { App },
  template: '<App/>'
})
