<template>
<!-- FOOTER FOR ALL THE PAGE -->
  <div>
    <v-footer app class="footer-card">
      <v-spacer></v-spacer>
      <div>COPYRIGHT © {{ currentYear }} <strong>EnerMAN Technologies Pvt Ltd</strong>, All rights Reserved</div>
      <v-spacer></v-spacer>
    </v-footer>
  </div>
</template>
<script>
var moment = require('moment');
export default {
  data() {
    return {
      currentYear: new Date().toLocaleString(),
    }
  },
  mounted() {
    this.time();
  },
  methods:{
    time() {
      // FETCH YEAR AND DISPLAY IT
      this.currentYear = moment().format("YYYY");
    },
  }
}
</script>
<style scoped>
.theme--light .footer-card {
  color: #6a7a8c !important;
  background-color: #F5F5F5 !important;
  font-size: 14px;
}

.theme--dark .footer-card {
  color: #6a7a8c !important;
  background-color: #121212 !important;
  font-size: 14px;
}
</style>