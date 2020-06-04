<template>
  <v-app>
    <router-view></router-view> <!-- ADDED FOR DYNAMIC ROUTING -->
  </v-app>
</template>

<script>
var moment = require('moment');

export default {
  name: 'App',
};
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Rubik:300,300i,400,400i,500,500i,700,700i,900,900i&display=swap');
/* @import url('https://fonts.googleapis.com/css?family=Barlow:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap'); */
@import url('./stylus/style.css'); /* GLOBALLY ACCESSABLE STYLE SHEET */
@import url('./library/animate/animate.css'); /* ADDED ANIMATE LIBRARY AND ACCESSIBLE TO THE WHOLE PROJECT */
* {
  /* font-family: 'Barlow', sans-serif; */
  font-family: 'Rubik', sans-serif;
}
</style>
