<template>
  <div class="container">
    <h4>Add a New BlogPost</h4>
    <div class="row">
      <div class="col-sm-12">
        <form>
          <div v-if="!isLoggedIn">
            <h3>You have to Login or SignUp first to post!</h3>
          </div>
          <div class="form-group required">
            <label for="" class="control-label">userName</label>
            <input
              type="text"
              class="form-control shadow"
              aria-describedby="textHelp"
              v-model="userName"
              placeholder="name"
            />
          </div>
          <div class="form-group required">
            <label for="exampleInputPassword1" class="control-label"
              >Title</label
            >
            <input
              type="text"
              class="form-control shadow"
              placeholder="title goes here"
              v-model="title"
            />
          </div>

       <!--   <div class="form-group required mt-2">
            <label for="exampleInputPassword1" class="control-label"
              >category</label
            >
            <input
              type="text"
              class="form-control shadow"
              placeholder="category of the post"
              v-model="category"
            />
          </div>-->
          <div class="form-group required mt-2">
            <label for="exampleInputPassword1" class="control-label"
              >Code</label
            >
            <input
              type="text"
              class="form-control shadow"
              placeholder="Code..."
              v-model="code"
            />
          </div>
          <div class="form-group required mt-2">
            <label for="exampleInputPassword1" class="control-label"
              >Content</label
            >
            <input
              type="text"
              class="form-control shadow"
              placeholder="Content ...."
              v-model="content"
            />
          </div>
          <div class="form-group required mt-2">
            <label for="exampleInputPassword1" class="control-label"
              >Design</label
            >
            <input
              type="text"
              class="form-control shadow"
              placeholder="Design..."
              v-model="design"
            />
          </div>
          <!-- <div class="form-group required mt-2">
            <label for="exampleInputPassword1" class="control-label"
              >Industry & Business</label
            >
            <input
              type="text"
              class="form-control shadow"
              placeholder="Industry & Business...."
              v-model="Industry"
            />
          </div>-->
          ory of the post
          <div class="form-group required mt-2">
            <label for="exampleInputPassword1" class="control-label"
              >Process</label
            >
            <input
              type="text"
              class="form-control shadow"
              placeholder="Process...."
              v-model="process"
            />
          </div>

          <div class="form-group">
            <label for="exampleInputFile">imageUrl</label>
            <input
              type="text"
              class="form-control shadow"
              placeholder="Image URL...."
              id="exampleInputFile"
              aria-describedby="fileHelp"
              v-model="imageUrl"
            />
            <!--<small id="fileHelp" class="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>-->
          </div>
          <div class="form-group">
            <textarea
              class="form-control shadow"
              id="exampleFormControlTextarea1"
              placeholder="your text...."
              rows="10"
              v-model="body"
            ></textarea>
          </div>
          <button
            type="button"
            class="btn btn-primary btn-lg btn-block mt-5 "
            v-on:click.prevent="validateInputs"
          >
            submit
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      title: "",
      imageUrl: "",
      body: "",
      code: "",
      content: "",
      design: "",
      process: "",
      userName: "",
    };
  },

  methods: {
    validateInputs() {
      if (this.title === "" || this.content === "")
        return alert("Please Fill All The Necessary Fields");
      this.addPost();
    },
    addPost() {
     
      axios
        .post("http://localhost:3000/article/addpost", {
          title: this.title,
          imageUrl: this.imageUrl,
          body: this.body,
          code: this.code,
          userName: this.userName,
          content: this.content,
          design: this.design,
          process: this.process,
          isLoggedIn: false,
        })
        .then((res) => {
          console.log(res);
          // this.$router.push("/posts")
        })
        .catch(function(error) {
          console.log(error);
        });
      this.title = "";
      this.content = "";
      this.imageUrl = "";
      this.userName = "";
    },
  },
  created() {
    const data = JSON.parse(localStorage.getItem("userData"));
    if (data.author.userName) {
      this.userName = data.author.userName;
      this.isLoggedIn = true;
    }
  },
};
</script>
<style scoped>
.form-group.required .control-label:after {
  content: "*";
  color: red;
}
h4 {
  text-align: center;
}
.form-control {
  padding: 2em;
}
label {
  font-weight: 900;
  font-size: large;
}
</style>
