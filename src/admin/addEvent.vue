<template>
  <div class="container">
    <h4>Add a New Event</h4>
    <div class="row">
      <div class="col-sm-12">
        <form>
          <!--   <div v-if="!isLoggedIn">
            <h3>You have to Login or SignUp first to post!</h3>
          </div>-->
          <div class="alert alert-success" role="alert" v-if="success">
            <h4 class="alert-heading"></h4>
            <p>the data has been successfuly sent to database</p>
            <hr />
            <p class="mb-0">have an awesome day Ahead!</p>
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

          <div class="form-group required">
            <label for="exampleInputPassword1" class="control-label"
              >transcript</label
            >
            <input
              type="text"
              class="form-control shadow"
              placeholder="Transcript goes here"
              v-model="transcript"
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
      imageUrl: "",
      body: "",
      transcript: "",
      success: false,
    };
  },

  methods: {
    validateInputs() {
      if (this.title === "" || this.body === "")
        return alert("Please Fill All The Necessary Fields");
      this.addPost();
    },
    addPost() {
      axios
        .post("/event/addevent", {
          title: this.title,
          imageUrl: this.imageUrl,
          body: this.body,
          transcript: this.transcript,
          //  isLoggedIn: false,
        })
        .then((res) => {
          console.log(res);
          // this.$router.push("/posts")
          this.success = true;
        })
        .catch(function(error) {
          console.log(error);
        });
      this.title = "";
      this.body = "";
      this.imageUrl = "";
      this.transcript = "";
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
