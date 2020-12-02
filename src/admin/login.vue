  
<template>
  <form>  
    <label>
        <div class="alert alert-danger" role="alert" v-if="error">
Something went wrong with your Signin
</div>
      <p class="label-txt">ENTER YOUR EMAil</p>
      <input type="text" class="input"  v-model="email"/>
      <div class="line-box">
        <div class="line"></div>
      </div>
    </label>
    <label>
      <p class="label-txt">ENTER YOUR PASSWORD</p>
      <input type="password" class="input" v-model="password" />
      <div class="line-box">
        <div class="line"></div>
      </div>
    </label>
    <button type="submit" v-on:click.prevent="validateInputs">submit</button>
  </form>
</template>
<script>
import AuthenticationService from '@/services/AuthenticationService'
import axios from 'axios'
$(document).ready(function() {
  $(".input").focus(function() {
    $(this)
      .parent()
      .find(".label-txt")
      .addClass("label-active");
  });
  $(".input").focusout(function() {
    if ($(this).val() == "") {
      $(this)
        .parent()
        .find(".label-txt")
        .removeClass("label-active");
    }
  });
});
export default {
  data(){
    return{
         email:'',
        password:'',
        error:''
    }
  },  
   methods:{
      validateInputs(){
          if(this.email==='' || this.password==='')
            alert('Please Fill All The Necessary Fields');
         this.login();
      },
     async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        console.log("response" , response)
        this.$store.dispatch('setUser', response.data.userName)
        
        
     //  this.$router.push({
     //  name: 'profile'
     //   })
      } catch (error) {
   
        this.error = true
      }
    }
  },
};
</script>
<style scoped>
form {
  width: 60%;
  margin: 60px auto;
  background: #efefef;
  padding: 60px 120px 80px 120px;
  text-align: center;
  -webkit-box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.1);
}
label {
  display: block;
  position: relative;
  margin: 40px 0px;
}
.label-txt {
  position: absolute;
  top: -1.6em;
  padding: 10px;
  font-family: sans-serif;
  font-size: 0.8em;
  letter-spacing: 1px;
  color: rgb(120, 120, 120);
  transition: ease 0.3s;
}
.input {
  width: 100%;
  padding: 10px;
  background: transparent;
  border: none;
  outline: none;
}
.line-box {
  position: relative;
  width: 100%;
  height: 2px;
  background: #bcbcbc;
}
.line {
  position: absolute;
  width: 0%;
  height: 2px;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  background: #8bc34a;
  transition: ease 0.6s;
}
.input:focus + .line-box .line {
  width: 100%;
}
.label-active {
  top: -3em;
}
button {
  display: inline-block;
  padding: 12px 24px;
  background: rgb(220, 220, 220);
  font-weight: bold;
  color: rgb(120, 120, 120);
  border: none;
  outline: none;
  border-radius: 3px;
  cursor: pointer;
  transition: ease 0.3s;
}
button:hover {
  background: #8bc34a;
  color: #ffffff;
}
</style>