<template>
  <v-card class="d-flex pa-2">
    <div v-for="(items,index) in legendData" :key="index">
      <div class="d-flex mr-5 align-center">
        <div :class="`legend-square mr-1 ${items.class}`"></div>
        {{items.name}} 
        </div>
    </div>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      legendData: [
        {name: "Issue", class: "legend-issue"},
        {name: "Under Performance", class: "legend-up"},
        {name: "Comm Error", class: "legend-comerr"},
        {name: "Selected", class: "legend-selected"},
      ]
    }
  },
}
</script>
<style scoped>
.legend-square {
  border-radius: 50%;
  height: 16px;
  width: 16px;
}
.legend-issue {
  background-color: #F5BE11;
}
.legend-up {
  background-color: #E95549;
}
.legend-comerr {
  background-color: #F69946;
}
.legend-selected {
  background-color: #0CC243;
}
</style>