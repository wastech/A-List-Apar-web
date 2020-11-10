<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-2">
        <div class="side">
          <div class="image">
            <img
              src="https://alistapart.com/wp-content/uploads/2013/02/excerptillustration_300.png?w=1920"
              alt
            />
          </div>
          <div class="name" >
            <div class="title">aremu wasiu</div>
          </div>

          <div class="dropdown"  v-for="item in items" :key="item.id">
            <button
              class="btn btn-secondary dropdown-toggle mt-5"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
             
            >{{item.head}}</button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" v-for="item in items" :key="item.id">
              <a class="dropdown-item" href="#">{{item.link}}</a>
              <a class="dropdown-item" href="#">{{item.link1}}</a>
              <a class="dropdown-item" href="#">{{item.link2}}</a>
            </div>
          </div>

        </div>
      </div>
      <div class="col-sm-10">
        <dashBoardSide />
      </div>
    </div>
  </div>
</template>
<script>
import dashBoardSide from "../admin/dashBoardSide";
export default {
  components: {
    dashBoardSide,
  },
  data(){
    return{
      items: [
        {head:'POSTS',link:'ADD  POST', link1:'EDIT  POST', link2:'POSTS'},
         {head:'AUTHORS',link:'ADD  AUTHOR', link1:'EDIT  AUTHOR', link2:'AUTHORS'}
      ]
    }
  }
};
</script>
<style scoped>

.title{
  font-weight: bold;
  font-size: x-large;
  text-align: center;
  margin-top:1em ;
  text-transform:uppercase;
}
</style>

<style scoped>
button{
  padding: 0.5em;
}
img {
  border-radius: 50%;
  width: 50%;
  height: 10em !important;
  margin-top: 2em;
  object-fit: cover;
}
.image {
  text-align: center;
}
.col-sm-2 {
  background-color: #ccc;
  border-right: 10px solid green;
  height: 35em !important;
}
.mt-5, .my-5 {
    margin-top: 1rem!important;
}
</style>