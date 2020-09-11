<template>
  <div class="main">
    <div class="container">
        <div class="row">
    <div class="col-sm-8">
     <div class="classify">
          <h1 class="head">Articles</h1>
          <div class="col mb-5" v-for="item in items" :key="item.id">
            <h3 class="title">{{item.title}}</h3>
            <h4 class="author mb-2"> by <small>{{item.author}}  </small> <i>20 jan 200</i></h4>
            <p class="paragraph">{{item.paragraph}}</p>
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
export default {
    props: ['category'],
    data() {
        return {
            items: []
        }
    },
    
    created() {
        this.fetch();
    },
    watch: {
        '$route' (to, from) {
            if(from.params.category !== to.params.category){
                this.fetch()
            }
        }
    },
    methods: {
        fetch() {
             axios.get(`http://localhost:3000/category/category/${this.category}`)
            .then(response => {
                 this.products = response.data
            });
        }
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