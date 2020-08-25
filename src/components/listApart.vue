<template>
  <div class="main">
    <div class="container-fluid">
      <div class="head">
        <div class="head1">
          <h1>More from A List Apart</h1>
        </div>
      <div class="row">
        <div class="col-sm-8">
          <div class="row">
            <div class="col-sm-12 col-12 col-md-6 col-lg-4 mb-5" v-for="item in items" :key="item.id">
              <h1 class="title">{{item.title}}</h1>
              <h3 class="name">
                by <span>{{item.author}}</span>
              </h3>
              <p class="text">{{item.text}}</p>
            </div>
          </div>
        </div>

        <div class="col-sm-4">
          <listApartSide/>
        </div>
      </div>
      <div class="paragraph">
        <p
          class="blw"
        >A List Apart explores the design, development, and meaning of web content, with a special focus on web standards and best practices. Explore our articles or find out more about us.</p>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import listApartSide from '@/components/listApartSide'
export default {
  components: {
listApartSide
  },
  data() {
    return {
      items: [
        {
          date: "34 jan 2019",
          title: "Mr. Roboto: Connecting with Technology",
          author: "Gerry McGovern",
          text:
            " Companies often tout their “culture” as a reason to yoshould consider working there, but often what they pass off as culture amounts to little more than a foosball table and free snacks. In this excerpt from CreativeCulture, Justin Dauer draws direct connections betweenan organizations’ true culture and the design work that it does.",
        },
        {
          date: "34 jan 201",
          title: "Color Craft & Counterpoint: A Designer’s Life with Color Vision Deficiency",
          author: "Justin Dauer",
          text:
            " Companies often tout their “culture” as a reason to yoshould consider working there, but often what they pass off as culture amounts to little more than a foosball table and free snacks. In this excerpt from CreativeCulture, Justin Dauer draws direct connections betweenan organizations’ true culture and the design work that it does.",
        },
        {
          date: "34 jan 201",
          title: "Building the Woke Web: Web Accessibility, Inclusion & Social Justice",
          author: "Justin Dauer",
          text:
            " Companies often tout their “culture” as a reason to yoshould consider working there, but often what they pass off as culture amounts to little more than a foosball table and free snacks. In this excerpt from CreativeCulture, Justin Dauer draws direct connections betweenan organizations’ true culture and the design work that it does.",
        },
         {
          date: "34 jan 201",
          title: "Building the Woke Web: Web Accessibility, Inclusion & Social Justice",
          author: "Justin Dauer",
          text:
            " Companies often tout their “culture” as a reason to yoshould consider working there, but often what they pass off as culture amounts to little more than a foosball table and free snacks. In this excerpt from CreativeCulture, Justin Dauer draws direct connections betweenan organizations’ true culture and the design work that it does.",
        },
         {
          date: "34 jan 201",
          title: "Building the Woke Web: Web Accessibility, Inclusion & Social Justice",
          author: "Justin Dauer",
          text:
            " Companies often tout their “culture” as a reason to yoshould consider working there, but often what they pass off as culture amounts to little more than a foosball table and free snacks. In this excerpt from CreativeCulture, Justin Dauer draws direct connections betweenan organizations’ true culture and the design work that it does.",
        },
         {
          date: "34 jan 201",
          title: "Building the Woke Web: Web Accessibility, Inclusion & Social Justice",
          author: "Justin Dauer",
          text:
            " Companies often tout their “culture” as a reason to yoshould consider working there, but often what they pass off as culture amounts to little more than a foosball table and free snacks. In this excerpt from CreativeCulture, Justin Dauer draws direct connections betweenan organizations’ true culture and the design work that it does.",
        },
         {
          date: "34 jan 201",
          title: "Building the Woke Web: Web Accessibility, Inclusion & Social Justice",
          author: "Justin Dauer",
          text:
            " Companies often tout their “culture” as a reason to yoshould consider working there, but often what they pass off as culture amounts to little more than a foosball table and free snacks. In this excerpt from CreativeCulture, Justin Dauer draws direct connections betweenan organizations’ true culture and the design work that it does.",
        },
         {
          date: "34 jan 201",
          title: "Building the Woke Web: Web Accessibility, Inclusion & Social Justice",
          author: "Justin Dauer",
          text:
            " Companies often tout their “culture” as a reason to yoshould consider working there, but often what they pass off as culture amounts to little more than a foosball table and free snacks. In this excerpt from CreativeCulture, Justin Dauer draws direct connections betweenan organizations’ true culture and the design work that it does.",
        },
         {
          date: "34 jan 201",
          title: "Building the Woke Web: Web Accessibility, Inclusion & Social Justice",
          author: "Justin Dauer",
          text:
            " Companies often tout their “culture” as a reason to yoshould consider working there, but often what they pass off as culture amounts to little more than a foosball table and free snacks. In this excerpt from CreativeCulture, Justin Dauer draws direct connections betweenan organizations’ true culture and the design work that it does.",
        },
         {
          date: "34 jan 201",
          title: "Building the Woke Web: Web Accessibility, Inclusion & Social Justice",
          author: "Justin Dauer",
          text:
            " Companies often tout their “culture” as a reason to yoshould consider working there, but often what they pass off as culture amounts to little more than a foosball table and free snacks. In this excerpt from CreativeCulture, Justin Dauer draws direct connections betweenan organizations’ true culture and the design work that it does.",
        },
         {
          date: "34 jan 201",
          title: "Building the Woke Web: Web Accessibility, Inclusion & Social Justice",
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
.container-fluid {
  max-width: 70%;
}
h1.title{
   overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  font-size: xx-large;
  font-weight: bold;
  font-family: fantasy;
  font-weight: 10;
}
p.text{
  font-style: normal;
  font-weight: 200;
  font-family: Verdana, sans-serif;
  font-size: x-large;
   overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
}
.head1{
  text-align: center;
  margin-top: 2em;
  margin-bottom: 2em;
  font-family: Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif;
  font-size: 1em;
}
.main {
  border-top: 3px solid #ccc;
}
.paragraph {
  margin-top: 2em;
}
p.blw {
  padding: 2em;
  background-color: #ccc;
  font-size: 1.5em;
  text-align: center;
}
span{
  color: blue;
font-weight: bold;
font-size: large;
}
</style>