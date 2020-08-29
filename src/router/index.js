import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import('../views/Home.vue')
const Article = () => import('../views/Article.vue')
const Event = () => import('../views/Event.vue')
const Topic = () => import('../views/Topic.vue')
const Author = () => import('../views/Author.vue')
const viewPost = () => import('../views/viewPost.vue')
const addPost = () => import('../admin/addPost.vue')
const editPost = () => import('../admin/editPost.vue')
const dashBoard = () => import('../admin/dashBoard.vue')
const posts = () => import('../admin/posts.vue')
const addAuthor = () => import('../admin/addAuthor.vue')
const register = () => import('../admin/register.vue')
const login = () => import('../admin/login.vue')






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
    path: '/addauthor',
    name: 'addauthor',
    component: addAuthor
  },
  {
    path: '/addauthor',
    name: 'addauthor',
    component: addAuthor
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/login',
    name: 'login',
    component: login
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
