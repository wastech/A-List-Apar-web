<template>
  <div class="container">
    <h4>Add a New author</h4>
    <div class="row">
      <div class="col-sm-12">
        <form>
          <div class="form-group required">
            <label for="" class="control-label">userName</label>
            <input
              type="text"
              class="form-control shadow"
              aria-describedby="textHelp"
              v-model="userName"
              placeholder="userName"
            />
          </div>

          <div class="form-group required">
            <label for="" class="control-label">email</label>
            <input
              type="email"
              class="form-control shadow"
              aria-describedby="textHelp"
              v-model="email"
              placeholder="author email"
            />
          </div>

          <div class="form-group required">
            <label for="" class="control-label">password</label>
            <input
              type="password"
              class="form-control shadow"
              aria-describedby="textHelp"
              v-model="password"
              placeholder="password"
            />
          </div>

          <div class="form-group required">
            <label for="" class="control-label">Confirm password</label>
            <input
              type="password"
              class="form-control shadow"
              aria-describedby="textHelp"
              v-model="cpassword"
              placeholder=" confirmpassword"
            />
          </div>

          <div class="form-group required">
            <label for="" class="control-label">name</label>
            <input
              type="text"
              class="form-control shadow"
              aria-describedby="textHelp"
              v-model="name"
              placeholder="author name"
            />
          </div>

       <!--   <div class="form-group required">
            <label for="" class="control-label">website Link</label>
            <input
              type="text"
              class="form-control shadow"
              aria-describedby="textHelp"
              v-model="website"
              placeholder="website Link"
            />
          </div>-->

          <div class="form-group">
            <label for="exampleInputFile">image</label>
            <input
              type="text"
              class="form-control shadow"
              placeholder="Image URL...."
              id="exampleInputFile"
              aria-describedby="fileHelp"
              v-model="profileImg"
            />
            <!--<small id="fileHelp" class="form-text text-muted">This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps to a new line.</small>-->
          </div>
          <div class="form-group">
            <label for="" class="control-label">bio</label>
            <textarea
              class="form-control shadow"
              id="exampleFormControlTextarea1"
              v-model="bio"
              placeholder="your text...."
              rows="10"
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
      name: "",
      userName: "",
      password: "",
      cpassword: "",
      bio: "",
    //  website: "",
      profileImg: "",
      email: "",
    };
  },
  methods: {
    validateInputs() {
      if (
        this.name === "" ||
        this.email === "" ||
        this.password === "" ||
        this.cpassword === "" ||
        this.bio === ""
      )
        alert("Please Fill All The Necessary Fields");
      if (this.password !== this.cpassword)
        alert("Please make sure the passwords match");
      this.signUp();
    },
    signUp() {
      axios
        .post("http://localhost:3000/author/addauthor", {
          name: this.name,
          userName: this.userName,
          profileImg: this.profileImg,
          bio: this.bio,
         // website: this.website,
          password: this.password,
          email: this.email,
        })
        .then((res) => {
         
          console.log(res.data);
          this.$router.push("/posts");
        })
        .catch(function(error) {
          console.log(error);
        });
    },
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
