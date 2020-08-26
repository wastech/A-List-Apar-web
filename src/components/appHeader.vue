<template>
  <div class="main">
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a class="nav-link" href="/">logo</a>

        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="/article">
              ARTICLES
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/event">EVENT</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/topics">TOPICS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/topics">WRITE FOR US</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  </div>
</template>
<style scoped>
.bg-light {
  background-color: #ffffff !important;
  opacity: 0.9;
}
a.nav-link {
  font-size: 2em;
  color: black !important;
  font-variant: small-caps;
  font-family: Luminari, fantasy;
  font-style: normal;
  font-stretch: ultra-condensed;
  font-weight: 200;
}
</style>
