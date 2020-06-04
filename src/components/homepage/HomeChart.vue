<template>
  <div>
    <v-container fluid class="pa-0 ma-0">
      <v-row class="pa-0 ma-0">
        <v-col cols="12" xs="12" sm="12" md="3">
          <PlantList /> <!-- COMPONENT - LIST OF ALL THE PLANTS -->
          <PlantStaticInfo /> <!-- COMPONENT - STATIC INFO PAGE -->
          <!-- <History class="d-none" /> -->
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="6">

          <!-- COMPONENT - GENERATION GRAPH (EM/MFM/INV) -->
          <GenerationGraph /> 
          <!-- COMPONENT - GENERATION TABLE, THIS IS CURRENTLY HIDDEN -->
          <!-- <GenerationTable class="p-t-20 d-none" />  -->
          <!-- COMPONENT - ON/OFF STATUS OF ALL THE DEVICE WHICH SENDS DATA TO US -->
          <AllDeviceStatus class="p-t-20" />
        </v-col>
        <v-col cols="12" xs="12" sm="12" md="3">
          <div>
            <Overview /> <!-- COMPONENT - OVEWVIEW OF THE PLANT INFORMATION LIKE PR, CUF,INSOLATION -->
          </div>

          <!-- START - PERFORMANCE CARD GRAPH -->
          <div>
            <v-card>
              <div class="cus-title p-t-20 p-x-20 pb-2 d-flex align-center bb-1 border-normal">
                <div>Performance ratio</div>
              </div>
              <vue-c3 :handler="handler"></vue-c3>
            </v-card>
          </div>
          <!-- END - PERFORMANCE CARD GRAPH -->

          <div class="">
            <RevenueCard /> <!-- COMPONENT - REVENVUE GENERATED MONTHLY -->
          </div>
          <div class="pt-4">

            <PRCard /> <!-- COMPONENT - PROGRESS BAR AND THE PR CARDS -->
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
 
<script>
  import Vue from 'vue'
  import VueC3 from 'vue-c3'
  import GenerationGraph from './GenerationGraph.vue'
  import ComparisionGraph from './ComparisionGraph.vue'
  import PlantList from './PlantList.vue'
  import PlantStaticInfo from './PlantStaticInfo.vue'
  import Overview from './Overview'
  import RevenueCard from './RevenueCard.vue'
  import PRCard from './PRCard.vue'
  import AllDeviceStatus from './AllDeviceStatus'
 
  export default {
    components: {
      VueC3, 
      GenerationGraph,
      ComparisionGraph,
      PlantList,
      PlantStaticInfo,
      Overview,
      RevenueCard,
      PRCard,
      AllDeviceStatus
    },
 
    data() {
      return {
        sampleIc: null,
        temp1: 34,
        handler: new Vue(),
        graphOptions: {
          data: {
            columns: [
              ['PR - INV', 73.98],
            ],
            type: 'gauge',
          },
          legend: {
            hide: false
          },
          color: {
            pattern: ['#FF0000', '#F97600', '#F6C600', '#60B044'], // the four color levels for the percentage values.
            threshold: {
              values: [30, 60, 90, 100]
            }
          },
          size: {
            height: 180
          }
        }

      }
    },
    mounted() {
      this.handler.$emit('init', this.graphOptions)
    },
    created() {
      this.graphData()
    },
    methods: {
      graphData: function() {
        // TO PLOT A RANDOM NUMBER EVERY 2 SEC
        setInterval(()=> {
          this.sampleIc = (Math.random() * 100).toFixed(2);
          this.graphOptions.data.columns[0][1] = this.sampleIc
          this.handler.$emit('init', this.graphOptions)
        },2000)
    }
    }
  }
</script>
<style scoped>
@import url('./../../stylus/c3.css');
</style>