<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col md="12" class="pa-0">
          <InverterTitle />
        </v-col>
      </v-row>
      <v-row clas>
        <v-col md="4" class="">
          <InverterList />
        </v-col>
        <v-col md="8" class="">
          <InverterGraph />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import InverterTitle from './InverterTitle.vue'
import InverterList from './InverterList.vue'
import InverterGraph from './InverterGraph.vue'
export default {
  components:{
    InverterTitle,
    InverterList,
    InverterGraph
  }
  
}
</script>