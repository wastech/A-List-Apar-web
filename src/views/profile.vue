<template>

  <div class="row">
    <div class="col-sm-3 ">
      <div class="image">
        <img :src="item.user.imageUrl" alt="">
      </div>
      <div class="name">
       
          
          <h3 class="username">{{item.user.userName}}</h3>
             <h5 class="email">{{item.user.email}}</h5>
          <p class="paragraph">{{item.user.bio}}</p>
        
      </div>

    </div>
    <div class="col-sm-7">

    <profileSide/>

    </div>
    
  </div>



</template>
<script>
import profileSide from '@/components/profileSide'
import axios from 'axios'

export default {
  components:{
    profileSide
  },
  data() {
    return {
        item:{},
  
    };
  },
 
  methods: {
   
  },
  
  created() {
    let url = "author/api/users/me";
    axios.get(url).then((response) => {
      this.item = response.data;
      console.log(this.item);
    });
  },
};
</script>


<style scoped>
.col-sm-3{
  background-color: #ccc;
  border-right: 5px solid green;
  margin-top:3em;
  
  
}
.row{
  margin-top: 3em;
}
p.paragraph{
  font-size: medium;
  text-align: center;
}
 img{
  width: 100%;
  max-width: 40%;
  border-radius: 50%;
  
  height: 20vh;
 

  object-fit: cover;
}
.name{
  text-align: center;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
}
.image{
  text-align: center; 
  
}
</style>