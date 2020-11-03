<template>
  <div class="main">
    
       
     
         
         
       <div class="image1">
      <img :src="article.imageUrl" alt="">
    </div>
     <div class="header">
<h1 class="title">{{article.title}}</h1>
<h4 class="author mb-2"> by <small> {{article.Author.userName}} </small> <i>{{article.createdAt}}</i></h4>
<!--
<p>publish in <code>
  <div class="tags">
                <router-link v-bind:to="{ name: 'tagsearch', params: { tags:article.tags}}">{{article.tags}}</router-link>
              </div></code></p>
-->

                <div class="tags" v-for="tag in article.tags" v-bind:key=tag.id>
                <router-link v-bind:to="{ name: 'tagsearch', params: { tags:tag}}" v-if="tag" class="tag my-2">{{tag}}</router-link>
              </div>




     </div>
            
            <div class="container">
             <div class="row">
    <div class="col-sm-10">
            
            <p class="paragraph">{{article.body}}</p>
             
        

    <!-- more from author-->
     <div >
       <h3 class="moretitle">About the Author</h3>
    <div class="media" >
  <img :src="article.Author.imageUrl" class="mr-3 img-thumbnail" alt="article.Author.userName">
  <div class="media-body">
    <h2 class="mt-0">{{article.Author.userName}}</h2>
    <p class="paragraph">{{article.Author.bio}}</p>
  </div>
</div>
  </div>



   
    </div>
    <div class="col-sm-2">
      <listApartSide/>
    </div>
   
  </div>
    </div>
   
  </div>
</template>

<script>
import axios from 'axios'
import listApartSide from '@/components/listApartSide'
import moreFromAuthor from '@/components/moreFromAuthor'
export default {
  name: 'singlearticle',
  components:{
    
listApartSide,
moreFromAuthor
  },
    data() {
        return {
            article: {},
             id: this.$route.params.id,
        }
    },
  
        created() {
             axios.get(`/article/getpost/${this.id}`)
            .then((response )=> {
                 this.article =response.data
                 console.log(this.article)
                
            });
        
}
}
</script>
<style scoped>

 .image1 img{
  max-width: 50%;
  width: 100%;
  max-height:30% ;
  height: 30em;
  object-fit: cover;
 
}

.tags{
 display: inline-block;
}
.tag{
  margin:5px 10px 5px 0;
  box-shadow: 2px 2px 2px rgba(0,0,0,0.3);
  padding: 3px 6px;
  border-radius: 5px;
  background: lightblue;
  font-family: "Poppins";
  font-size: 0.7rem;
  color:black;
}
.tag:hover{
  text-decoration: none;
}
.image1 {
 text-align: center;
}
@media only screen and (max-width: 768px) {
  .image1 img{
  max-width: 70%;
  width: 100%;
  object-fit: cover;
 
}
} 

.moretitle{
  text-align: center;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
}
.media img {
  max-width: 30%;
  width: 25%;
  object-fit: cover;
  border-radius: 50%;
  margin: 6em solid red;
}
h1{
  margin-top: 1rem;
  margin-bottom: 1.5rem !important;
  font-family: Luminari, fantasy;
  font-style: normal	;
  font-size: xxx-large;
}
.header{
  text-align: center;
}
small{
  color:blue;
}
.paragraph{
  font-family: Times, Times New Roman, serif;
  font-size: x-large;
  font-weight: 500;
 
  
  
}
</style>