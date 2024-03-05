import { createRouter, createWebHistory } from 'vue-router'
import Articles from '@/components/Articles Components/Articles.vue'
import SingleArticle from '@/components/Articles Components/SingleArticle.vue'
import Home from '@/views/Home.vue'

const routes = [
    { path: '/',  name:'Home', component: Home },
    { path: '/articles', name:'articles', component: Articles},
    {path: '/article/:id', name: 'article', component: SingleArticle}
    
  ]

  const router = createRouter({
    history: createWebHistory(),
    routes
  })

export default router
