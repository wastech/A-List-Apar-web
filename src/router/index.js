import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Article from '../views/Article.vue'
import Event from '../views/Event.vue'
import Topic from '../views/Topic.vue'
import Author from  '../views/Author.vue'
import addPost from  '../admin/addPost.vue'
import editPost from  '../admin/editPost.vue'
import dashBoard from  '../admin/dashBoard.vue'
import posts from  '../admin/posts.vue'







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
    path: '/posts',
    name: 'posts',
    component: posts
  },
  {
    path: '/dashboard',
    name: 'dashBoard',
    component: dashBoard
  },
  {
    path: '/editpost',
    name: 'editPost',
    component: editPost
  },
  {
    path: '/addpost',
    name: 'addPost',
    component: addPost
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
