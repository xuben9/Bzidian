import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'


Vue.prototype.$axios = axios
axios.defaults.baseURL = process.env.NODE_ENV === "production" ? "http://179.10.8.14:10099/iot_measurement_dictionaryTool/dictionaryTool" : '/api'
Vue.use(ElementUI, { size: 'small', zIndex: 3000 })
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

