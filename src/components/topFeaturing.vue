<template>
  <div class="main">
    <div>
      <div class="head">
        <h1>FEATURING</h1>
      </div>
   
      <div class="media" v-for="item in items" :key="item.id">
        <img :src="item.imageUrl" class="mr-3 img-thumbnail" alt="..." />
        <div class="media-body">
          <h2 class="mt-0">{{ item.userName }}</h2>
          <div class="bio">
            <h5>{{ item.bio }}</h5>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  props: {
    category: String,
  },
  data() {
    return {
      items: [],
    };
  },
    created() {
             axios.get('/author/authors')
            .then((response) => {
                 this.items =response.data
                
            });
        
}

/*  watch: {
    $props: {
      handler: async function (newProps) {
        const response = await axios.get(`/author/${newProps.category}`);
        this.items = response.data;
        console.log(this.items);
      },
      deep: true,
    },
  },*/
};
</script>
<style scoped>
.media {
  margin-top: 1.5em;
  margin-bottom: 1.5em;
}
img {
  max-width: 12%;
  width: 100%;
  object-fit: cover;
  border-radius: 50%;
  background-color: #ccc;
}
.bio {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-family: Times, Times New Roman, serif;
  font-size: large;
  font-weight: 500;
}
.image {
  text-align: center;

  margin-top: 2rem;
  margin-bottom: 1rem;
}
.title {
  text-align: center;
}
.head h1 {
  color: #ba3925;
  margin-top: 2em;
  margin-bottom: 1.5em;
  font-family: "Franklin ITC", sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
}
h2 {
  color: #2455c3;
  font-size: 1.125rem;
  line-height: 1.3;
  margin-top: 5px;
  margin-bottom: 0;
  text-align: left;
}
</style>
