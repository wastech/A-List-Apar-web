<template>
  <div class="container">
      <div class="row">
    <div class="col-sm-3" v-for="item in items" :key="item.id">
      <div class="image">
        <img :src="item.image" alt="">

      </div>
      <div class="title">
        {{item.title}}
      </div>
      <div class="paragraph">
        {{item.paragraph}}
      </div>
    </div>
  </div>
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
          image:'https://alistapart.com/wp-content/uploads/2013/01/code.jpg?w=300',
          paragraph:
            "In this excerpt from World Wide Waste, Gerry McGovern examines the environmental impact of bloated websites and unnecessary assets. Digital is physical. It seems cheap and free, but it’s not—it costs the Earth",
        },
        {
            image:'https://alistapart.com/wp-content/uploads/2013/01/content.jpg?w=300',
          paragraph:
            "In this excerpt from World Wide Waste, Gerry McGovern examines the environmental impact of bloated websites and unnecessary assets. Digital is physical. It seems cheap and free, but it’s not—it costs the Earth",
        },
        {
            image:'https://alistapart.com/wp-content/uploads/2013/01/design.jpg?w=300',
          paragraph:
            "In this excerpt from World Wide Waste, Gerry McGovern examines the environmental impact of bloated websites and unnecessary assets. Digital is physical. It seems cheap and free, but it’s not—it costs the Earth",
        },
        {
            image:'https://alistapart.com/wp-content/uploads/2013/01/industry_2.jpg?w=300',

          paragraph:
            "In this excerpt from World Wide Waste, Gerry McGovern examines the environmental impact of bloated websites and unnecessary assets. Digital is physical. It seems cheap and free, but it’s not—it costs the Earth",
        },
      ],
    };
  },
};
</script>