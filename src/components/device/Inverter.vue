<template>
  <div>
    <MainCard/>
  </div>
</template>
<script>
import EventBus from '../utility/event-bus'
import MainCard from './inverter/MainCard'
export default {
  components: {
    MainCard,
  },
  mounted() {
    // EventBus.$emit("showLoaderDialog");
    // setTimeout(function(){
    //   EventBus.$emit("hideLoaderDialog");
    //  }, 2000);
  },
}
</script>