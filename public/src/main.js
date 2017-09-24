// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import 'font-awesome/css/font-awesome.min.css'
import api from './service/index'
// import $ from 'jquery'
import lrz from 'lrz'

Vue.use(Mint);
// window.jQuery = jQuery
Vue.config.productionTip = false;
Vue.prototype.$http = axios //其他页面在使用axios的时候 ---this.$http调用
Vue.use(api);
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})