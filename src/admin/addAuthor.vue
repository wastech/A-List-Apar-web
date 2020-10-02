<template>
  <div class="container">
    <h4>Add a New author</h4>
    <div class="row">
      <div class="col-sm-12">
        <form>
          <div class="form-group required">
            <div class="alert alert-danger" role="alert" v-if="error">
              {{ error }}
            </div>
            <label for="" class="control-label">userName</label>
            <input
              type="text"
              class="form-control shadow"
              aria-describedby="textHelp"
              v-model="userName"
              placeholder=" enter your userName"
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
            <label for="" class="control-label">category</label>
            <input
              type="text"
              class="form-control shadow"
              aria-describedby="textHelp"
              v-model="category"
              placeholder="category"
            />
          </div>

          <div class="form-group">
            <label for="exampleInputFile">image</label>
            <input
              type="text"
              class="form-control shadow"
              placeholder="Image URL...."
              aria-describedby="fileHelp"
              v-model="profileImg"
            />
          </div>

          <div class="form-group">
            <label for="exampleInputFile">social medial link</label>
            <input
              type="text"
              class="form-control shadow"
              placeholder="Image URL...."
              aria-describedby="fileHelp"
              v-model="url"
            />
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
import AuthenticationService from "@/services/AuthenticationService";
export default {
  data() {
    return {
      userName: "",
      password: "",
      cpassword: "",
      bio: "",
       category: "",
      profileImg: "",
      email: "",
      url:'',
      error: "",
    };
  },
  methods: {
    validateInputs() {
      if (
        this.email === "" ||
        this.password === "" ||
        this.cpassword === "" ||
        this.bio === "" ||
        this.category === "" ||
        this.profileImg === "" 

      )
        alert("Please Fill All The Necessary Fields");
      if (this.password !== this.cpassword)
        alert("Please make sure the passwords match");
      this.signUp();
    },
    async signUp() {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          userName: this.userName,
          password: this.password,
          bio: this.bio,
          profileImg: this.profileImg,
          url: this.url,
          category: this.category

        });
        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.user);
        this.$router.push({
           name: 'Home'
        })
      } catch (error) {
        this.error = error.response.data.error;
      }
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
