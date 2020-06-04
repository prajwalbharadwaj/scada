<template>
  <div>
    <v-container fluid class="pa-0">
      <v-row class="pa-0 ma-0">
        <v-col>
          <v-card>
            <v-row class="d-flex align-center">
              <v-col cols="4" sm="4" md="4">
                <div class="cus-title p-x-20 pb-2">
                  <div>Inverter</div>
                </div>
              </v-col>
              <v-col cols="8" sm="8" md="4" class="d-flex align-center">
                <span class="caption pr-3 hidden-xs-only">Select Date</span>
                <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="dates"
                  transition="scale-transition" offset-y max-width="290px" min-width="290px">
                  <template v-slot:activator="{ on }">
                    <v-text-field v-model="dateRangeText" label="Select Date" readonly
                      hide-details v-on="on" solo clearable clear-icon="mdi-close-circle-outline" dense></v-text-field>
                  </template>
                  <v-date-picker v-model="dates" range color="#1867C0" min="2016" :max="todayMax"></v-date-picker>
                </v-menu>
              </v-col>
              <v-col class="text-center" cols="12" sm='12' md="4">
                <div>
                  <v-btn-toggle v-model="selectDay" mandatory>
                    <v-btn small color="primary" outlined>Today</v-btn>
                    <v-btn small color="primary" outlined>Week</v-btn>
                    <v-btn small color="primary" outlined>Month</v-btn>
                    <v-btn small color="primary" outlined>Year</v-btn>
                  </v-btn-toggle>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import moment from 'moment'
  export default {
    data: () => ({
      dates: [moment().subtract(10, 'days').format('YYYY-MM-DD'), moment().format('YYYY-MM-DD')],
      todayMax: moment().format('YYYY-MM-DD'),
      menu: false,
      modal: false,
    }),
    computed: {
      dateRangeText () {
        return this.dates.join(' to ')
      },
    },
  }
</script>