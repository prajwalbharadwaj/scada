<template>
  <div>
    <v-container class="pa-0 ma-0">
      <v-row class="pa-0 ma-0">
        <v-col class="pa-0 ma-0">
          <v-card>
            <!-- START - TITLE AND SEARCH -->
            <div class="cus-title p-t-20 p-x-20 pb-2 d-flex align-center bb-1 border-normal">
              <div>All Device Status</div>
              <v-spacer></v-spacer>
              <v-text-field v-model="search" append-icon="search" label="Search" single-line hide-details
                class="pa-0 ma-0"></v-text-field>
            </div>
            <!-- END - TITLE AND SEARCH -->

            <div>
              <v-container fluid class="ma-0 pa-0 max-card-height-350">
                <!-- START - WHEN SEARCH IS INVALID -->
                <v-row v-show="filteredList.length == 0" class="pa-0 ma-0">
                  <v-col md="12">
                    <v-alert text prominent type="error">
                      Sorry, No Result found for "{{search}}"
                    </v-alert>
                  </v-col>
                </v-row>
                <!-- END - WHEN SEARCH IS INVALID -->
                <v-row v-show="filteredList" class="divider d-flex pa-0 ma-0" align="stretch"
                  v-for="(items, index) in filteredList" :key="index">
                  <!-- START - NAME AND ON | OFF | TOTAL -->
                  <v-col cols="4" sm="4" md="4" class="text-center" align-self="center">
                    <div class="d-flex flex-column">
                      <div class="primary-text font-weight-medium">
                        {{items.name}}
                      </div>
                      <div class="caption hidden-md-and-down">
                        <span class="green--text">On:
                          {{!totalDeviceOn[items.name].on ? '0' : totalDeviceOn[items.name].on}} </span> |
                        <span class="red--text">Off:
                          {{!totalDeviceOn[items.name].off ? '0' : totalDeviceOn[items.name].off}} </span> |
                        <span class="amber--text">Total: {{items.children.length}} </span>
                      </div>
                      <div class="caption hidden-md-and-up">
                        <div class="green--text">On:
                          {{!totalDeviceOn[items.name].on ? '0' : totalDeviceOn[items.name].on}} </div>
                        <div class="red--text">Off:
                          {{!totalDeviceOn[items.name].off ? '0' : totalDeviceOn[items.name].off}} </div>
                        <div class="amber--text">Total: {{items.children.length}} </div>
                      </div>
                    </div>
                  </v-col>
                  <!-- END - NAME AND ON | OFF | TOTAL -->

                  <!-- START - STATUS INDICATION AND COLOR -->
                  <v-col cols="8" sm='8' md="8" class="bl-1 border-normal d-flex align-center">
                    <div class="d-flex flex-wrap">
                      <span v-for="item in items.children" :key="item.name">
                        <div :class="`ma-1 status-box text-center ${getStatusColor(item.status)}`">
                          {{item.name}}
                        </div>
                      </span>
                    </div>
                  </v-col>
                  <!-- END - STATUS INDICATION AND COLOR -->

                </v-row>
              </v-container>
              <!-- START - LEGEND AND INFO -->
              <v-row class="bt-1 border-normal pa-0 ma-0 pl-5 py-1">
                <div class="caption">
                  <i class="fas fa-info-circle red--text heartBeat infinite-animate-1s"></i>
                  Based on Alerts
                </div>
              </v-row>
              <!-- END - LEGEND AND INFO -->
            </div>
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
      search: '',
      allDeviceData: [{
          name: 'MFM',
          children: [{
              name: 'MFM - Outgoing',
              status: 'on'
            },
            {
              name: 'MFM - Incomer',
              status: 'off'
            },
          ]
        },
        {
          name: 'Breaker',
          onCount: '04',
          offCount: '01',
          children: [{
              name: 'Breaker - 1',
              status: 'on'
            },
            {
              name: 'Breaker - 2',
              status: 'on'
            },
            {
              name: 'Breaker - 3',
              status: 'on'
            },
            {
              name: 'Breaker - 4',
              status: 'off'
            },
            {
              name: 'Breaker - 5',
              status: 'on'
            },
            {
              name: 'Breaker - 6',
              status: 'off'
            },
          ]
        },
        {
          name: 'Inverter',
          onCount: '11',
          offCount: '03',
          children: [{
              name: 'Inv - 1',
              status: 'off'
            },
            {
              name: 'Inv - 2',
              status: 'on'
            },
            {
              name: 'Inv - 3',
              status: 'on'
            },
            {
              name: 'Inv - 4',
              status: 'on'
            },
            {
              name: 'Inv - 5',
              status: 'on'
            },
            {
              name: 'Inv - 6',
              status: 'on'
            },
            {
              name: 'Inv - 7',
              status: 'off'
            },
            {
              name: 'Inv - 8',
              status: 'on'
            },
            {
              name: 'Inv - 9',
              status: 'on'
            },
            {
              name: 'Inv - 10',
              status: 'on'
            },
            {
              name: 'Inv - 11',
              status: 'on'
            },
            {
              name: 'Inv - 12',
              status: 'on'
            },
            {
              name: 'Inv - 13',
              status: 'off'
            },

            {
              name: 'Inv - 14',
              status: 'on'
            },
          ]
        },
        {
          name: 'SCB',
          onCount: '01',
          offCount: '01',
          children: [{
              name: 'SCB - 1',
              status: 'on'
            },
            {
              name: 'SCB - 2',
              status: 'off'
            },
          ]
        },
      ]
    }
  },
  methods: {
    getStatusColor(status) {
      // BACKGROUND COLOR OF DEVICE BASED ON STATUS
      if (status === 'on') return 'bg-green'
      else if (status === 'off') return 'bg-red'
      else return 'bg-grey'
    }
  },
  computed: {
    filteredList() {
      // SEARCH FUNCTIONALITY
      let deviceList = this.allDeviceData.filter(device => {
        return (device.name.toLowerCase().includes(this.search.toLowerCase()))
      })
      return deviceList.length ? deviceList : []
    },
    totalDeviceOn() {
      // TOTAL NUMBER OF DEVICE ON
      let counts = {}
      let deviceOn = this.allDeviceData
      deviceOn.forEach((element, index) => {
        if (!counts[element.name]) {
          counts[element.name] = {}
        }

        element.children.forEach(function (da) {
          if (!counts[element.name][da.status]) {
            counts[element.name][da.status] = 0
          }
          counts[element.name][da.status] += 1
        })
      });
      return counts;
    }
  },
}
</script>

<style scoped>
.status-box {
  padding: 2px 6px;
  font-size: 12px;
  border-radius: 4px;
  min-width: 65px;
}

</style>