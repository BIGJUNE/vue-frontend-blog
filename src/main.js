import Vue from 'vue';
import { Button, Select } from 'element-ui';
import App from './App.vue';
import axios from 'axios';

axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8';
Vue.prototype.$axios = axios;
Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.config.devtools = true
new Vue({
  el: '#home',
  render: h => h(App)
});