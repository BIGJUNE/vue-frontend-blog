import Vue from 'vue';
import { Button, Select } from 'element-ui';
import App from './App.vue';
import axios from 'axios';
import GlobalConstant from './global'
import router from './router.js'


axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8';

Vue.prototype.$axios = axios;
Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.config.devtools = true;
Vue.prototype.GLOBAL=GlobalConstant;

new Vue({
  el: '#home',
  router,
  render: h => h(App)
});