import Vue from 'vue'
import App from './App.vue'
import './assets/css/base.css'
import HqsUI from '../src/index.js'
Vue.config.productionTip = false
Vue.use(HqsUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
