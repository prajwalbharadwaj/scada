<template>
  <div class="text-center">
    <v-dialog v-model="loadingDialog" width="300" persistent>
      <v-card class="pa-3 text-center">
        <div class="loadingio-spinner-wedges-mgmul0h0hs">
          <div class="ldio-mpvbrsmyz">
            <div>
              <div>
                <div></div>
              </div>
              <div>
                <div></div>
              </div>
              <div>
                <div></div>
              </div>
              <div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import EventBus from "../event-bus";
export default {
  data(){
    return{
      loadingDialog: false
    }
  },
  mounted() {
    EventBus.$on("showLoaderDialog", this.showDialog); // CALL SHOWDIALOG FUNCTION TO SHOW LOADING
    EventBus.$on("hideLoaderDialog", this.hideDialog); // CALL HIDEDIALOG FUNCTION TO HIDE LOADING
  },
  beforeDestroy(){
    EventBus.$off("showLoaderDialog", this.showDialog); // OFF ALL THE THE EVENT WHICH IS ON AFTER LOADING IS COMPLETE
    EventBus.$off("hideLoaderDialog", this.hideDialog); // OFF ALL THE THE EVENT WHICH IS ON AFTER LOADING IS COMPLETE
  },
  methods: {
    showDialog() {
      this.loadingDialog = true; // SHOW LOADING
    },
    hideDialog() {
      this.loadingDialog = false; // HIDE LOADING
    }
  },
}
</script>
<style scoped>
/* LOADING CSS */
@keyframes ldio-mpvbrsmyz {
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
}
.ldio-mpvbrsmyz > div > div {
  transform-origin: 100px 100px;
  animation: ldio-mpvbrsmyz 3.0303030303030303s linear infinite;
  opacity: 0.8
}
.ldio-mpvbrsmyz > div > div > div {
  position: absolute;
  left: 30px;
  top: 30px;
  width: 70px;
  height: 70px;
  border-radius: 70px 0 0 0;
  transform-origin: 100px 100px
}.ldio-mpvbrsmyz > div div:nth-child(1) {
  animation-duration: 0.7575757575757576s
}
.ldio-mpvbrsmyz > div div:nth-child(1) > div {
  background: #e15b64;
  transform: rotate(0deg);
}.ldio-mpvbrsmyz > div div:nth-child(2) {
  animation-duration: 1.0101010101010102s
}
.ldio-mpvbrsmyz > div div:nth-child(2) > div {
  background: #f47e60;
  transform: rotate(0deg);
}.ldio-mpvbrsmyz > div div:nth-child(3) {
  animation-duration: 1.5151515151515151s
}
.ldio-mpvbrsmyz > div div:nth-child(3) > div {
  background: #f8b26a;
  transform: rotate(0deg);
}.ldio-mpvbrsmyz > div div:nth-child(4) {
  animation-duration: 3.0303030303030303s
}
.ldio-mpvbrsmyz > div div:nth-child(4) > div {
  background: #abbd81;
  transform: rotate(0deg);
}
.theme--light .loadingio-spinner-wedges-mgmul0h0hs {
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
  background: #ffffff;
}
.theme--dark .loadingio-spinner-wedges-mgmul0h0hs {
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;
  background: #121212;
}
.ldio-mpvbrsmyz {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(1);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.ldio-mpvbrsmyz div { box-sizing: content-box; }
</style>