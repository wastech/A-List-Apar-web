import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import('../views/Home.vue')
const articlePage = () => import('../views/articlePage.vue')
const Event = () => import('../views/Event.vue')
const Topic = () => import('../views/Topic.vue')
const Author = () => import('../views/Author.vue')
const addPost = () => import('../admin/addPost.vue')
const editPost = () => import('../admin/editPost.vue')
const dashBoard = () => import('../admin/dashBoard.vue')
const posts = () => import('../admin/posts.vue')
const addAuthor = () => import('../admin/addAuthor.vue')
const addEvent = () => import('../admin/addEvent.vue')
const register = () => import('../admin/register.vue')
const login = () => import('../admin/login.vue')
const singleEvent = () => import('../views/singleEvent.vue')
const singleArticle = () => import('../views/singleArticle.vue')
const singleAuthor = () => import('../views/singleAuthor.vue')







const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/article',
    name: 'articlepage',
    component: articlePage
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
    path: '/addevent',
    name: 'addevent',
    component: addEvent
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/authors',
    name: 'Author',
    component: Author
  },
  
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: "/article/:title",
    name: "singlearticle",
    component: singleArticle
  },
  {
    path: "/event/:title",
    name: "singleevent",
    component: singleEvent
  },
  {
    path: '/authors/:title',
    name: 'singleauthor',
    component: singleAuthor
  },
  {
    path: '/authors/author/:title',
    name: 'author',
    component: Author
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
