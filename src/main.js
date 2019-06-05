
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
/**ES6 => ES5 (没效果） -s*/
import 'babel-polyfill'
/**ES6 => ES5 -e*/

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


//倒计时
// Vue.prototype.countdowm = function (itemEnd,CountDown) {
//   let self = this
//   let timer = setInterval(function () {
//       let nowTime = new Date().getTime()
//       let endTime = new Date(itemEnd)*1000
//       let t = endTime - nowTime
//       if (t > 0) {
//           let day = Math.floor(t / 86400000)
//           let hour = Math.floor((t / 3600000) % 24)
//           let min = Math.floor((t / 60000) % 60)
//           let sec = Math.floor((t / 1000) % 60)
//           hour = hour < 10 ? '0' + hour : hour
//           min = min < 10 ? '0' + min : min
//           sec = sec < 10 ? '0' + sec : sec
//           let format = ''
//           if (day > 0) {
//               format = `${day}:${hour}:${min}:${sec}`
//           }
//           if (day <= 0 && hour > 0) {
//               format = `${hour}:${min}:${sec}`
//           }
//           if (day <= 0 && hour <= 0) {
//               format = `${min}:${sec}`
//           }
//           self.CountDown = format
//       } else {

//           clearInterval(timer)
//           self.CountDown = 'over'
//       }
//   }, 1000)
// },

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
