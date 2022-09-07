import { createRouter, createWebHistory } from 'vue-router'
import Home from '../Home.vue'
import CardDetails from '../components/CardDetails.vue'

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home,
  },
  {
    name: 'Card Details',
    path: '/cards/:name',
    component: CardDetails,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router