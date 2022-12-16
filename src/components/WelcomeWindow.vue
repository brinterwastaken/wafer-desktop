<script>
import TitleBar from './TitleBar.vue';
export default {
  components: {
    TitleBar
  },
  data () {
    return {
      title: "Welcome to Wafer",
      bgcolor: "#00000000"
    }
  }
}
</script>

<template>
  <div id="welcomewindow">
    <TitleBar :title="title" :bgcolor="bgcolor"/>
  </div>
</template>

<style>
#welcomewindow {
  position: absolute;
  top: calc(50% - 17.5rem);
  left: calc(50% - 25rem);
  min-width: 20rem;
  min-height: 25rem;
  width: 50rem;
  height: 35rem;
  background: #212121bf;
  backdrop-filter: blur(25px);
  resize: both;
  overflow: auto;
  border-radius: 0.5rem;
  border: 0.5px solid #ffffff1f;
  box-shadow: 0 5px 10px #000000af;
}
</style>