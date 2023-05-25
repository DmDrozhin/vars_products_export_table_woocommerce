import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MutualData from './MUTUAL/VariableFns'
// import store from './STORE'

import './styles/main.css'

Vue.config.productionTip = false

Vue.mixin(MutualData)

new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
