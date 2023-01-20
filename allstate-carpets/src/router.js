import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage.vue'
import AboutUs from './components/Aboutus.vue'

const routes = [
  { path: '/', component: HomePage, name: 'HomePage' },
  { path: '/aboutus', component: AboutUs, name: 'AboutUs' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
