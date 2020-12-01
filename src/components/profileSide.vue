<template>
  <div class="container">
      <h2 class="title">Latest post</h2>
 <div class="row no-gutters bg-light position-relative"  v-for="item in items.slice(0,3).reverse()" :key="item">
  <div class="col-md-6 mb-md-0 p-md-4">
    <img :src="item.imageUrl" class="w-100" alt="...">
  </div>
  <div class="col-md-6 position-static p-4 pl-md-0" >
    <router-link
        v-bind:to="{ name: 'singlearticle', params: { id: item.id } }"
      >
      <h5 class="mt-0">{{item.title}}</h5>
      </router-link>

      

    
    <p>{{item.body}}</p>
    <a href="#" class="stretched-link">read more..</a>
  </div>
</div>


  </div>
</template>
<script>
import axios from 'axios'
export default {
  data(){
    return{
      items:[],
    }
  },
  
  created() {
    axios.get("http://localhost:3000/article/getposts").then((response) => {
      this.items = response.data;
    });
  },
}

</script>

<style scoped>
img{
  height: 10em;
}
h5{
  font-size: medium;
}
p{
  font-size: small;
   overflow: hidden;
  display: -webkit-box;
  font-size: medium;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}
.title{
  text-align: center;
  margin-bottom: 1em;
}
</style>