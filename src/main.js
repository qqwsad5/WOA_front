import Vue from 'vue'
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index1.css'
import './theme/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';//加这句引用


Vue.config.productionTip = false
Vue.use(ElementUI);
//把 `axios` 加到 `Vue` 的原型中
Vue.prototype.axios = axios;

axios.defaults.baseURL = "http://123.56.170.97:7777/"
// axios.defaults.headers = {"X-Requested-With": "XMLHttpRequest"}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
