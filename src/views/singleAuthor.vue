<template>
  <div class="main">
    <div class="container">
      <div class="row">
        <div class="col-sm-7">
          <div class="title">
            <h1>wastech</h1>
          </div>

          <div class="img">
            <img
              :src="items.imageUrl"
              alt
            />
            <div class="name">
              <h2>{{items.userName}}</h2>
            </div>
          </div>

          <div class="paragrph">
            <p class="text">
            
            </p>
          </div>
        
        </div>

        <div class="col-sm-5">
        <authorSide/>
        </div>
        
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import authorSide from '@/components/authorSide.vue'
export default {
  components:{
      authorSide
    },
  data() {
    
    return {
      items: [],
       userName: this.$route.params.userName,
    };
  },
   created() {
    let url = `http://localhost:3000/author/getauthor/${this.userName}`;
    axios.get(url).then((response) => {
      this.items = response.data;
      console.log("eventid" + response.data [0]);
    });
  },
};
</script>
<style scoped>
h1{
  font-family: fantasy;
  margin-top: 2em;
}
p{
overflow: auto;
  max-height: 30%;
}
.img {
  text-align: center;

  margin-top: 2rem;
  margin-bottom: 1rem;
}
.from{
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
  font-size: xx-large;
  font-family: Georgia,Times,Times New Roman,serif;
  font-size: 1.8rem;
    line-height: 1.7;
}
.container{
  max-width: 70%;
}
</style>