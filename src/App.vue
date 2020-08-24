<template>
  <div id="app">
    <appHeader/>
    <titleApp/>
    <router-view/>
    <appFooter/>
  </div>
</template>
<script>
// @ is an alias to /src
import appHeader from '@/components/appHeader.vue'
import titleApp from '@/components/titleApp.vue'

import appFooter from '@/components/appFooter.vue'



export default {
  name: 'Home',
  components: {
    appHeader,
    appFooter,
    titleApp
  }
}
</script>

<style>
</style>
