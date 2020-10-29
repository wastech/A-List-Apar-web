<template>
  <div class="main">
    <div class="container">
        <div class="row">
    <div class="col-sm-8">
     <div class="classify">
         
         
       
            <h3 class="title">{{article.title}}</h3>
            <h4 class="author mb-2"> by <small>  </small> <i>{{article.createdAt}}</i></h4>
            <p class="paragraph">{{article.body}}</p>
             
        

    
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
  name: 'singlearticle',
  components:{
    
articleSide
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