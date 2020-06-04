<template>
  <div class="login-wrapper">
      <div class="bg-img">
        <!-- BACKGROUND IMAGE -->
      <img src="./../assets/login/login.jpg" alt />
    </div>

    <v-container class="login-container">
      <v-row>
        <v-col cols="12" xs="12" sm="12" md="12" lg="12" >
          <!-- START - DISPLAY LOGO AND THE VERSION -->
          <div class="login-logo text-center">
            <span class="logo-wrapper font-weight-regular white--text display-1	">
              ET - SOL <span class="subtitle-1">v5.0</span>
            </span>
          </div>
          <!-- END - DISPLAY LOGO AND THE VERSION -->


          <v-hover v-slot:default="{ hover }"> <!-- HOVER - TO ELAVATE THE CARD ON HOVER FROM 2(DEFAULT) TO 24 -->
          <!-- START - LOGIN CARD -->
            <v-card class="login-card" :elevation="hover ? 24 : 2">
              <div class="login-title pb-1 mb-1">Sign into your account</div>
              <div class="text-center grey--text text--darken-1 login-subtitle mb-5">Welcome back! Log in to your
                account.</div>
                <!-- START - EMAIL -->
              <v-col cols="12" sm="12" class="pa-0"> <!-- START - COL OF 12 WITH PADDING ZERO -->
                <span class="text-label">Email</span>
                <v-text-field label="Email" dense single-line outlined clearable prepend-icon="far fa-envelope">
                </v-text-field>
              </v-col>
              <!-- END - EMAIL -->

              <!-- START - PASSWORD -->
              <v-col cols="12" sm="12" class="pa-0">
                <span class="text-label">Password</span>
                <v-text-field :append-icon="passShow ? 'mdi-eye' : 'mdi-eye-off'" :type="passShow ? 'text' : 'password'"
                  prepend-icon="fas fa-lock" label="Password" value="" class="input-group--focused"
                  @click:append="passShow = !passShow" dense single-line outlined></v-text-field>
              </v-col>
              <!-- END - PASSWORD -->

              <!-- START - INVALID MESSAGE -->
              <v-col cols="12" class="text-center pa-0">
                <p class="invalid-error">Invalid user credentials</p>
              </v-col>
              <!-- END - INVALID MESSAGE -->

              <!-- START - INVALID MESSAGE -->
              <v-col cols="12" class="text-center">
                <v-btn color="primary" @click="login" dark>Login</v-btn>
              </v-col>
              <!-- END - INVALID MESSAGE -->

            </v-card>
            <!-- END - LOGIN CARD -->
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      passShow: false, // INITALIZE SHOW PASSWARD TO FALSE
    }
  },
  methods:{
    login(){
      this.$router.push("/homepage"); //JUST ON CLICK OF A LOGIN BUTTON NAVIGATE TO HOMEPAGE
    }
  }
}
</script>
<style scoped>
/* FONT USED IN THIS PARTICULAR PAGE */
* {
  font-family: "Montserrat", sans-serif;
}

/* BACKGROUND IMAGE FOR THE PAGE */
.bg-img {
  position: fixed;
  height: 100%;
  width: 100%;
}

.bg-img>img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 120vh;
  background-attachment: fixed;
  opacity: 0.65;
  z-index: 1;
  overflow: hidden;
}

.login-wrapper {
  background-image: url('./../assets/login/login.jpg');
  align-items: center;
  height: 100%;
  display: flex;
}

.login-container {
  vertical-align: middle;
  max-width: 500px;
}

.left {
  display: table;
  text-align: center;
  padding: 20px;
  min-height: 100%;
  color: #ffffff;
  background-color: #2f334e;
  width: 100%;
}

.left div {
  display: table-cell;
  width: 100%;
  vertical-align: middle;
  font-size: 1.5rem;
}

.login-card {
  padding: 50px 20px 20px 20px;
}

.login-title {
  text-align: center;
  font-size: 1.5rem;
}

.text-label {
  padding-left: 36px;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.56);
}

.invalid-error {
  color: red;
}

.login-logo {
  text-align: center;
  margin: 0 auto -40px;
  z-index: 1;
  position: relative;
}

.login-logo .logo-wrapper img {
  padding: 6px;
  max-width: 300px;
  max-height: 75px;
  margin: 0 auto;
}

.logo-wrapper {
  display: block;
  min-width: calc(100% - 100px);
  max-width: calc(100% - 100px);
  margin: 0px auto;
  background: #1A76D2;
  border-radius: 10px;
  padding: 12px;
}
</style>
