<template>
  <div class="main">
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a class="nav-link" href="/">logo</a>

        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="/article">
              ARTICLES
              <span class="sr-only">(current)</span>
            </a>
          </li>
          
          <li class="nav-item">
            <a class="nav-link" href="/topics">TOPICS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/topics">WRITE FOR US</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          
         
            <a class="nav-link" href="/addauthor" v-if="!$store.state.isUserLoggedIn">sign up</a>
        

          
            <a class="nav-link" href="/login" v-if="!$store.state.isUserLoggedIn" >login</a>
         

         
            <a class="nav-link" href="/topics" v-if="$store.state.isUserLoggedIn"  @click="logout">logout</a>
        

        
            <a class="nav-link" href="/profile" v-if="$store.state.isUserLoggedIn">profile</a>
       
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data () {
    return {
      key: 'value'
    }
  },
   computed: {
    ...mapState(['isUserLoggedIn'])
  },
  methods: {
    logout () {
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'Home'
      })
    }
  }
 
}
</script>


<style scoped>
.bg-light {
  background-color: #ffffff !important;
  opacity: 0.9;
}
a.nav-link {
  font-size: 1em;
  color: black !important;
  font-variant: small-caps;
  font-family: Luminari, fantasy;
  font-style: normal;
  font-stretch: ultra-condensed;
  font-weight: 200;
}
</style>
