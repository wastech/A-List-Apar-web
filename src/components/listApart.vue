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
              <div
                class="col-sm-12 col-12 col-md-6 col-lg-4 mb-5"
                v-for="item in items.reverse()"
                :key="item.id"
              >
              <router-link
                v-bind:to="{ name: 'singlearticle', params: { id: item.id } }"
              >
                <h1 class="title">{{item.title}}</h1>
              </router-link>
                <h3 class="name">
                  by
                  <router-link
                      v-bind:to="{
                        name: 'singleauthor',
                        params: { userName: item.Author.userName },
                      }"
                    >
                  <span>{{item.Author.userName}}</span>
                  </router-link>
                </h3>
                <p class="text">{{item.body}}</p>
                <p >{{item.Author.category}}</p>
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
    axios.get("article/getposts").then((response) => {
      this.items = response.data;
      console.log(this.items)
    });
  },
}
</script>
<style scoped>
.container-fluid {
  max-width: 70%;
}
h1.title {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  font-size: xx-large;
  font-weight: bold;
  font-family: fantasy;
  font-family: Impact, fantasy;
  font-weight: 10;
}
p.text {
  font-style: normal;
  font-weight: 200;
  font-family: Verdana, sans-serif;
  font-size: x-large;
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
  margin-top: 2em;
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
  font-size: large;
}
@media only screen and (max-width: 768px) {
  .head1 {
    margin-top: 2em;
    margin-bottom: 2em;
    font-family: Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif;
    font-size: 1em;
  }
  .container-fluid {
    max-width: 95%;
  }
  h1.title {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    font-size: x-large;
    font-weight: bold;
    font-family: Impact, fantasy;
    font-weight: 10;
    text-align: center;
  }
  .head1 {
    text-align: center;
    margin-top: 2em;
    font-weight: 15;
    margin-bottom: 2em;
    font-family: Impact, fantasy;
    font-size: 1em;
  }
  p.text {
    font-style: normal;
    font-weight: 200;
    font-family: Verdana, sans-serif;
    font-size: large;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    text-align: center;
  }
  p.blw {
    padding: 1em;
    background-color: #ccc;
    font-size: bold;
    font-weight: 15;
    font-family: Impact, fantasy;
    text-align: center;
    font-weight: 100;
  }
}
</style>