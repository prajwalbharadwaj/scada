<template>
  <div>
    <v-container fluid class="ma-0 pa-0">
      <v-row class="pa-0 ma-0">
        <v-col cols="6" xs="6" sm="6" md="3" v-for="(item, index) in headCardData" :key="index">
          <v-card>

            <v-container class="pa-0 ma-0">
              <v-row class="align-center primary-text pa-0 ma-0">
                <v-col cols="3" class="text-center d-none d-sm-none d-md-flex">
                  <div :class="`${item.color}--text`"> <i :class="`${item.icon} fa-2x`"></i> </div> <!-- ICON FOR CARD -->
                </v-col>
                <v-col cols="12" md="9" class=" text-center text-md-right">
                  <div class="primary-text header-value"> {{item.value}} <span class="body-2"> {{item.unit}} </span> </div> <!-- CARD VALUE AND THE UNIT -->
                  <div> {{item.title}} </div> <!-- TITLE OF THE CARD -->
                </v-col>
              </v-row>
            </v-container>

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
      headCardData: [
        {
          title: "Total Plant",
          value: '08',
          unit: '',
          icon: 'fas fa-chart-pie',
          color: 'red',
          symbol: "TP"
        },
        {
          title: "Gen Today",
          value: '378.08',
          unit: 'MW',
          icon: 'fas fa-chart-pie',
          color: 'blue',
          symbol: "GT"
        },
        {
          title: "AC Power",
          value: '423.87',
          unit: 'MW',
          icon: 'fas fa-chart-pie',
          color: 'yellow',
          symbol: "AC"
        },
        {
          title: "DC Power",
          value: '456.50',
          unit: 'MW',
          icon: 'fas fa-chart-pie',
          color: 'green',
          symbol: "DC"
        },
      ]
    }
  },
}
</script>
<style scoped>
.symbol-text {
  font-size: 30px;
  height: 55px;
  width: 55px;
  border-radius: 50%;
  background-color: #eeeeee;
  line-height: 55px;
}
@media only screen and (max-width: 600px) {
  .header-value {
    font-size: 26px;
  }
}
@media only screen and (min-width: 600px) {
  .header-value {
    font-size: 30px;
  }
}
@media only screen and (min-width: 960px) {
  .header-value {
    font-size: 34px;
  }
}
</style>