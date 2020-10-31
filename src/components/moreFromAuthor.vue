<template>
  <div class="container">
    <div class="media" v-for="item in items" :key="item.id">
  <img src="" class="mr-3" alt="...">
  <div class="media-body">
    <h5 class="mt-0">{{item.userName}}</h5>
    <p>{{item.bio}}</p>
  </div>
</div>
  </div>
</template>
<script>
import axios from "axios";
export default {
 
  data() {
    return {
      items: {},
      userName: this.$route.params.userName,
    };
  },
  created() {
    let url = `/author/getauthor/${this.userName}`;
    axios.get(url).then((response) => {
      this.items = response.data[0];
      console.log(this.items);
    });
  },
  
};
</script>