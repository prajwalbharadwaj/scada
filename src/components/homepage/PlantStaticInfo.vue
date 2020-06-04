<template>
  <div class="pt-4">
    <v-container class="pa-0 ma-0">
      <v-row class="pa-0 ma-0">
        <v-col class="pa-0 ma-0">
          <v-card>
            <div class="cus-title p-t-20 p-x-20 pb-2 d-flex align-center bb-1 border-normal">
              <div>Plant Static Information</div>
            </div>
            <div>
              <!-- START - LIST TO DISPLAY THE PLANT STATIC INFORMATION -->
              <v-list class="pa-0 ma-0 card-height-400">
                <v-list-item two-line class="divider" v-for="(item, index) in plantStaticInfo" :key="index">
                  <v-list-item-content>
                    <v-list-item-title class="primary-text font-weight-medium"> {{item.value}} </v-list-item-title>
                    <v-list-item-subtitle class="tertiary-text"> {{item.name}} </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
              <!-- END - LIST TO DISPLAY THE PLANT STATIC INFORMATION -->
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      plantStaticInfo: [
        {
          name: 'Customer Name',
          value: 'Nimble Co.'
        },
        {
          name: 'Name of the Plant',
          value: 'Rootechnologies Pvt Ltd'
        },
        {
          name: 'Plant Address / Location',
          value: 'Kurnool - AP'
        },
        {
          name: 'Geo Co-ordinate (Lat/Long)',
          value: '15.701013, 78.262433'
        },
        {
          name: 'DC Capacity (MWp)',
          value: '3'
        },
        {
          name: 'AC Capacity (MW)',
          value: '3'
        },
        {
          name: 'Mounting Type',
          value: 'Fixed / Tracker'
        },
        {
          name: 'Type of SCADA Solution',
          value: 'Wired'
        },
        {
          name: 'Plant Commissioned Date',
          value: 'Not Available'
        },
        {
          name: 'GRID Voltage',
          value: '33kV'
        },
        {
          name: 'Model Make / Capacity / Total Capacity',
          value: 'Not Available'
        },
        {
          name: 'Total No of strings',
          value: 'Not Available'
        },
        {
          name: 'Tilt Angle',
          value: 'Fixed & Tracker'
        },
        {
          name: 'No of Blocks',
          value: '3'
        },
        {
          name: 'No of inverter rooms',
          value: '1'
        }
      ]
    }
  },
}
</script>