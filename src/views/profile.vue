<template>

  <div class="row">
    <div class="col-sm-3 ">
      <div class="image">
        <img src="https://previews.123rf.com/images/aaronamat/aaronamat1805/aaronamat180500440/104448488-african-american-man-with-beard-thinking-thoughtful-with-smart-face-isolated-over-white-background.jpg" alt="">
      </div>
      <div class="name">
       
          
          <h3 class="username">wastech wastech</h3>
             <h5 class="email">fataiwasiu@gmail.com</h5>
          <p class="paragraph">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. </p>
        
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
        userDetails:{},
     userName: this.$route.params.userName,
    };
  },
 
  methods: {
   
  },
  
 /* created() {
    let url = `/author/getauthor/${this.userName}`;
    axios.get(url).then((response) => {
      this.userDetails = response.data[0];
      console.log("lll" +this.userDetails);
    });
  },*/
};
</script>


<style scoped>
.col-sm-3{
  background-color: #ccc;
  border-right: 5px solid green;
  
  
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