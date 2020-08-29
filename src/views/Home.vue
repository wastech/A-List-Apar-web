<template>
  <div class="home">
   <hero/>
   <latestNews/>
   <listApart/>
  </div>
</template>

<script>
// @ is an alias to /src
import hero from '@/components/hero.vue'
//const hero = () => import('@/components/hero.vue')
import latestNews from '@/components/latestNews.vue'
//const latestNews = () => import('@/components/latestNews.vue')
import listApart from '@/components/listApart.vue'
//const listApart = () => import('@/components/listApart.vue')



export default {
  name: 'Home',
  components: {
    hero,
    latestNews,
    listApart
  }
}
</script>
