import Vue from 'vue'
import VueRouter from 'vue-router'
import MainTable from '../views/MainTable'
import DoorConfig from '../views/DoorConfig'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainTable
  },
  {
    path: '/door_config',
    name: 'DoorConfig',
    component: DoorConfig
  }
]

const router = new VueRouter({
  routes
})

export default router
