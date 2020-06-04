<template>
  <div class="displayTime">{{currentTime}}</div> <!-- DISPLAY CURRENT DATE AND TIME -->
</template>
<script>
import moment from "moment";

export default {
  data() {
    return {
      datenow: "",
      time: "",
      currentTime: moment().format("YYYY-MM-DD HH:mm:ss"),
      interval: null
    };
  },
  mounted() {
    this.interval = setInterval(() => {
      // DISPLAY AND UPDATE CURRENT DATE AND TIME WITH 1 SEC INTERVAL
      this.currentTime = moment().format("DD MMM YYYY, HH:mm:ss");
    }, 1000);
  },
};
</script>
<style scoped>
.displayTime {
  width: 170px;
}
</style>