<template>
  <div>
    <div class="main">
      <div class="head">
        <h1 class="title">Events</h1>
        <h4>Conversations that bring our community together</h4>
      </div>
      <div class="container">
        <h2>past Events</h2>
        <div class="row">
          <div class="col-sm-6" v-for="item in items" :key="item.id">
            <router-link
              v-bind:to="{ name: 'singleevent', params: { id: item.id } }"
            >
              <h2 class="title1">{{ item.title }}</h2></router-link
            >
            <h4 class="date">{{ item.createdAt }}</h4>
            <h5 class="paragraph">{{ item.body }}</h5>
          </div>
        </div>
      </div>
    </div>
    <About />
  </div>
</template>

<script>
import axios from "axios";
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
    axios.get("/event/getevents").then((response) => {
      this.items = response.data.events;
      console.log(this.items)
    });
  },
};
</script>
<style scoped>
.container {
  max-width: 60%;
  width: 100%;
}
.head {
  text-align: center;
  border-bottom: 1px solid #ccc;
}
h4 {
  font-family: American Typewriter, serif;
  margin-bottom: 2em;
}
h2 {
  text-align: center;
  margin-top: 0.6em;
  margin-bottom: 0.5em;
  font-weight: 900;
}
.title {
  font-family: Impact, fantasy;
}
.main {
  border-bottom: 2px solid #ccc;
}
/*h2 {
  text-align: center;
  font-family: Times, Times New Roman, serif;
  margin-top: 1em;
  margin-bottom: 2em;
}*/
.title1 {
  color: #2455c3;
  text-align: center;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.date {
  text-align: center;
  margin-top: 1;
  margin-bottom: 1em;
}
.paragraph {
  font-size: x-large;
  font-family: Georgia, Times, Times New Roman, serif;
  font-size: 1.4rem;
  line-height: 1.7;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
}
.col-sm-6 {
  margin-bottom: 2em;
}
</style>
