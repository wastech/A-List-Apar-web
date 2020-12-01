<template>
  <div class="main">
    <div class="container">
      <div class="head">
        <div class="head1">
          <h1>More from A List Apart</h1>
        </div>
        <div class="row">
          <div class="col-sm-8">
            <div class="row">
              <div
                class="col-sm-4 mb-1"
                v-for="item in items .slice(2,)"
                :key="item.id"
              >
              <router-link
                v-bind:to="{ name: 'singlearticle', params: { id: item.id } }"
              >
                <h1 class="title">{{item.title}}</h1>
              </router-link>
                <h4 class="name">
                  <small> by</small>
                  <router-link
                      v-bind:to="{
                        name: 'singleauthor',
                        params: { userName: item.Author.userName },
                      }"
                    >
                  <span>{{item.Author.userName}}</span>
                  </router-link>
                </h4>
                <p class="text">{{item.body}}</p>
               
              </div>
            </div>
          </div>

          <div class="col-sm-4">
            <listApartSide />
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
import axios from 'axios'
import listApartSide from "@/components/listApartSide";
export default {
  components: {
    listApartSide,
  },
  data() {
    return {
      items: [],
    };
  },
  created() {
    axios.get("http://localhost:3000/article/getposts").then((response) => {
      this.items = response.data;
    });
  },
}
</script>
<style scoped>

h1.title {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  font-size: large;
  font-weight: bold;
  font-family: fantasy;
  font-family: Impact, fantasy;
  font-weight: 10;
}
p.text {
  font-style: normal;
  font-family: Verdana, sans-serif;
  font-size: small;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
}
.head1 {
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
  margin-top: 1em;
}
small{
  font-size: small;
  margin-right: 0.4em;
}
p.blw {
  padding: 2em;
  background-color: #ccc;
  font-size: 1.5em;
  text-align: center;
}
span {
  color: blue;
  font-weight: bold;
  font-size: medium;
}
@media only screen and (max-width: 768px) {
 
  .container-fluid {
    max-width: 95%;
  }
  h1.title {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    font-size: large;
    font-weight: bold;
    font-family: Impact, fantasy;
    font-weight: 10;
    text-align: center;
    margin-top: 0em;
  }
  .head1 h1 {
    text-align: center;
    margin-top: 1em;
    font-weight: 400;
    font-family: Impact, fantasy;
    font-size: xx-large;
  }
  p.text {
    font-style: normal;
    font-weight: 200;
    text-align: left;
    font-size: small;
    overflow: hidden;
      font-size: Arial, sans-serif;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    text-align: center;
  }
  p.blw {
    padding: 1em;
    background-color: #ccc;
    font-size: medium;
    font-weight: 15;
    font-family: Impact, fantasy;
    text-align: center;
    font-weight: 100;
  }
}
</style>