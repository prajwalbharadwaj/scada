<template>
  <v-card class="mx-auto">
    <div class="cus-title p-t-20 p-x-20 pb-2 d-flex align-center bb-1 border-normal">
      <div>Plant List - {{ this.totalPlant }}</div>
      <v-spacer></v-spacer>
    </div>
    <!-- {{plantLocation}} -->
    <v-list class="card-height-400 py-0">
      <template v-for="(item, index) in plantList">
        <v-list-item :key="item.plantId" :class="`outer-list divider bl-5 border-${item.alert}`">
          <v-list-item-avatar class="">
            <!-- PLANT LOGO / IMAGE IN 40X40 SIZE -->
            <v-img :src="item.avatar" height="40" width="40"></v-img> 
          </v-list-item-avatar>
          <v-list-item-content class="pa-0">
            <v-list-item-title>
              
              <!-- START - ACTIVE /INACTIVE PLANTS -->
              <v-tooltip right color="primary">
                <template v-slot:activator="{ on }">
                  <div v-on="on" :class="`circle-status circle-status-${item.status}`"></div>
                </template>
                <span class="text-uppercase">{{item.status}}</span>
              </v-tooltip>
              <!-- END - ACTIVE /INACTIVE PLANTS -->

              {{item.title}}
            </v-list-item-title>
            <v-list-item-subtitle>
              {{item.location}} | {{item.totalCapacity}} | Power
            </v-list-item-subtitle>
          </v-list-item-content>
          <!-- START - ICON TO BE SHOWN ON HOVE OF THE PLANT -->
          <v-list-item-icon class="hover-icon">
            <v-btn class="mx-2" fab text small color="#6A7A8C">
              <i class="fas fa-chevron-right"></i>
            </v-btn>
          </v-list-item-icon>
          <!-- END - ICON TO BE SHOWN ON HOVE OF THE PLANT -->
        </v-list-item>
      </template>
    </v-list>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      hoverList: false,
      totalPlant: null,
      
    }
  },
  computed: {
    plantList(){
      return this.$store.state.plantList
    },
    plantLocation() {
      return this.$store.getters.plantLocation
    }
  },
  mounted() {
    this.appendZero();
  },
  methods: {
    appendZero() {
      // FILTER TO ADD APENED ZERO AT THE START WHEN THE PLANT COUNT IS SINGLE DIGIT
      if(this.plantList.length < 10) {
        this.totalPlant = '0'+ this.plantList.length
      }
      else {
        this.totalPlant = this.plantList.length
      }
    }
  },
}
</script>
<style scoped>
.outer-list .hover-icon {
  display: none;
}

.outer-list:hover .hover-icon {
  display: inline;
}
</style>