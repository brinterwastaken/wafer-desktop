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
    <h1 class="windowheading">Welcome to <span class="highlight">Wafer Desktop!</span></h1>
    <h3 class="sectiontitle">Note - this is only a concept, it is not intended to, and most likely will never be a real desktop environment</h3>
    <h3 class="sectiontitle"><a href="https://brin.is-a.dev/gh?repo=wafer-desktop" class="highlight" target="_blank">Source Code</a></h3>
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
  resize: both;
  overflow: auto;
  padding: 3rem;
  box-sizing: border-box;

  background: #212121bf;
  backdrop-filter: blur(25px);

  border-radius: 0.5rem;
  border: 0.5px solid #ffffff1f;
  box-shadow: 0 5px 10px #000000af;

  display: flex;
  align-items: center;
  flex-direction: column;

}
h1.windowheading {
  text-align: center;
  line-height: 120%;
  cursor: default;
  font-weight: 500;
}
h3.sectiontitle {
  text-align: center;
  line-height: 150%;
  cursor: default;
  font-weight: normal;
}
.highlight {
  all: unset;
  position: relative;
  color: #44cdff;
}
.highlight::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0%;
  height: 0.1em;
  background: linear-gradient(90deg, #6793d1 0%, #44cdff 100%);
  border-radius: 0.125rem;
  transition: width 250ms ease-out, left 250ms ease-out;
}
.highlight:hover::after {
  left: 0%;
  width: 100%;
}

</style>