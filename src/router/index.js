import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import('../views/Home.vue')
const articlePage = () => import('../views/articlePage.vue')
const Topic = () => import('../views/Topic.vue')
const Author = () => import('../views/Author.vue')
const addPost = () => import('../admin/addPost.vue')
const editPost = () => import('../admin/editPost.vue')
const dashBoard = () => import('../admin/dashBoard.vue')
const posts = () => import('../admin/posts.vue')
const addAuthor = () => import('../admin/addAuthor.vue')
const addEvent = () => import('../admin/addEvent.vue')
const login = () => import('../admin/login.vue')
const singleArticle = () => import('../views/singleArticle.vue')
const singleAuthor = () => import('../views/singleAuthor.vue')
const tagSearch = () => import('../views/tagSearch.vue')
const profile = () => import('../views/profile.vue')

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
    path: '/profile',
    name: 'profile',
    component: profile
  },
  {
    path: '/addpost',
    name: 'addpost',
    component: addPost
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
    path: "/article/:id",
    name: "singlearticle",
    component: singleArticle
  },
 
  {
    path: "/article/:tags",
    name: "tagsearch",
    component: tagSearch
  },
  {
    path: '/authors/:userName',
    name: 'singleauthor',
    component: singleAuthor
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
  routes,
  scrollBehavior: () => ({ y: 0 }),
})

export default router
