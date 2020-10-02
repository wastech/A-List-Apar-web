<template>
  <div class="main">
    <div class="container">
        <div class="row">
    <div class="col-sm-8">
     <div class="classify">
      
          <h1 class="head">Articles</h1>
    
          <div class="col mb-5" v-for="post in posts" :key="post._id">
           <router-link v-bind:to="{ name: 'singlearticle', params: { title:post.title}}">  <h3 class="title">{{post.title}}</h3></router-link>
            <h4 class="author mb-2"> 
         
           <i>{{post.createdAt}}</i>  
                </h4>
            <p class="paragraph">{{post.body}}</p>
          </div>

        </div>
    </div>
    <div class="col-sm-4">
      <articleSide/>
    </div>
   
  </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import articleSide from '@/components/articleSide'
export default {
  name:'articlepage',
  components:{
articleSide
  },
    data() {
        return {
            posts: [],
        }
    },
  
        created() {
             axios.get('http://localhost:3000/article/getposts')
            .then(response => {
                 this.posts =response.data
                
            });
        
}
}
</script>
<style scoped>
.col-sm-8 {
  border-right: 1px solid #ccc;
}
.main {
  border-top: 1px solid #ccc;
}
h1{
  margin-top: 1rem;
  margin-bottom: 3rem !important;
  font-family: Luminari, fantasy;
  font-style: normal	;
  font-size: xxx-large;
}
.title{
  color: blue;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
small{
  color:blue;
}
.paragraph{
  font-family: Times, Times New Roman, serif;
  font-size: x-large;
  font-weight: 500;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
 
  
  
}
</style>