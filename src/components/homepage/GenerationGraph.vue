<template>
  <div class="">
    <v-card>
      <v-container class="pa-0 ma-0">
        <!-- START - TITLE AND THE FILTER TO SELECT DAYS/WEEKS/MONTHS/YEAR -->
        <v-row class="pa-0 ma-0 cus-title pt-5 px-5 pb-2 bb-1 border-normal">
          <v-col class="pa-0 ma-0">
            <div>Plant Gen Graph <span class="caption">(mfm/em/inv)</span></div>
          </v-col>
          <v-spacer class="d-none"></v-spacer>
          <v-col class="text-center text-lg-right pa-0 ma-0">
            <v-spacer></v-spacer>
            <v-btn-toggle v-model="selectDay" mandatory>
            <v-btn small color="primary" outlined @click="updateToday">Today</v-btn>
            <v-btn small color="primary" outlined @click="updateWeek">Week</v-btn>
            <v-btn small color="primary" outlined @click="updateMonth">Month</v-btn>
            <v-btn small color="primary" outlined @click="updateYear">Year</v-btn>
            <v-btn small color="primary" outlined @click="updateLifetime">Lifetime</v-btn>
          </v-btn-toggle>
          </v-col>
        </v-row>
        <!-- END - TITLE AND THE FILTER TO SELECT DAYS/WEEKS/MONTHS/YEAR -->

        <!-- START - PLOTTED GRAPH DATE RANGE -->
        <v-row class="pa-0 ma-0 px-5 py-2 primary-text font-weight-medium">
          {{chartOptions.xaxis.dataHeading}}
        </v-row>
        <!-- END - PLOTTED GRAPH DATE RANGE -->

        <!-- START - DISLPAY GRAPH -->
        <v-row class="pa-0 ma-0">
          <v-col cols="12" class="pa-0 ma-0 px-2">
            <apexcharts max-width="100%" height="385" type="bar" :options="chartOptions" :series="series" id="graph-container"></apexcharts>
          </v-col>
        </v-row>
        <!-- END - DISLPAY GRAPH -->
      </v-container>
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
  data: function () {
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
        },
        grid: {
        borderColor: '#282D4D',
        },
        tooltip: {
          enabled: true,
        }
      },
      series: [{
        name: 'Gen',
        data: [5, 7, 6, 8, 5, 9, 10]
      }]
    }
  },
  mounted() {},
  methods: {
    updateToday() {
      // UPDATE TODAYS RANDOM DATA ON CLICK OF A BUTTON
      const max = 10;
      const min = 0;
      const dayCategories = ['5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00']
      const newData = this.series[0].data.map(() => {
        return Math.floor(Math.random() * (max - min + 1)) + min
      })
      this.chartOptions = {
        xaxis: {
          categories: dayCategories,
          dataHeading: 'Jan 23, 2020'
        }
      }
      this.series = [{
        data: newData
      }]
    },
    updateWeek() {
      // UPDATE WEEKS RANDOM DATA ON CLICK OF A BUTTON
      const max = 100;
      const min = 0;
      const weekCategories = ['23-Jan', '24-Jan', '25-Jan', '26-Jan', '27-Jan', '28-Jan', '29-Jan'];
      const newData = this.series[0].data.map(() => {
        return Math.floor(Math.random() * (max - min + 1)) + min
      })
      this.chartOptions = {
        xaxis: {
          categories: weekCategories,
          dataHeading: 'Jan 23, 2020 - Jan 29, 2020'
        }
      }
      this.series = [{
        data: newData
      }]
    },
    updateMonth() {
      // UPDATE MONTHS RANDOM DATA ON CLICK OF A BUTTON
      const max = 10000;
      const min = 0;
      const monthCategories = ['01-Jan', '02-Jan', '03-Jan', '04-Jan', '05-Jan', '06-Jan', '07-Jan'];
      const newData = this.series[0].data.map(() => {
        return Math.floor(Math.random() * (max - min + 1)) + min
      })
      this.chartOptions = {
        xaxis: {
          categories: monthCategories,
          dataHeading: 'Jan 2020'
        }
      }
      this.series = [{
        data: newData
      }]
    },
    updateYear() {
      // UPDATE YEARS RANDOM DATA ON CLICK OF A BUTTON
      const max = 100000;
      const min = 0;
      const yearCategories = ['June', 'July', 'Aug', 'Sept', 'Oct', 'Dec', 'Jan'];
      const newData = this.series[0].data.map(() => {
        return Math.floor(Math.random() * (max - min + 1)) + min
      })
      this.chartOptions = {
        xaxis: {
          categories: yearCategories,
          dataHeading: 'June 2019 - Jan 2020'
        }
      }
      this.series = [{
        data: newData
      }]
    },
    updateLifetime() {
      // UPDATE LIFETIMES RANDOM DATA ON CLICK OF A BUTTON
      const max = 1000000;
      const min = 0;
      const yearCategories = ['2014', '2015', '2016', '2017', '2018', '2019', '2020'];
      const newData = this.series[0].data.map(() => {
        return Math.floor(Math.random() * (max - min + 1)) + min
      })
      this.chartOptions = {
        xaxis: {
          categories: yearCategories,
          dataHeading: '2014 - 2020'
        }
      }
      this.series = [{
        data: newData
      }]
    },
  },
}
</script>
<style scoped>
@import url('../../stylus/homePageGraph.css');
#graph-container {
  max-width: 100%;
}
</style>
