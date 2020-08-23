<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-4" v-for="item in items" :key="item.id">
        <h1 class="title">{{item.title}}</h1>
        <h3 class="name">
          by
          <span>{{item.author}}</span>
        </h3>
        <p class="text">{{item.text}}</p>

        <span>
          <h3>new!</h3>
        </span>
        <small>{{item.date}}</small>
      </div>
    </div>
    <div class="paragraph">
      <p class="blw">A List Apart explores the design, development, and meaning of web content, with a special focus on web standards and best practices. Explore our articles or find out more about us.</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          date: "34 jan 2019",
          title: "Webwaste",
          author: "Gerry McGovern",
          text:
            " Companies often tout their “culture” as a reason to yoshould consider working there, but often what they pass off as culture amounts to little more than a foosball table and free snacks. In this excerpt from CreativeCulture, Justin Dauer draws direct connections betweenan organizations’ true culture and the design work that it does.",
        },
        {
          date: "34 jan 201",
          title: "Connecting the Dots",
          author: "Justin Dauer",
          text:
            " Companies often tout their “culture” as a reason to yoshould consider working there, but often what they pass off as culture amounts to little more than a foosball table and free snacks. In this excerpt from CreativeCulture, Justin Dauer draws direct connections betweenan organizations’ true culture and the design work that it does.",
        },
        {
          date: "34 jan 201",
          title: "Connecting the Dots",
          author: "Justin Dauer",
          text:
            " Companies often tout their “culture” as a reason to yoshould consider working there, but often what they pass off as culture amounts to little more than a foosball table and free snacks. In this excerpt from CreativeCulture, Justin Dauer draws direct connections betweenan organizations’ true culture and the design work that it does.",
        },
      ],
    };
  },
};
</script>
<style scoped>
.paragraph{
  margin-top: 2em;
 background-color: #cccccc;
}
p.blw{
   padding: 6em;
}
</style>