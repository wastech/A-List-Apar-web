<template>
  <div class="main">
    <div class="container">
      <div class="classify">
        <h1 class="title">{{ posts.title }}</h1>
        <p class="paragraph">{{ posts.body }}</p>
        <div class="row">
          <div class="col-sm-9">
            <div class="featuring">
              <topFeaturing v-bind:category="posts.Author.category"/>
            </div>

            <div class="transcript">
              <div class="head">
                <h2>transcript</h2>
              </div>
              <p class="paragraph">{{ posts.transcript }}</p>
            </div>
          </div>
        </div>

        <featuring />

        <pastEvent />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
//import About from "@/views/About";
import featuring from "@/components/featuring.vue";
import topFeaturing from "@/components/topFeaturing.vue";
import pastEvent from "@/components/pastEvent.vue";

export default {
  name: "post",
  components: {
    featuring,
    topFeaturing,
    // About,
    pastEvent,
  },
  data() {
    return {
      posts: {},
      id: this.$route.params.id,
    };
  },

  created() {
    let url = `http://localhost:3000/event/getevent/${this.id}`;
    axios.get(url).then((response) => {
      this.posts = response.data.event;
      console.log(response.data);
    });
  },
};
</script>
<style scoped>
.col-sm-9 {
  border-right: 1px solid #ccc;
}
.row {
  border-bottom: 1px solid #ccc;
}

h1 {
  margin-top: 1rem;
  margin-bottom: 3rem !important;
  font-family: Luminari, fantasy;
  font-style: normal;
  font-size: xxx-large;
  text-align: center;
}
.head h2 {
  color: #ba3925;
  margin-top: 1.5em;
  margin-bottom: 1em;
  font-family: "Franklin ITC", sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  text-align: left;
}
.title {
  margin-top: 2em;
}
small {
  color: blue;
}
.paragraph {
  font-family: Times, Times New Roman, serif;
  font-size: x-large;
  font-weight: 500;
}
</style>
