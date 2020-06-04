<template>
  <div>
    <v-card>
      <div class="card-height-300">
        <div v-for="(items, index) in 10" :key="index" class="divider">
        <div class="mb-2">
          <v-container fluid class="pa-0 ma-0">
          <v-row class="pa-0 ma-0">
            <v-col>SCB - {{index + 1}} </v-col>
            <v-col> Temp: 35°C</v-col>
            <v-col>Voltage: 521V</v-col>
            <v-col>Breaker: No Data</v-col>
            <v-col>SPD: No Data</v-col>
          </v-row>
          <v-row class="pa-0 ma-0">
            <v-col cols="12" class="pt-0">
              <div class="d-flex flex-wrap justify-content-flex-evenly">
                <div class="channel text-center" v-for="(item,index) in 24" :key="index">Ch- {{index+1}} : 2{{index}} </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
        </div>
      </div>
      </div>
    </v-card>
  </div>
</template>
<style scoped>
.channel{
  /* height: 100px; */
  /* text-align: center; */
  cursor: pointer;
  min-width: 120px;
  border-radius: 4px;
  background-color: #34C38F;
  margin: 4px;
}
</style>