<template>
  <div class="sample">

    <!-- <div class="sample">
      <v-container>
      <v-row>




        <v-col cols="4">
          <v-text-field 
            label="Username"
            color="red--text" dark
          ></v-text-field>
          <v-text-field
            label="Password"
          ></v-text-field>
          <div class="text-center">
            <v-btn small @click="login">Login</v-btn>   
          </div>

        </v-col>








        
      </v-row>
    </v-container>
    </div> -->





    <div class="login-page">
  <div class="form">
    <form class="register-form">
      <div>
        <span>afhui</span>
        <input type="text" placeholder="name"/>
      </div>
      <input type="password" placeholder="password"/>
      <input type="text" placeholder="email address"/>
      <button>create</button>
      <p class="message">Already registered? <a href="#">Sign In</a></p>
    </form>
    <form class="login-form">
      <div class="login-text title">Login</div>
      <input type="text" placeholder="username"/>
      <input type="password" placeholder="password"/>
      
      <div class="text-center">
            <v-btn block color="#4CAF50" class="white--text" @click="login">Login</v-btn>   
          </div>

      <p class="message">Forgot Password? <a href="#">Click here</a></p>
    </form>
  </div>
</div>

    




    
  </div>
</template>
<script>
// import
export default {
  methods:{
    login(){
      this.$router.push("/homepage");
    }
  }
}
</script>
<style scoped>
.sample {
  width: 100%;
  height: 100vh;
  background-color: #EFF0F2;
}

.login-text {
  padding: 0 0 24px 0;
}








/* @import url(https://fonts.googleapis.com/css?family=Roboto:300); */

.login-page {
  width: 500px;
  padding: 8% 0 0;
  margin: auto;
}
.form {
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  max-width: 500px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.form input {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
/* .form button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #4CAF50;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
} */
.form button:hover,.form button:active,.form button:focus {
  background: #43A047;
}
.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}
.form .message a {
  color: #4CAF50;
  text-decoration: none;
}
.form .register-form {
  display: none;
}
.container {
  position: relative;
  z-index: 1;
  max-width: 300px;
  margin: 0 auto;
}
.container:before, .container:after {
  content: "";
  display: block;
  clear: both;
}
.container .info {
  margin: 50px auto;
  text-align: center;
}
.container .info h1 {
  margin: 0 0 15px;
  padding: 0;
  font-size: 36px;
  font-weight: 300;
  color: #1a1a1a;
}
.container .info span {
  color: #4d4d4d;
  font-size: 12px;
}
.container .info span a {
  color: #000000;
  text-decoration: none;
}
.container .info span .fa {
  color: #EF3B3A;
}
body {
  background: #76b852; /* fallback for old browsers */
  background: -webkit-linear-gradient(right, #76b852, #8DC26F);
  background: -moz-linear-gradient(right, #76b852, #8DC26F);
  background: -o-linear-gradient(right, #76b852, #8DC26F);
  background: linear-gradient(to left, #76b852, #8DC26F);
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;      
}

</style>