<template>
  <div class="main">
    <h1 class="head">TOPIC S</h1>
    <ul class="list-group list-group-flush mt-4">
      <li class="list-group-item" v-for="item in items" :key="item.id">
        <h2>{{ item.name }}</h2>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        { name: "Ida Aalen" },
        { name: "areIda Aalenmu" },
        { name: "areIda Aalenmu" },
        { name: "areIda Aalenmu" },
        { name: "areIda Aalenmu" },
        { name: "areIda Aalenmu" },
      ],
    };
  },
};
</script>
<style scoped>
ul {
  overflow: hidden;
  overflow-y: scroll;
  height: 40em;
  margin-top: 5em !important;
}
h1 {
  font-family: Luminari, fantasy;
  font-style: normal;
  font-size: xx-large;
}
h2 {
  color: #2455c3;
}
.main {
  margin-top: 5em;
}
</style>
