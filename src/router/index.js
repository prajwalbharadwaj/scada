// IMPORT ALL THE REQUIRED FILES TO BE ROUTE
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Container from '../views/Container'
import HomePage from '../views/HomePage.vue'
import Device from '../views/Device.vue'
import Alert from '../views/Alert.vue'
import Report from '../views/Report.vue'
import Analytics from '../views/Analytics.vue'
import MorePages from '../views/MorePages.vue'
import Support from '../views/Support.vue'
import ScbDummy from '../views/ScbDummy.vue'
import Pricing from '../views/Pricing.vue'
import Admin from '../views/Admin.vue'




import Inverter from '../components/device/Inverter.vue'
import SCB from '../components/device/SCB.vue'
import AdvanceStringInv from '../components/device/AdvanceStringInv.vue'
import MFM from '../components/device/MFM.vue'
import WeatherStation from '../components/device/WeatherStation.vue'
import OtherSensor from '../components/device/OtherSensor.vue'

Vue.use(VueRouter)

const routes = [{
  // LOGIN TO BE LOADED FIRST - PARENT
    path: '/',
    name: 'login',
    component: Login,
  },
  {
    path: '/container',
    name: 'container',
    component: Container,
    children: [{
      path: '/homepage',
      name: 'homepage',
      component: HomePage
    }, {
      path: '/device',
      name: 'device',
      component: Device,
      children: [{
          path: '/device/inverter',
          name: 'inverter',
          component: Inverter
        },
        {
          path: '/device/scb',
          name: 'scb',
          component: SCB
        },
        {
          path: '/device/advStringInv',
          name: 'advStringInv',
          component: AdvanceStringInv
        },
        {
          path: '/device/mfm',
          name: 'mfm',
          component: MFM
        },
        {
          path: '/device/weatherStation',
          name: 'weatherStation',
          component: WeatherStation
        },
        {
          path: '/device/otherSensor',
          name: 'otherSensor',
          component: OtherSensor
        }
      ]
    }, {
      path: '/alert',
      name: 'alert',
      component: Alert
    }, {
      path: '/report',
      name: 'report',
      component: Report
    }, {
      path: '/analytics',
      name: 'analytics',
      component: Analytics
    }, {
      path: '/morepages',
      name: 'morepages',
      component: MorePages
    }, {
      path: '/support',
      name: 'support',
      component: Support
    }, {
      path: '/scbdummy',
      name: 'ScbDummy',
      component: ScbDummy
    }, {
      path: '/pricing',
      name: 'pricing',
      component: Pricing
    }, {
      path: '/admin',
      name: 'admin',
      component: Admin
    }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
