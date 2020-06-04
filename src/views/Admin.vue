<template>
  <div>
    <v-container fluid class="pa-0 ma-0">
      <v-row class="pa-0 ma-0">
        <v-col>
          <v-card>
            <div class="cus-title p-t-20 p-x-20 pb-2 d-flex align-center bb-1 border-normal">
              <div>Admin</div>
              <v-spacer></v-spacer>
              <div class="d-flex">
                <div class="mr-7">
                  <v-btn x-small color="primary"> <i class="fas fa-filter mr-2"></i> Filters</v-btn>
                </div>
                <div>
                  <v-btn x-small color="success"> <i class="fas fa-plus-circle mr-2"></i> Create New</v-btn>
                </div>
              </div>
            </div>

            <v-container fluid class="pa-0 ma-0">
              <v-row 33333class="pa-0 ma-0">
                <v-col md="8" class="pa-0 ma-0">
                  <v-row class="pa-0 ma-0 fs-12 secondary-text font-weight-bold">
                    <v-col md="1">Sl No</v-col>
                    <v-col md="1">Logo</v-col>
                    <v-col md="4">Name / Role / Email</v-col>
                    <v-col md="3">Header Component</v-col>
                    <v-col md="2">Expiry Date</v-col>
                    <v-col md="1" class="br-1 border-normal">Action</v-col>
                  </v-row>
            <v-divider></v-divider>
            <v-container fluid class="card-height-400 pa-0 ma-0 br-1 border-normal">
              <v-row class="pa-0 ma-0 primary-text d-flex align-center bb-1 border-normal card-height adfasdf" v-for="item in 12">
              <v-col md="1">1</v-col>
              <v-col md="1">
                <v-avatar color="indigo" size="36">
                  <!-- <span class="white--text"> -->
                    <img src="//logo.clearbit.com/asana.com" alt="">
                  <!-- </span> -->
                </v-avatar>
              </v-col>
              <v-col md="4">
                <div> Garima Bhaskar
                  <v-chip class="ma-2" color="primary" x-small label>
                    Admin
                  </v-chip>
                </div>
                <div>sampleDemo@example.com</div>
              </v-col>
              <v-col md="3" class="d-flex">
                <div class="header-compo">
                  <v-avatar color="indigo" size="28">
                    <span class="white--text fs-12">PT</span>
                  </v-avatar>
                </div>
                <div class="header-compo">
                  <v-avatar color="red" size="28">
                    <span class="white--text fs-12">AC</span>
                  </v-avatar>
                </div>
                <div class="header-compo">
                  <v-avatar color="green" size="28">
                    <span class="white--text fs-12">DC</span>
                  </v-avatar>
                </div>
                <div class="header-compo">
                  <v-avatar color="blue" size="28">
                    <span class="white--text fs-12">PR</span>
                  </v-avatar>
                </div>
              </v-col>
              <v-col md="2">2020-03-06</v-col>
              <v-col md="1">Action</v-col>
            </v-row>
            </v-container>
                </v-col>
                <v-col md="4">
                  <v-card class="white--text" color="#141E46">
                    asdf
                  </v-card>
                </v-col>
              </v-row>
            </v-container>


          </v-card>
        </v-col>
      </v-row>
      <v-speed-dial
      v-model="fab"
      right bottom
    >
      <template v-slot:activator>
        <v-btn
          v-model="fab"
          color="blue darken-2"
          dark
          fab
        >
          <v-icon v-if="fab">mdi-close</v-icon>
          <v-icon v-else>mdi-account-circle</v-icon>
        </v-btn>
      </template>
      <v-btn
        fab
        dark
        small
        color="green"
      >
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="indigo"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="red"
      >
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-speed-dial>
    </v-container>
    
  </div>
</template>
<style scoped>
.adfasdf:hover {
  z-index: 999;
  background-color: #fafafa;
}
.header-compo:not(:first-child) {
  margin-left: -6px;
}
.header-compo:hover {
  z-index: 1;
}
.v-speed-dial {
    position: absolute;
  }
.v-btn--floating {
    position: relative;
  }
</style>