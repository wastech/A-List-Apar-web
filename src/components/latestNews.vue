<template>
  <div class="container-fluid">
    <div class="content" v-for="item in items" :key="item._id">
      <h1>
        <button type="button" class="btn btn-danger">
          <h3>new!</h3>
        </button>
        <small>{{item.date}}</small>
      </h1>
      <h1 class="title">{{item.title}}</h1>
      <h3 class="name">
        by
        <span>{{item.author}}</span>
      </h3>
      <p class="text">{{item.text}}</p>
    </div>
    <hr />
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
      ],
    };
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
}
</style>