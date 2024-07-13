import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LettersView from '../views/LettersView.vue'
import LetterPage from '../components/LetterPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/letters',
    name: 'letters',
    component: LettersView
  },
  {
    path: '/letter/:letter',
    name: 'letter',
    component: LetterPage,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
