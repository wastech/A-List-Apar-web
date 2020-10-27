<template>
  <div class="container">
    <h4>Add a New BlogPost</h4>
    <div class="row">
      <div class="col-sm-12">
        <form>
          <!--   <div v-if="!isLoggedIn">
            <h3>You have to Login or SignUp first to post!</h3>
          </div>-->
          <div class="alert alert-danger" role="alert" v-if="error">
            {{ error }}
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
            class="btn btn-primary btn-lg btn-block mt-5"
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
      body: "",
      error: ""
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
          body: this.body,
          
          //  isLoggedIn: false,
        })
        .then((res) => {
          console.log(res);
          // this.$router.push("/posts")
        })
        .catch(function(error) { 
          this.error = response.data.error;
        });
      this.title = "";
    },
  },
  /*  created() {
    const data = JSON.parse(localStorage.getItem("userData"));
    if (data.author.userName) {
      this.userName = data.author.userName;
      this.isLoggedIn = true;
    }
  },*/
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
