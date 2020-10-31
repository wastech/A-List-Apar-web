<template>
  <div class="container-fluid">
    <div class="content" v-for="item in items.slice(0,2).reverse()" :key="item._id">
      <h1>
        <button type="button" class="btn btn-danger">
          <h3>new!</h3>
        </button>
        <small>{{item.createdAt}}</small>
      </h1>
      <router-link
                v-bind:to="{ name: 'singlearticle', params: { id: item.id } }"
              >
      <h1 class="title">{{item.title}}</h1>
      </router-link>
      <h3 class="name">
        by
        <router-link
                      v-bind:to="{
                        name: 'singleauthor',
                        params: { userName: item.Author.userName },
                      }"
                    >
        <span>{{item.Author.userName}}</span>
        </router-link>
      </h3>
      <p class="text">{{item.body}}</p>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      items: [],
    };
  },
  created() {
    axios.get("http://localhost:3000/article/getposts").then((response) => {
      this.items = response.data;
    });
  },
};
</script>
<style scoped>
.container-fluid {
  max-width: 70%;
}
.content {
  text-align: center;
  margin-top: 2em;
  margin-bottom: 4em;
}
button {
  padding: 5px;
  border-radius: 10px;
}
small {
  font-size: 0.7em;
  font-weight: bold;
}
h1.title {
  font-family: Impact, fantasy;
  font-style: normal;
  font-weight: 300;
  margin-top: 1em;
}
span {
  color: blue;
}
p.text {
  font-size: Arial, sans-serif;
  font-size: xx-large;
   overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}
@media only screen and (max-width: 768px) {
 button {
  padding: 2px;
  border-radius: 5px;
}
small {
  font-size: 0.5em;
  font-weight: bold;
  margin-left: 1em;
}
span {
  color: blue;
  font-size: medium;
  font-weight: bold;
}
h1.title {
  font-family: Impact, fantasy;
  font-style: normal;
  font-weight: 100;
  margin-top: 0.4em;
  font-size: large;
}
p.text {
  font-size: Arial, sans-serif;
  font-size: large;
   overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-align: center;
}
.container-fluid {
  max-width: 95%;
}
.content{
  margin-bottom: 1em;
}
} 
</style>