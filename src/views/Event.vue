<template>
<div>
  <div class="main">
    <div class="container">
      <div class="head">
        <h1 class="title">Events</h1>
        <h3>Conversations that bring our community together</h3>
      </div>
      <h2>past Events</h2>
      <div class="row">
        <div class="col-sm-6" v-for="item in items" :key="item.id">
          <h1 class="title">{{item.title}}</h1>
          <h4 class="author">{{item.author}}</h4>
          <p class="paragraph">{{item.paragraph}}</p>
        </div>
      </div>
    </div>
  </div>
    <About/>
  </div>
</template>

<script>
import About from "../views/About.vue";
export default {
  components: {
    About,
  },
  data() {
    return {
      items: [
        {
          title: "Webwaste",
          author: "aremu",
          paragraph:
            "In this excerpt from World Wide Waste, Gerry McGovern examines the environmental impact of bloated websites and unnecessary assets. Digital is physical. It seems cheap and free, but it’s not—it costs the Earth",
        },
        {
          title: "Webwaste",
          author: "aremu",
          paragraph:
            "In this excerpt from World Wide Waste, Gerry McGovern examines the environmental impact of bloated websites and unnecessary assets. Digital is physical. It seems cheap and free, but it’s not—it costs the Earth",
        },
        {
          title: "Webwaste",
          author: "aremu",
          paragraph:
            "In this excerpt from World Wide Waste, Gerry McGovern examines the environmental impact of bloated websites and unnecessary assets. Digital is physical. It seems cheap and free, but it’s not—it costs the Earth",
        },
        {
          title: "Webwaste",
          author: "aremu",
          paragraph:
            "In this excerpt from World Wide Waste, Gerry McGovern examines the environmental impact of bloated websites and unnecessary assets. Digital is physical. It seems cheap and free, but it’s not—it costs the Earth",
        },
      ],
    };
  },
};
</script>
<style scoped>
.head {
  text-align: center;

}
.main{
 border-top: 2px solid #ccc;;
  border-bottom: 2px solid #ccc;
}
h2 {
  text-align: center;
}

</style>