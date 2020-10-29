<template>
  <div class="main">
    <h1 class="head">TOPIC S</h1>
    <ul class="list-group list-group-flush mt-4">
      <li class="list-group-item" v-for="item in items" :key="item.id">
        <h2>
          <router-link v-bind:to="{ name: 'singleauthor', params: { userName:item.userName}}">
            {{ item.userName }}
          </router-link></h2>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      items: [],
    };
  },
  
        created() {
             axios.get('/author/authors')
            .then((response) => {
                 this.items =response.data
                
            });
        
}
};
</script>
<style scoped>
ul {
  overflow: hidden;
  overflow-y: scroll;
  height: 40em;
  margin-top: 5em !important;
}
h1 {
  font-family: Luminari, fantasy;
  font-style: normal;
  font-size: xx-large;
}
h2 {
  color: #2455c3;
}
.main {
  margin-top: 5em;
}
</style>
