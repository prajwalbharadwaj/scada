<template>
  <div>
    <div>
      <HomeCard/> <!-- TOP HEADER CARD -->
      <HomeChart/> <!-- HOME PAGE LAYOUT -->
    </div>
  </div>
</template>
<script>
import EventBus from './../components/utility/event-bus'
import HomeCard from '../components/homepage/HomeCard'
import HomeChart from '../components/homepage/HomeChart'
export default {
  components:{
    HomeCard,
    HomeChart,
  },
  mounted() {
    // CALL LOADER ON PAGE LOAD USING EVENT BUS
    EventBus.$emit("showLoaderDialog");
    setTimeout(function(){
      // HIDE THE LOADER AFTER 2 SEC
      EventBus.$emit("hideLoaderDialog");
     }, 2000);
  },
}
</script>