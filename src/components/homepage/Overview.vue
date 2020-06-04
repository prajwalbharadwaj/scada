<template>
  <div class="pb-4">
    <v-card>
      <div class="cus-title p-t-20 p-x-20 pb-2 d-flex align-center bb-1 border-normal">
        <div>Overview</div>
      </div>
      <!-- START - CONTAINER TO DISPLAY NAME AND VALUE OF THE PLANT OVERVIEW -->
      <v-container class="pa-0 ma-0">
        <v-row class="pa-0 ma-0 divider" v-for="(item,index) in plantInfo" :key="index">
          <v-col class="text-right primary-text py-1 align-self-center"> {{item.name}}: </v-col>
          <v-col v-if="item.name == 'Plant Logo'" class="py-0 pt-2"> <img :src="item.value" alt="" width="40"
              height="40"> </v-col>
          <v-col v-else class="primary-text font-weight-medium py-1 align-self-center"> {{item.value}} </v-col>
        </v-row>
      </v-container>
      <!-- END - CONTAINER TO DISPLAY NAME AND VALUE OF THE PLANT OVERVIEW -->
    </v-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      plantInfo: [
        {
          name: 'Plant PR',
          value: "87%"
        },
        {
          name: 'Insolation',
          value: "3.04 kWh/m\xB2"
        },
        {
          name: 'PoA Insolation',
          value: "6.09 kWh/m\xB2"
        },
        {
          name: 'Wind Speed',
          value: "6.24 km/h"
        },
        {
          name: 'Cuf',
          value: "11.65%"
        },
        {
          name: 'Module Temp',
          value: "59.7\9\xB0C"
        },
        {
          name: 'Total Export till date',
          value: "328.7 Mwh"
        }
      ]
    }
  },
}
</script>