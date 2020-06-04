import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: '#1A76D2',
        // secondary: '#b0bec5',
        // accent: '#8c9eff',
        warning: '#F6B132',
        success: '#52AF50',
        error: '#ED4635',
      },
    },
  },
});
