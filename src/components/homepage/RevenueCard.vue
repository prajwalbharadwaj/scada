<template>
  <div class="pt-4">
    <v-card>
      <div class="cus-title p-t-20 p-x-20 pb-2 d-flex align-center bb-1 border-normal">
        <div>Revenue</div>
        <v-spacer></v-spacer>
        <!-- START - DROPDOWN TO SELECT MONTHS -->
        <div class="subtitle-2">
          <v-menu bottom left>
            <template v-slot:activator="{ on }">
              <v-btn small outlined text v-on="on">
                Jan-2020 <i class="fas fa-chevron-down"></i>
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="(item, i) in items" :key="i" @click="">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
        <!-- END - DROPDOWN TO SELECT MONTHS -->
      </div>
      <v-container class="pa-0 ma-0">
        <v-row class="pa-0 ma-0">
          <v-col>
            <div class="revenue-text font-weight-medium">
              &#8377;{{revenueValue()}}
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>
<script>
  export default {
    data: () => ({
      items: [
        { title: 'Oct-2020' },
        { title: 'Nov-2020' },
        { title: 'Dec-2020' },
        { title: 'Jan-2020' },
      ],
      revenue: 68708529,
    }),
    mounted() {
      this.revenueValue()
    },
    methods: {
      revenueValue: function(){
        let tempRev= this.revenue.toString();
        let afterPoint = '';
        if(tempRev.indexOf('.') > 0){
          afterPoint = tempRev.substring(tempRev.indexOf('.'),tempRev.length);
        }
        tempRev = Math.floor(tempRev);
        tempRev=tempRev.toString();
        let lastThree = tempRev.substring(tempRev.length-3);
        let otherNumbers = tempRev.substring(0,tempRev.length-3);
        if(otherNumbers != ''){
          lastThree = ',' + lastThree;
        }
        let res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree + afterPoint;

        // alert(res);
        return res
      }
    },
  }
</script>
<style scoped>
.revenue-text {
  color: #137eff;
  font-size: 34px;
  text-align: center;
}
</style>