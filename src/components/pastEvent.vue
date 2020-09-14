<template>
<div>
  <div class="main">
      <div class="head">
        <h3 class="title"> past Events</h3>
      </div>
      <div class="container">
      <div class="row">
        <div class="col-sm-6" v-for="item in items" :key="item.title">
           <router-link v-bind:to="{ name: 'singleevent', params: { title:item.id}}">  <h2 class="title1">{{item.title}}</h2></router-link>
          <h4 class="date">{{item.createdAt}}</h4>
          <h5 class="paragraph">{{item.body}}</h5>
        </div>
      </div>
    </div>
  </div>
    <About/>
  </div>
</template>

<script>
import axios from 'axios'
import About from "../views/About.vue";
export default {
  components: {
    About,
  },
  data() {
    return {
      items: [],
    };
  },
        created() {
             axios.get('http://localhost:3000/event/getevents')
            .then(response => {
                 this.items =response.data.events
                
            });
        
}
};
</script>
<style scoped>
.head {
  text-align: center;

}
h4{
  font-family: American Typewriter, serif;
  margin-bottom: 2em;
}
.title{
  font-family: Impact, fantasy;

}

/*h2 {
  text-align: center;
  font-family: Times, Times New Roman, serif;
  margin-top: 1em;
  margin-bottom: 2em;
}*/
.title1{
  color: #2455c3;
  text-align: center;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.date{
  text-align: center;
  margin-top: 1;
  margin-bottom: 1em;
}
.paragraph{
  font-size: x-large;
  font-family: Georgia,Times,Times New Roman,serif;
  font-size: 1.4rem;
    line-height: 1.7;
    overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
 
}
.col-sm-6{
 margin-bottom: 2em;
}
</style>