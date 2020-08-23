<template>
  <div class="main">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a class="navbar-brand" href="#">Home</a>
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item ">
        <a class="nav-link" href="#">Article <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Event</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="#" tabindex="-1" aria-disabled="true">Write us</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>

  </div>
</template>
<style scoped>
a.navbar-brand{
  font-size: 3em;
  font-family: Luminari, fantasy;
  font-style: normal;
  font-weight: 200;
  font-stretch: ultra-condensed	;
  font-variant: small-caps;	
}
.bg-light {
    background-color: #ffffff!important;
    opacity: 0.6;
}
a.nav-link{
   font-size: 2em;
   color: black !important;
   font-variant: small-caps	;
   font-family: Luminari, fantasy;
   font-style: normal;
   font-stretch: ultra-condensed	;
   font-weight: 200;
}
</style>