<template>
<!-- PAGE IS CREATED FOR ALERT -->
  <div>
    <div class="hidden-md-and-down">
      <AlertHeader/>
    </div>
    <div class="hidden-md-and-up">
      <AlertMobileHeader/>
    </div>
    <div>
      <v-container fluid class="pa-0 ma-0">
        <v-row class="pa-0 ma-0">
          <v-col cols="12" xs="12" sm="12" md="3" class="pa-0 pa-0">
            <div class="hidden-md-and-down">
              <AlertFilter/>
            </div>
            <!-- <div class="hidden-md-and-up text-right mr-3">
              <v-btn color="primary">Filter</v-btn>
            </div> -->
          </v-col>
          <v-col cols="12" xs="12" sm="12" md="9" class="pa-0 pa-0">
            <div class="hidden-md-and-down">
              <!-- <AlertTable/> -->
              <AlertMobileTable/>
            </div>
            <div class="hidden-md-and-up">
              <AlertMobileTable/>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
import AlertHeader from '../components/alert/AlertCard'
import AlertMobileHeader from '../components/alert/AlertMobileHeader'
import AlertTable from '../components/alert/AlertTable'
import AlertMobileTable from '../components/alert/AlertMobileTable'
import AlertFilter from '../components/alert/AlertFilter'
export default {
  components:{
    AlertHeader,
    AlertMobileHeader,
    AlertTable,
    AlertFilter,
    AlertMobileTable
  }
}
</script>