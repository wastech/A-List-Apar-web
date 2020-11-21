<template>
  <div class="main">
    <div class="container">
      <div class="row">
        <div class="col-sm-7">
          <div class="title">
            <h1>Authors</h1>
          </div>

          <div class="img">
            <img :src="items.imageUrl" alt />
            <div class="name">
              <h3>{{ items.userName }}</h3>
            </div>
            <button type="button" class="btn btn-outline-primary mt-1 mb-1">{{ items.url }}</button>
          </div>

          <div class="paragrph">
            <p class="text">
              {{ items.bio }}
            </p>
          </div>

 <!--  the all author posts-->

          <div class="authorposts">
           <h2 class="head2">
             Also from this author
           </h2>
                <div
                  class="col mb-5"
                  v-for="Article in items.Articles"
                  :key="Article.index"
                >
                  <router-link
                    v-bind:to="{
                      name: 'singlearticle',
                      params: { id: Article.id },
                    }"
                  >
                    <h3 class="title">{{ Article.title }}</h3></router-link
                  >
                  <h5 class="author mb-2">
                    <i>{{ Article.createdAt }}</i>
                  </h5>
                  <p class="paragraph">{{ Article.body }}</p>
                </div>
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
import axios from "axios";
import authorSide from "@/components/authorSide.vue";
export default {
  components: {
    authorSide,
  },
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
      console.log("lll" +this.items);
    });
  },
  
  
};
</script>
<style scoped>
h1 {
  font-family: fantasy;
  margin-top: 2em;
  font-size: medium;
}
p {
  overflow: auto;
  max-height: 30%;
  font-size: small;
}
.img {
  text-align: center;

  margin-top: 1rem;
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
h5{
  font-size: medium;
}
.container {
  max-width: 70%;
}

.title {
 
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  font-size: medium;

}
.paragraph {
  font-family: Times, Times New Roman, serif;
  font-size: medium;
  font-weight: 500;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
}
.head2{
  margin-top: 2em;
  margin-bottom: 1em;
  font-weight:900;
  font-size: large;
}
</style>
