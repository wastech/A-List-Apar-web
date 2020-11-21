<template>
  <div class="container">
    <h4>Add a New BlogPost</h4>
    <div class="row">
      <div class="col-sm-12">
        <form>
          <!--   <div v-if="!isLoggedIn">
            <h3>You have to Login or SignUp first to post!</h3>
          </div>-->
          <div class="alert alert-success" role="alert" v-if="success">
  <h4 class="alert-heading"></h4>
  <p>the data has been successfuly sent to database</p>
  <hr>
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
              >imageUrl</label
            >
            
            <input
              type="text"
              class="form-control shadow"
              placeholder="imageUrl ..."
              v-model="imageUrl"
            />
          </div>

             <div class="form-group">
                <label for="tags">Tags</label>
                <input type="text" class="form-control" id="tags" placeholder="Tags (separated by comma)" v-model="tags">
            </div>

          <div class="form-group">
            <textarea
              class="form-control shadow"
              id="exampleFormControlTextarea1"
              placeholder="your text...."
              rows="8"
              v-model="body"
            ></textarea>
          </div>
          <button
            type="button"
            class="btn btn-primary btn-lg btn-block mt-3"
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
    //  isError: false,
      imageUrl:'',
      tags:[],
      success: false
    };
  },

  methods: {
    validateInputs() {
      if (this.title === "" || this.content === "" || this.imageUrl ==="")
        return alert("Please Fill All The Necessary Fields");

           var Tags= this.tags
         Tags=Tags.split(',');
         if(Tags.length>3)
           return alert('Please include only upto 3  tags');

      this.addPost();
    },
    addPost() {
      axios
        .post("/article/addpost", {
          title: this.title,
          body: this.body,
          imageUrl:this.imageUrl,
          tags:this.tags
          
          //  isLoggedIn: false,
        })
        .then((response) => {
          console.log(response);
          this.$router.push("/addpost")
          this.success= true;
        })
        .catch(function(error) { 
        
        //  this.isError= true
        });
      this.title = "";
      this.body = "";
      this.imageUrl = ""
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
  padding: 1.5em;
}
label {
  font-weight: 900;
  font-size: small;
}
</style>
