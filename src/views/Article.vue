<template>
  <div class="main">
    <div class="container">
        <div class="row">
    <div class="col-sm-8">
     <div class="classify">
          <h1 class="head">hello</h1>
          <div class="col" v-for="item in items" :key="item.id">
            <h1 class="title">{{item.title}}</h1>
            <h4 class="author">{{item.author}}</h4>
            <p class="paragraph">{{item.paragraph}}</p>
          </div>

        </div>
    </div>
    <div class="col-sm">
      One of three columns
    </div>
   
  </div>
    </div>
  </div>
</template>

<script>
export default {
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
.classify {
  border-right: 3px solid #ccc;
}
.main {
  border-top: 3px solid #ccc;
}
</style>