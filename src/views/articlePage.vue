<template>
  <div class="main">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-8">
          <div class="classify">
            <h1 class="head">Articles</h1>

            <div class="col mb-5" v-for="post in posts" :key="post.id">
              <router-link
                v-bind:to="{ name: 'singlearticle', params: { id: post.id } }"
              >
                <h3 class="title">{{ post.title }}</h3></router-link
              >
              <h5 class="author mb-2">
                <span
                  >by
                  <bold
                    ><router-link
                      v-bind:to="{
                        name: 'singleauthor',
                        params: { userName: post.Author.userName },
                      }"
                    >
                      {{ post.Author.userName }}
                    </router-link></bold
                  > </span
                ><i>{{ post.createdAt }}</i>
              </h5>
              <p class="paragraph">{{ post.body }}</p>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <articleSide />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import articleSide from "@/components/articleSide";
export default {
  name: "articlepage",
  components: {
    articleSide,
  },
  data() {
    return {
      posts: [],
    };
  },

  created() {
    axios.get("http://localhost:3000/article/getposts").then((response) => {
      this.posts = response.data;
    });
  },
};
</script>
<style scoped>
.container-fluid {
  max-width: 65%;
  width: 100%;
}
.col-sm-8 {
  border-right: 1px solid #ccc;
}
.main {
  border-top: 1px solid #ccc;
  margin-top: 5em;
}
h1 {
  margin-top: 1rem;
  margin-bottom: 1rem !important;
  font-family: Luminari, fantasy;
  font-style: normal;
  font-size: large;
}
.title {
  color: #2455c3;
  overflow: hidden;
  display: -webkit-box;
  font-size: medium;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
bold {
  color: #2455c3;
  margin-right: 0.5em;
  margin-left: 0.5em;
}
small {
  color: #2455c3;
}
span{
  font-size: small;
}
i{
  font-size: small;
}
.paragraph {
  font-family: Times, Times New Roman, serif;
  font-size: small;
  font-weight: 500;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}
</style>
