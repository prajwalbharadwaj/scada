<template>
  <div>
    <v-card>
      <div class="cus-title p-t-20 p-x-20 pb-2 d-flex align-center bb-1 border-normal">
        <div>Availaility</div>
      </div>
      <v-container>
        <v-row>
          <v-col cols="12" v-for="(items, key) in prData" :key="key">
            <!-- START - TITLE AND THE VALUE OF THE PROGRESS CARD -->
            <div class="d-flex align-center">
              <div class="fs-18 primary-text font-weight-medium">{{items.value}}% </div>
              <v-spacer></v-spacer>
              <div :class="`fs-12 pr-2 arrow-${items.arrow == 'down' ? 'red' : 'green'}-text`"><i
                  :class="`fas fa-arrow-${items.arrow}`"></i>{{items.variation}}</div>
              <div class="fs-14 secondary-text text-right">{{items.title}}</div>
            </div>
            <!-- END - TITLE AND THE VALUE OF THE PROGRESS CARD -->
            
            <!-- START - PROGRESS BAR -->
            <v-progress-linear :value="`${items.value}`" height="6" :color="items.color" striped rounded>
            </v-progress-linear>
            <!-- END - PROGRESS BAR -->
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      prData: [
          // {
          //   title: 'PR - INV',
          //   value: 30,
          //   variation: 56,
          //   arrow: 'down',
          //   color: '#ED4635',
          // },
          // {
          //   title: 'PR - MFM',
          //   value: 56,
          //   variation: 30,
          //   arrow: 'down',
          //   color: '#F6B132',
          // },
          // {
          //   title: 'PR - ENergy Meter',
          //   value: 87,
          //   variation: 90,
          //   arrow: 'up',
          //   color: '#52AF50',
          // },
          {
            title: 'Grid Availaility',
            value: 98.3,
            variation: '12:00',
            arrow: 'up',
            color: '#52AF50',
          },
          {
            title: 'Plant Availaility',
            value: 97.9,
            variation: 12,
            arrow: 'up',
            color: '#52AF50',
          },
        ],
    }
  },
}
</script>