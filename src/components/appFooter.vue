<template>
  <div class="main">
    <div class="container-fluid">
      <div class=" clearfix">
        <div class="right float-left">
          <p class="right float-left">About</p>
          <p class="right float-left">Authors</p>
          <p class="right float-left">Mathead</p>
          <p class="right float-left">Style Head</p>
          <p class="right float-left">Contacts</p>
          <p class="right float-left">Sponsorship</p>
        </div>

        <div class="right float-right">
          <p class="right float-right">Rss </p>
          <p class="right float-right">Twitter</p>
          <p class="right float-right">Github</p>
          <p class="right float-right">Email</p>
          <p class="right float-right">follow:us</p>
        </div>
      </div>

      <div class="container-fluid">

        <div class="row">
          <div class="col-sm-6">
            <div class="card mb-3" style="max-width: 100%;">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img src="https://cdn.pixabay.com/photo/2020/04/25/23/47/father-5093047_1280.jpg" class="card-img" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">A Book Apart</h5>
                    <p
                      class="card-text"
                    >This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text">
                      <small class="text-muted"><a href="#">Shop Now</a></small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="card mb-3" style="100%">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img src="https://cdn.pixabay.com/photo/2020/04/25/23/47/father-5093047_1280.jpg" class="card-img" alt="..." />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">An Event Apart</h5>
                    <p
                      class="card-text"
                    >This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text">
                     <small class="text-muted"><a href="#">Shop Now</a></small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bottom">
          
         <p class="head">
           ISSN 1534-0295 · Copyright © 1998–2020 A List Apart & Our Authors | Proudly powered by WordPress
         </p>

         <h3>Permissions & Copyright Privacy Policy Fonts by Webtyp</h3>
         <h1 class="bottom">Permissions & Copyright Privacy Policy</h1>
        </div>

      </div>
    </div>
  </div>
</template>
<style scoped>
.head{
  margin-top: 3em;
}
.main {
  background-color: #e5e5e5;
}
.container-fluid {
  width: 80%;
}
.right {
  margin: 1em;
  font-size: large;
  font-weight: 900;
}
.clearfix{
  padding: 1.5em;
}
img{
  object-fit: cover;
  height: 100% !important;
}
h1.bottom{
  font-family: Impact, fantasy;
  margin-top: 1em !important;
  font-size: 3em;
}
@media only screen and (max-width: 768px) {
h1.bottom{
  font-family: Impact, fantasy;
  margin-top: 1em !important;
  font-size: 4em;
}
.container-fluid {
  width: 95%;
}
.clearfix{
  padding: 1em;
  text-align: center;
}
.float-right {
    float: left !important;
  
}
} 
</style>