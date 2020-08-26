<template>
  <div class="container">
    <div class="title mb-5">
      <h1>DASHBOARD</h1>
    </div>
    <div class="row">
      <div class="col-sm-4">
        <div class="card border-success mb-3" style="max-width: 100%;">
          <div class="card-header bg-transparent border-success text-center">
                <a href="/posts">        posts </a> </div>
          <div class="card-body text-success text-center">
             <a href="/addpost"> 
            <svg
              width="5em"
              height="5em"
              viewBox="0 0 16 16"
              class="bi bi-plus-circle-fill"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4a.5.5 0 0 0-1 0v3.5H4a.5.5 0 0 0 0 1h3.5V12a.5.5 0 0 0 1 0V8.5H12a.5.5 0 0 0 0-1H8.5V4z"
              />
            </svg>
            </a>
          </div>
          <div class="card-footer bg-transparent border-success text-center">  <a href="/"> VIEW POST </a> </div>
        </div>
      </div>

      <div class="col-sm-4">
        <div class="card border-success mb-3" style="max-width: 100%;">
          <div class="card-header bg-transparent border-success text-center">AUTHOR</div>
          <div class="card-body text-success text-center">
            <svg
              width="5em"
              height="5em"
              viewBox="0 0 16 16"
              class="bi bi-plus-circle-fill"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4a.5.5 0 0 0-1 0v3.5H4a.5.5 0 0 0 0 1h3.5V12a.5.5 0 0 0 1 0V8.5H12a.5.5 0 0 0 0-1H8.5V4z"
              />
            </svg>
          </div>
          <div class="card-footer bg-transparent border-success text-center">VIEW AUTHOR</div>
        </div>
      </div>
      
      <div class="col-sm-4">
        <div class="card border-success mb-3" style="max-width: 100%;">
          <div class="card-header bg-transparent border-success text-center">posts</div>
          <div class="card-body text-success text-center">
            <svg
              width="5em"
              height="5em"
              viewBox="0 0 16 16"
              class="bi bi-plus-circle-fill"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4a.5.5 0 0 0-1 0v3.5H4a.5.5 0 0 0 0 1h3.5V12a.5.5 0 0 0 1 0V8.5H12a.5.5 0 0 0 0-1H8.5V4z"
              />
            </svg>
          </div>
          <div class="card-footer bg-transparent border-success text-center">view post</div>
        </div>
      </div>
      
    </div>
  </div>
</template>
<style scoped>
.title h1 {
  text-align: center;
}
</style>