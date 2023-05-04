import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MutualData from './MUTUAL/VariableFns'

import './styles/main.css'

Vue.config.productionTip = false
Vue.mixin(MutualData)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
