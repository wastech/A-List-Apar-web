import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Article from '../views/Article.vue'
import Event from '../views/Event.vue'
import Topic from '../views/Topic.vue'
import Author from  '../views/Author.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/article',
    name: 'Article',
    component: Article
  },
  {
    path: '/author',
    name: 'Author',
    component: Author
  },
  {
    path: '/event',
    name: 'Event',
    component: Event
  },
  {
    path: '/topics',
    name: 'Topic',
    component: Topic
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
