<template>
  <div>
    <v-menu v-model="menu" :close-on-content-click="false" :nudge-bottom="50" offset-x min-width="400" max-width="400">

      <template v-slot:activator="{ on }" class="mx-3">
        <v-btn icon v-on="on" class="white--text">
          <v-badge class="align-self-center heartBeat infinite-animate-1s">
            <template v-slot:badge>
              <span> {{items.length}} </span>
            </template>
            <i class="far fa-bell fa-lg"></i>
          </v-badge>
        </v-btn>
      </template>
      <v-card>
        <v-list class="primary">
          <v-list-item>
            <span class="white--text">New Alerts : {{this.alertNewCount}} </span>
            <v-spacer></v-spacer>
            <span class="white--text">Total: {{this.totalAlert}} </span>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list class="card-height-250 py-0">
          <template v-for="(item, index) in items">
            <v-list-item :key="item.plantId" :class="`outer-list divider bl-5 border-${item.status}`">

              <v-list-item-avatar class="">
                <v-img :src="item.avatar"></v-img>
              </v-list-item-avatar>

              <v-list-item-content class="pa-0">
                <v-list-item-title> {{item.title}}
                  <v-chip :class="`ma-2 pa-0 px-2 text-uppercase font-weight-bold alert-${item.status}`" x-small label>
                    {{item.status}}
                  </v-chip>
                </v-list-item-title>
                <v-list-item-subtitle class="d-flex">
                  <span class="min-max-width-150">{{item.alertMessage}}</span>
                  <v-spacer></v-spacer>
                  {{item.alertTime}}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-card>
    </v-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      left: false,
      fav: true,
      message: false,
      hints: true,
      menu: false,
      alertNew: null,
      count: null,
      alertNewCount: null,
      totalAlert: null,
      items: [
        {
          avatar: 'https://dummyimage.com/128x128/eeeeee/000000',
          title: 'Inverter Fault',
          alertMessage: 'sampleMessage',
          alertTime: '06:23',
          status:'resolved',
        },
        {
          avatar: 'https://dummyimage.com/128x128/eeeeee/000000',
          title: 'Grid Failure',
          alertMessage: 'sampleMessage',
          alertTime: '06:23',
          status:'resolved',
        },
        {
          avatar: 'https://dummyimage.com/128x128/eeeeee/000000',
          title: 'Inverter Fault',
          alertMessage: 'sampleMessage',
          alertTime: '06:23',
          status:'new',
        },
        {
          avatar: 'https://dummyimage.com/128x128/eeeeee/000000',
          title: 'Battery Low Voltage',
          alertMessage: 'sampleMessage',
          alertTime: '06:23',
          status:'acknowledge',
        },
        {
          avatar: 'https://dummyimage.com/128x128/eeeeee/000000',
          title: 'Shutdown Failure',
          alertMessage: 'Ut adipisicing incididunt officia nostrud esse sunt anim mollit.',
          alertTime: '10 Feb 2020, 14:45',
          status:'new',
        },
        {
          avatar: 'https://dummyimage.com/128x128/eeeeee/000000',
          title: 'Shutdown Failure',
          alertMessage: 'sampleMessage',
          alertTime: '06:23',
          status:'new',
        },
      ],
    }
  },
  mounted() {
    this.getNewAlertCount();
    this.totalAlertCount()
  },
  methods: {
    getNewAlertCount() {
      this.items.forEach(element => {
        if(element.status == 'new'){
          this.count += 1;
        }
        if(this.count < 10) {
          this.alertNewCount = '0'+ this.count
        }
        else {
          this.alertNewCount = this.count
        }
      });
    },
    totalAlertCount() {
      if(this.items.length < 10) {
        this.totalAlert = '0'+ this.items.length
      }
      else {
        this.totalAlert = this.items.length
      }
    }
  },
}
</script>