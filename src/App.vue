<template>
  <div id="app">
    <appHeader/>
    <titleApp/>
    <router-view/>
   
  </div>
</template>
<script>
// @ is an alias to /src
import appHeader from '@/components/appHeader.vue'
import titleApp from '@/components/titleApp.vue'





export default {
  name: 'Home',
  components: {
    appHeader,
    titleApp
  }
}
</script>

<style>
</style>
