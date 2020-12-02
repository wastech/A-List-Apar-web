<template>
  <div class="row">
    <div class="col-sm-3  ">
      <div class="image">
        <img :src="item.user.imageUrl" alt="" />
      </div>
      <div class="name">
        <router-link
          v-bind:to="{
            name: 'singleauthor',
            params: { userName: item.user.userName },
          }"
        >
          <h3 class="username">{{ item.user.userName }}</h3>
        </router-link>

        <p class="paragraph">{{ item.user.bio }}</p>
      </div>
    </div>
    <div class="col-sm-7">
      <profileSide />
    </div>
  </div>
</template>
<script>
import profileSide from "@/components/profileSide";
import axios from "axios";

export default {
  components: {
    profileSide,
  },
  data() {
    return {
      item: {},
    };
  },

  methods: {},

  created() {
    let url = "author/api/users/me";
    axios.get(url).then((response) => {
      this.item = response.data;
    });
  },
};
</script>

<style scoped>
.col-sm-3 {
  background-color: #ccc;
  border-right: 5px solid green;
  margin-top: 3em;
}
.row {
  margin-top: 3em;
}
p.paragraph {
  font-size: small;
  text-align: center;
  margin: 0 auto;
}
img {
  width: 100%;
  max-width: 40%;
  border-radius: 50%;
  margin-top: 2em;
  height: 20vh;

  object-fit: cover;
}
.name {
  text-align: center;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
  max-width: 90%;
  margin: 0 auto;
  font-size: small;
}
.image {
  text-align: center;
}
</style>
