<template>
  <div>
    <v-app-bar app clipped-left light color="white" elevation='1'>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <div class="mx-3 d-flex">
        <img src="./../../assets/enermanLogo/enerman.svg" alt="" srcset="" height="56">
      </div>
      <v-toolbar-title> ET-SOL <span class="caption">v5.0.1</span> <span class="d-none">SCADA 5.0x</span></v-toolbar-title>
      <v-spacer></v-spacer>
      <span class="customer-logo">
        <img src="//logo.clearbit.com/nimble.com" alt="" srcset="" height="48">
      </span>
      <div class="mr-3">
        <Notification/>
      </div>
      <v-btn text @click="logout">Logout</v-btn>
    </v-app-bar>
  </div>
</template>
<script>
import Notification from '../container/Notification'
export default {
  components: {
    Notification
  },
  methods:{
    navBarRoute(routelink){
      this.$router.push(routelink);
    },
    logout(){
      this.$router.push("/");
    }
  },
}
</script>