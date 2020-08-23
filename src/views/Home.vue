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
import latestNews from '@/components/latestNews.vue'
import listApart from '@/components/listApart.vue'



export default {
  name: 'Home',
  components: {
    hero,
    latestNews,
    listApart
  }
}
</script>
