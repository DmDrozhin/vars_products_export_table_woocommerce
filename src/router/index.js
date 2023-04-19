import Vue from 'vue'
import VueRouter from 'vue-router'
import DarumiTable from '../views/DARUMI-table'
import DarumiConfig from '../views/DARUMI-config'

Vue.use(VueRouter)

const routes = [
  {
    path: '/darumi_table',
    name: 'Darumi_table',
    component: DarumiTable
  },
  {
    path: '/darumi_config',
    name: 'Darumi_config',
    component: DarumiConfig
  }
]

const router = new VueRouter({
  routes
})

export default router
