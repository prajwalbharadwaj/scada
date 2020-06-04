import Vue from 'vue' // IMPORT VUE
import App from './App.vue' // IMPORT APP.VUE
import router from './router' // IMPORT ROUTER
import store from './store' // IMPORT STORE
import './registerServiceWorker' // IMPORT SERVICEWORKER
import vuetify from './plugins/vuetify'; // IMPORT VUETIFY
import '@fortawesome/fontawesome-free/css/all.css' // IMPORT FONT AWESOME
import ApexCharts from 'apexcharts' // IMPORT APEX CHART 
import VueApexCharts from 'vue-apexcharts' // IMPORT VUE APEX CHART

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
