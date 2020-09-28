<template>
  <div class="main">
    <div class="container">
      <div class="classify">
       
        <h1 class="title">{{ posts.title }}</h1>
         <img :src="posts.imageUrl" alt="">
        <h4 class="author mb-2">
       <code>  by <small>{{}} </small> <i>{{ posts.createdAt }}</i></code> 
        </h4>
        <p class="paragraph">{{ posts.body }}</p>
      </div>
     
      <featuring/>
       <hr>
     <pastEvent/>
         <hr>
      
    </div>
  </div>
</template>

<script>
import axios from "axios";
//import About from "@/views/About";
import featuring from "@/components/featuring.vue"
import pastEvent from "@/components/pastEvent.vue"

export default {
  name: "post",
components:{
  featuring,
 // About,
  pastEvent
},
  data() {
    return {
      posts: {},
      // id: this.$route.params.title,
    };
  },

  created() {
    let url = `http://localhost:3000/event/getevent/${this.$route.params.title}`;
    axios.get(url).then((response) => {
      this.posts = response.data.event;
      console.log("eventid" + response.data.event);
    });
  },
};
</script>
<style scoped>
.col-sm-8 {
  border-right: 1px solid #ccc;
}
.main {
  border-top: 1px solid #ccc;
}
h1 {
  margin-top: 1rem;
  margin-bottom: 3rem !important;
  font-family: Luminari, fantasy;
  font-style: normal;
  font-size: xxx-large;
}
.title {
  margin-top: 2em;
}
small {
  color: blue;
}
.paragraph {
  font-family: Times, Times New Roman, serif;
  font-size: x-large;
  font-weight: 500;
}
</style>
