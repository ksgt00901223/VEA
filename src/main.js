// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/common.css';//引入公共css
import '@/assets/iconfont/iconfont.css';//引入公共css
import global_ from "@/assets/js/common.js"

// 全局组件的引入
// import navTop from "@/components/layout/navTop";
// Vue.component("nav-top",navTop)
Vue.use(ElementUI);

axios.defaults.baseURL = 'http://hhh/api/web/v1.0/';//设置baseurl
Vue.prototype.GLOBAL = global_;

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App,
  },
  template: '<App/>',
});
