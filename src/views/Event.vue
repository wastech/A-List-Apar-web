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
          <h1 class="title1">{{item.title}}</h1>
          <h4 class="date">{{item.date}}</h4>
          <h5 class="paragraph">{{item.paragraph}}</h5>
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
          title: "Web Typography & Layout: Past, Present, and Future",
          date: "November 04, 2015",
          paragraph:
            "Front-end dev is changing quickly, and plenty of readers are asking: what do we need to know now? During this event on November 4, an expert panel ranging from designers who code to engineers working across the development stack explored the skill sets, career paths, and technologies that make up this diverse field.",
        },
        {
          title: "Ask Dr. Web—Live",
          date: "November 04, 2015",
          paragraph:
            "In this excerpt from World Wide Waste, Gerry McGovern examines the environmental impact of bloated websites and unnecessary assets. Digital is physical. It seems cheap and free, but it’s not—it costs the Earth",
        },
        {
          title: "The State of Front-End Dev",
          date: "November 04, 2015",
          paragraph:
            "In this excerpt from World Wide Waste, Gerry McGovern examines the environmental impact of bloated websites and unnecessary assets. Digital is physical. It seems cheap and free, but it’s not—it costs the Earth",
        },
        {
          title: "Love Your CMS",
          date: "November 04, 2015",
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
  border-bottom: 1px solid #ccc ;

}
h4{
  font-family: American Typewriter, serif;
  margin-bottom: 2em;
}
.title{
  font-family: Impact, fantasy;
}
.main{
  border-bottom: 2px solid #ccc;
}
h2 {
  text-align: center;
  font-family: Times, Times New Roman, serif;
  margin-top: 1em;
  margin-bottom: 2em;
}
.title1{
  color: #2455c3;
  text-align: center;
}
.date{
  text-align: center;
  margin-top: 1;
  margin-bottom: 2;
}
.paragraph{
  font-size: x-large;
  font-family: Georgia,Times,Times New Roman,serif;
  font-size: 1.4rem;
    line-height: 1.7;
 
}
.col-sm-6{
 margin-bottom: 2em;
}
</style>