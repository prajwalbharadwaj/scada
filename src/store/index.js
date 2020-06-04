import Vue from 'vue'
import Vuex from 'vuex'
import { Object } from 'core-js';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    plantList: [
      {
        plantId: 101,
        avatar: '//logo.clearbit.com/nimble.com',
        status: 'active',
        title: 'Nimble Co.',
        location: 'Telangana',
        totalCapacity: '300.00 kw',
        power: '1',
        alert: 'error'
      },
      {
        plantId: 102,
        avatar: '//logo.clearbit.com/rootech.services',
        status: 'active',
        title: 'Rootechnologies',
        location: 'Karnataka',
        totalCapacity: '65.00 kw',
        alert: 'success'
      },
      {
        plantId: 103,
        avatar: '//logo.clearbit.com/gnome.org',
        status: 'active',
        title: 'Gnomeex',
        location: 'Karnataka',
        totalCapacity: '65.00 kw',
        alert: 'success'
      },
      {
        plantId: 104,
        avatar: '//logo.clearbit.com/spectrum.net',
        status: 'inactive',
        title: 'Greenetworks',
        location: 'Karnataka',
        totalCapacity: '65.00 kw',
        alert: 'error'
      },
      {
        plantId: 105,
        avatar: '//logo.clearbit.com/gamepedia.com',
        status: 'active',
        title: 'Gnome Coms',
        location: 'Karnataka',
        totalCapacity: '65.00 kw',
        alert: 'success'
      },
      {
        plantId: 106,
        avatar: '//logo.clearbit.com/marblesystems.com',
        status: 'active',
        title: 'Marblewood',
        location: 'Karnataka',
        totalCapacity: '65.00 kw',
        alert: 'success'
      },
      {
        plantId: 107,
        avatar: '//logo.clearbit.com/redfcu.org',
        status: 'active',
        title: 'Redustries',
        location: 'Karnataka',
        totalCapacity: '65.00 kw',
        alert: 'success'
      },
      {
        plantId: 108,
        avatar: '//logo.clearbit.com/suntrust.com',
        status: 'inactive',
        title: 'Sunbooks',
        location: 'Karnataka',
        totalCapacity: '65.00 kw',
        alert: 'error'
      },
    ],
    mapLoc: {
      'Telangana': 'tl',
      'Karnataka': 'ka'
    }
  },
  getters: {
    plantLocation: state => {
      var plantLocation = state.plantList.map(loc => {
        let samObj = {}

        


        // return {
        //   plantId: loc.plantId,
        //   avatar: loc.avatar,
        //   status: loc.status,
        //   title: loc.title,
        //   location: loc.location,
        //   totalCapacity: loc.totalCapacity,
        //   alert: loc.alert
        // }

        return samObj
      });
      return plantLocation;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
