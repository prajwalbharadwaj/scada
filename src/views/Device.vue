<template>
  <div>

    









    <template>
      <div class="">
        <template>
          <div class="device-fasdnav d-flex">
            <div>
              <v-btn @click.stop="deviceDrawer()" :class="mini ? 'asd' : 'dfg'" fab dark x-small color="primary">
                <i :class="`fas fa-chevron-${iconPos}`"></i>
              </v-btn>
            <v-navigation-drawer v-model="deviceNavigation" permanent width="256" :mini-variant.sync="mini" class="sampleoajdfnhsd">
             <v-list nav dense>
                <v-list-item link v-for="item in deviceList" :key="item">
                  <v-list-item-icon>
                    <v-icon>mdi-folder</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title> {{item.name}} </v-list-item-title>
                </v-list-item>
                <!-- <v-list-item link>
                  <v-list-item-icon>
                    <v-icon>mdi-account-multiple</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Shared with me</v-list-item-title>
                </v-list-item>
                <v-list-item link>
                  <v-list-item-icon>
                    <v-icon>mdi-star</v-icon>
                  </v-list-item-icon>
                  <v-list-item-title>Starred</v-list-item-title>
                </v-list-item> -->
              </v-list>
            </v-navigation-drawer>
            </div>


            <v-container fluid>
              <v-row>
                <v-col md="12">
                  <v-card class="device-nav">
                    asdfsdf
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </template>
      </div>
    </template>














    <!-- START - CREATE ALL THE SUB COMPONENT OF THE DEVICE PAGE -->
    <!-- <v-card class="d-flex">
      <v-tabs v-model="tab" show-arrows fixed-tabs active-class="primary white--text">
        <v-tab v-for="(item, index) in deviceList" :key="index" @click="deviceRoute(item.route)">
          {{ item.name }}
        </v-tab>
      </v-tabs>

    </v-card> -->
    <!-- END - CREATE ALL THE SUB COMPONENT OF THE DEVICE PAGE -->

    <!-- <router-view></router-view>  -->
    <!-- ADD DYNAMIC ROUTING -->
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      deviceNavigation: true,
      mini: true,
      iconPos: 'right',
      deviceList: [
        {
          name: 'Inverter',
          route: '/device/inverter'
        },
        {
          name: 'SCB',
          route: '/device/scb'
        },
        {
          name: 'Adv String Inv',
          route: '/device/advStringInv'
        },
        {
          name: 'MFM',
          route: '/device/mfm'
        },
        {
          name: 'Weather Station',
          route: '/device/weatherStation'
        },
        {
          name: 'String Inverters',
          route: '/device/mfm'
        },
        {
          name: 'Zone',
          route: '/device/mfm'
        },
        {
          name: 'Energy Meter',
          route: '/device/mfm'
        },
        {
          name: 'Annunciator',
          route: '/device/mfm'
        },
      ]
    }
  },
  methods:{
    deviceRoute(routelink){
      // ROUTE TO PARTICULAR DEVICE PAGE ON CLICK
      this.$router.push(routelink);
    },
    deviceDrawer() {
      this.mini = !this.mini
      if(this.mini){
        this.iconPos = 'right'
      }
      else{
        this.iconPos = 'left'
      }
    }
  }
}
</script>
<style scoped>
.asd {
  position: absolute !important;
  z-index: 99;
  /* top: 4px; */
  left: 144px;
}
.dfg {
  position: absolute !important;
  z-index: 99;
  /* top: 4px; */
  left: 320px;
}
.device-nav {
  position: absolute;
  /* margin: 0 0 0 0px; */
}
/* .sampleoajdfnhsd {
  position: absolute !important;
  top: 65px;
  left: 80px;
  z-index: 1;
} */
</style>