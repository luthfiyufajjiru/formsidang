import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pengumpulanberkas',
    name: 'Pengumpulan Berkas untuk Sidang Akhir Skripsi',
    component: () => import(/* webpackChunkName: "about" */ '../components/formulir/pengumpulanberkas.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
