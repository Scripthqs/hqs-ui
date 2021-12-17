import Vue from 'vue'
import App from './App.vue'

import FUI from '../src/index.js'
Vue.config.productionTip = false
Vue.use(FUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
