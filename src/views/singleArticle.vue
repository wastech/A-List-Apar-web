<template>
  <div class="main">
    <div class="container">
        <div class="row">
    <div class="col-sm-10">
     
         
         
       
            <h3 class="title">{{article.title}}</h3>
            <h4 class="author mb-2"> by <small>  </small> <i>{{article.createdAt}}</i></h4>
            <p class="paragraph">{{article.body}}</p>
             
        

    <!-- more from author-->
     <div >
       <h3 class="moretitle">About the Author</h3>
    <div class="media" >
  <img :src="article.Author.profileImg" class="mr-3 img-thumbnail" alt="article.Author.userName">
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

.moretitle{
  text-align: center;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
}
img {
  max-width: 30%;
  width: 25%;
  object-fit: cover;
  border-radius: 50%;
  margin: 6em solid red;
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