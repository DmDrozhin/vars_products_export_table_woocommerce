import Vue from 'vue'
import VueRouter from 'vue-router'
import DarumiTable from '../views/DARUMI-table'
import LeadorTable from '../views/LEADOR-table'

Vue.use(VueRouter)

const routes = [
  {
    path: '/darumi_table',
    name: 'Darumi_table',
    component: DarumiTable
  },
  {
    path: '/Leador_config',
    name: 'Leador_table',
    component: LeadorTable
  }
]

const router = new VueRouter({
  routes
})

export default router
