<template>
  <div class="main">
    <h1 class="head">TOPICS</h1>
    <ul class="list-group list-group-flush mt-4" v-for="item in items" :key="item.id">
      <li class="list-group-item">
        <h3>{{item.head}}</h3>
      </li>
      <li class="list-group-item">{{item.l1}}</li>
      <li class="list-group-item">{{item.l2}}</li>
      <li class="list-group-item">{{item.l3}}</li>
      <li class="list-group-item">{{item.l4}}</li>
      <li class="list-group-item">{{item.l5}}</li>
      <li class="list-group-item">{{item.l6}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          head: "Code",
          l1: "Application Development",
          l2: "Browsers",
          l3: "CSS",
          l4: "HTML",
          l5: "JavaScript",
          l6: " The Server Side",
        },
        {
          head: "Code",
          l1: "Application Development",
          l2: "Browsers",
          l3: "CSS",
          l4: "HTML",
          l5: "JavaScript",
          l6: " The Server Side",
        },
        {
          head: "Code",
          l1: "Application Development",
          l2: "Browsers",
          l3: "CSS",
          l4: "HTML",
          l5: "JavaScript",
          l6: " The Server Side",
        },
      ],
    };
  },
};
</script>
<style scoped>
h1 {
  margin-top: 1rem;
  margin-bottom: 3rem !important;
  font-family: Luminari, fantasy;
  font-style: normal;
  font-size: xx-large;
}
</style>