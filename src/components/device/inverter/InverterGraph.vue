<template>
  <div>
    <v-card>
      <div class="cus-title p-t-20 p-x-20 pb-2 d-flex align-center bb-1 border-normal">
        <div>Inverter...</div>
        <v-spacer></v-spacer>
        <div>
          <v-btn outlined color="primary" small>Table</v-btn>
        </div>
      </div>
      <div class="text-center">
        <v-row class="pa-0 ma-0">
          <v-col cols="12" class="pa-0 ma-0 px-2">
            <apexcharts max-width="100%" height="385" type="bar" :options="chartOptions" :series="series" id="sample"></apexcharts>
          </v-col>
        </v-row>
      </div>
    </v-card>
  </div>
</template>
<script>
import VueApexCharts from 'vue-apexcharts'

export default {
  name: 'Chart',
  components: {
    apexcharts: VueApexCharts,
  },
  data: function() {
    return {
      selectDay: 0,
      xaxis: null,
      chartOptions: {
        bar: {
          
        },
        chart: {
          width: "90%",
          id: 'basic-bar',
          toolbar: {
            show: false
          }
        },
        xaxis: {
          categories: ['5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00'],
          dataHeading: 'Jan 23, 2020'
        }
      },
      series: [{
        name: 'Gen',
        data: [5, 7, 6, 8, 5, 9, 10]
      }]
    } 
  },
}
</script>
<style scoped>
#sample {
  max-width: 100%;
}
</style>