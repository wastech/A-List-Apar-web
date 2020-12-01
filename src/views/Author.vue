<template>
  <div class="main">
    <div class="container">
      <div class="row">
        <div class="col-sm-7">
          <div class="title">
            <h1>Authors</h1>
          </div>

          <div class="paragrph">
            <p class="text">
              {{item.bio}}
            </p>
          </div>
        
 </div>
        <div class="col-sm-5">
          <authorSide />
        </div>
      </div>
     
    </div>
  </div>
</template>
<script>
import authorSide from "@/components/authorSide.vue";
import axios from 'axios'
export default {
   components: {
    authorSide,
  },
  data() {
    return {
      item: {},
    };
  },
  
        created() {
             axios.get('/author/authors')
            .then((response) => {
                 this.item =response.data[0]
                 console.log(this.item)
                
            });
        
}
};
</script>
<style scoped>
h1 {
  font-family: fantasy;
  margin-top: 2em;
}
.main{
  margin-top: 2em;
}
p {
  overflow: auto;
  max-height: 30%;
  font-size: small;
}
.img {
  text-align: center;

  margin-top: 2rem;
  margin-bottom: 1rem;
}
.from {
  margin-top: 3em;
}
img {
  max-width: 30%;
  width: 25%;
  object-fit: cover;
  border-radius: 50%;
  margin: 6em solid red;
}
.col-sm-7 {
  border-right: 2px solid #ccc;
}
.main {
  border-top: 2px solid #ccc;
}
.text {
  font-size: medium;
  font-family: Georgia, Times, Times New Roman, serif;

  line-height: 1.7;
}
.container {
  max-width: 70%;
}
</style>
