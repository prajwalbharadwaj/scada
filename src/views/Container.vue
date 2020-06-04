<template>
  <div>
    <link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet">
    <!-- START - TOP APP BAR -->
    <v-app-bar app clipped-left light elevation='1' class="nav-color white--text">
      <v-app-bar-nav-icon @click.stop="sampleNav()" class="white--text"></v-app-bar-nav-icon> <!-- HAMBURGER ICON -->

      <!-- IMAGE - ENERMAN -->
      <div class="mx-3 d-flex">
        <img src="./../assets/enermanLogo/enerman.svg" alt="" srcset="" height="56">
      </div>

      <v-toolbar-title class="hidden-xs-only"> ET-SOL <span class="caption">v5.0.1</span> <span class="d-none">SCADA 5.0x</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <CurrentDateTime class="hidden-xs-only" /> <!-- DISPLAY CURRENT DATE AND TIME IN 24 HR FORMAT -->
      <v-spacer></v-spacer>

      <div class="error--text">
        <v-btn small color="primary" @click="changeTheme()"> Mode</v-btn>
        <!-- <v-btn small > mode</v-btn> -->
      </div>



      <v-spacer></v-spacer>
      <!-- CUSTOMER LOGO -->
      <span class="customer-logo hidden-xs-only mx-3">
        <!-- <img src="//logo.clearbit.com/nimble.com" alt="" srcset="" height="48"> -->
        <img src="https://dummyimage.com/600x400/1A76D2/fff" alt="" srcset="" height="48">
      </span>
      <!-- NOTIFICATION ICONS AND DETAILS -->
      <div class="mr-5">
        <Notification />
      </div>
      
      <div>
        <v-btn text class="hidden-sm-and-down white--text" @click="logout">Logout</v-btn>
        <v-btn icon tile large class="hidden-md-and-up white--text" @click="logout"><i class="fas fa-lg fa-sign-out-alt"></i></v-btn>
      </div>

    </v-app-bar>
    <!-- END - TOP APP BAR -->

    <!-- START - NAVIGATION DRAWER -->
    <v-navigation-drawer class="left-nav" v-model="drawer" width="256" :mini-variant.sync="mini" app :expand-on-hover="expandNavBar"
      clipped dense>
      <v-list nav dense rounded>
        <v-list-item-group v-model="item" color="primary" mandatory>
          <v-list-item v-for="(item, i) in items" :key="i" @click="navBarRoute(item.route)">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <!-- END - NAVIGATION DRAWER -->

    <PageLoader /> <!-- PAGE LOADER -->

    <router-view v-if="this.$vuetify.breakpoint.xs" class="main-layout" :class="drawer ? 'mar2' :'mar2'"></router-view> <!-- DYNAMIC ROUTING -->
    <router-view v-else class="main-layout" :class="drawer ? 'mar1' :'mar2'"></router-view> <!-- DYNAMIC ROUTING -->
    <Footer /> <!-- PAGE FOOTER -->
  </div>
</template>
<script>
import PageLoader from '../components/utility/loading/PageLoader'
import Footer from '../components/container/Footer'
import CurrentDateTime from '../components/utility/CurrentDateTime'
import Notification from '../components/container/Notification'
export default {
  components:{
    Footer,
    Notification,
    CurrentDateTime,
    PageLoader
  },
  data: () => ({
    drawer: null,
    drawerRight: null,
    right: false,
    item: 0,
    items: [
      // ICONS AND THE ROUTING FOR LEFT NAVIGATION DRAWER
      { text: 'Home Page', icon: 'fas fa-home', route:'/homepage' },
      { text: 'Devices', icon: 'mdi-hubspot', route:'/device/inverter' },
      { text: 'Alert', icon: 'fas fa-exclamation-triangle', route:'/alert' },
      { text: 'Report', icon: 'fas fa-file-invoice', route:'/report' },
      { text: 'Analytics', icon: 'far fa-chart-bar', route:'/analytics' },
      { text: 'More', icon: 'fas fa-ellipsis-h', route:'/morepages' },
      { text: 'Support', icon: 'fas fa-headset', route:'/support' },
      { text: 'SCB', icon: 'fab fa-angellist', route:'/scbdummy' },
      { text: 'Pricing', icon: 'fas fa-money-check-alt', route:'/pricing' },
      { text: 'Admin', icon: 'fas fa-user-cog', route:'/admin' },
    ],
      mini: true, // DEFAULT MINI VARIANT TO BE ACTIVE
      expandNavBar: true
  }),
  created() {
    // OPEN AND CLOSE OF THE LEFT NAV TO AVOID THE GLITCH IN THE GRAPH
    if(this.$vuetify.breakpoint.xs == true){
      this.drawer = true
      this.drawer = false
    }
    else {
      this.drawer = false
      this.drawer = true
    }
  },
  mounted() {
    // DIFFERENT TYPES OF NEFT NAV BAR - IN MOBILE NAV TO BE OPEN FULL
    if(this.$vuetify.breakpoint.xs == true){
      this.expandNavBar = false
    }
    else {
      // DIFFERENT TYPES OF NEFT NAV BAR - IN MOBILE NAV TO BE MINI VARIANT
      this.expandNavBar = true
    }
  },
  methods:{
    navBarRoute(routelink){
      // FUNCTION TO ROUTE ON CLICK ON THE LEFT NAV
      this.$router.push(routelink);
    },
    logout(){
      // FUNCTION TO LOGOUT OR ROUTE TO LOGIN PAGE
      this.$router.push("/");
    },
    changeTheme(){
      if (this.$vuetify.theme.dark == false){
        this.$vuetify.theme.dark = true
      }
      else if (this.$vuetify.theme.dark == true){
        this.$vuetify.theme.dark = false
      }
    },
    sampleNav(){
      this.drawer = !this.drawer
    }
  },
}
</script>
<style scoped>
#create .v-speed-dial {
  position: absolute;
}

#create .v-btn--floating {
  position: relative;
}

.theme--light .main-layout {
  background-color: #fafafa;
  min-height: 100vh;
}

.theme--dark .main-layout {
  /* background-color: rgb(20, 20, 20) */
  background-color: #1E1E1E;
  min-height: 100vh;
}

@media only screen and (max-width: 600px) {
  .mar2 {
    margin: 56px 0px 54px 0px;
  }

  .mar1 {
    margin: 56px 0px 54px 80px;
  }
}
@media only screen and (min-width: 600px) {
  .mar2 {
    margin: 64px 0px 32px 0px;
  }

  .mar1 {
    margin: 64px 0px 32px 80px;
  }
}

.left-nav {
  /* position: fixed; */
}

.theme--light .left-nav {
  background-color: #fff !important;
}
.theme--dark .left-nav {
  background-color: #121212 !important;
}

.customer-logo {
  display: flex;
  align-items: center;
}
.theme--light .nav-color {
  background-color: #312740;
}
.theme--dark .nav-color {
  background-color: #121212;
}
</style>