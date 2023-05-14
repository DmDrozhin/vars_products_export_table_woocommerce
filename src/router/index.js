import Vue from 'vue'
import VueRouter from 'vue-router'
import DarumiTable from '../views/DARUMI-table'
import LeadorTable from '../views/LEADOR-table'
import KorfadTable from '../views/KORFAD-table'
import OmegaTable from '../views/OMEGA-table'
import KorfadAssist from '../views/KORFAD-assistant'

Vue.use(VueRouter)

const routes = [
  {
    path: '/darumi_table',
    name: 'Darumi_table',
    component: DarumiTable
  },
  {
    path: '/Leador_table',
    name: 'Leador_table',
    component: LeadorTable
  },
  {
    path: '/Omega_table',
    name: 'Omega_table',
    component: OmegaTable
  },
  {
    path: '/Korfad_table',
    name: 'Korfad_table',
    component: KorfadTable,
    children: [{ path: '/Korfad_table/assistant', component: KorfadAssist }]
  }
]

const router = new VueRouter({
  routes
})

export default router
