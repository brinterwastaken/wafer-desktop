<script setup>
import { useWindowStore } from '../stores/windows'
</script>

<script>
export default {
  mounted() {
    var dock = this.$refs.dock

    var zoomsize = "5rem"
    var step1 = "4.5rem"
    var step2 = "4rem"
    var originalsize = "3.5rem"
    
    dock.onmouseover = (e) => {
      if (e.target.id != "dock" && e.target.className != "divider") {
        e.target.style.height = zoomsize
        e.target.style.width = zoomsize
        var nextitem = e.target.nextSibling
        if (nextitem) {
          var nextseconditem = e.target.nextSibling.nextSibling
          if (nextitem.className != "divider") {
            nextitem.style.height = step1
            nextitem.style.width = step1   
          }
          if (nextseconditem && nextseconditem.className != "divider") {
            nextseconditem.style.height = step2
            nextseconditem.style.width = step2
          }
        }
        var previousitem = e.target.previousSibling
        if (previousitem) {
          var previousseconditem = e.target.previousSibling.previousSibling
          if (previousitem.className != "divider") {
            previousitem.style.width = step1
            previousitem.style.height = step1
          }
          if (previousseconditem && previousseconditem.className != "divider") {
            previousseconditem.style.width = step2
            previousseconditem.style.height = step2
          }
        }
      }
    }
    dock.onmouseout = (e) => {
      dock.childNodes.forEach((childitem) => {
        if (childitem.tagName == "IMG") {
          childitem.style.width = originalsize
          childitem.style.height = originalsize
        }
      })
    }
  },
  methods : {
    clickFunction : function (appname = "") {
      const windows = useWindowStore()
      console.log(appname)
      windows.toggleWindow(appname)
      if (appname != 'launcher' && windows.checkOpen('launcher')) windows.closeWindow('launcher') 
    }
  }
}
</script>

<template>
  <div id="dock-container">
    <div id="dock" ref="dock">
      <img v-on:click="() => { clickFunction('files') }" src="https://media.macosicons.com/parse/files/macOSicons/b074f5155483156798db46611dd625c4_Finder.png">
      <img v-on:click="() => { clickFunction('launcher') }" src="https://media.macosicons.com/parse/files/macOSicons/24357c6b82fb782c954bf2705dd4bb68_low_res_launchpad.png">
      <img v-on:click="() => { clickFunction('firefox') }" src="https://media.macosicons.com/parse/files/macOSicons/a545af1f9add79e21f321436ef33a671_low_res_Firefox.png">
      <img v-on:click="() => { clickFunction('welcome') }" src="https://media.macosicons.com/parse/files/macOSicons/a2664a618ece36f477aa9d03e11c5ba7_low_res_Tips_Alt.png">
      <img v-on:click="() => { clickFunction('discord') }" src="https://media.macosicons.com/parse/files/macOSicons/9b203989fca72b62534d220947555b52_low_res_Discord_Winter.png">
      <img v-on:click="() => { clickFunction('music') }" src="https://media.macosicons.com/parse/files/macOSicons/27e808a6452ae4dc271987e18c217c49_low_res_Music.png">
      <img v-on:click="() => { clickFunction('code') }" src="https://media.macosicons.com/parse/files/macOSicons/47e2a975bc107350a14a12c9859a1595_low_res_Visual_Studio_Code.png">
      <img v-on:click="() => { clickFunction('terminal') }" src="https://media.macosicons.com/parse/files/macOSicons/a1249c43ec5c19f1636b4c0b2f72dcaf_low_res_iterm2.png">
      <img v-on:click="() => { clickFunction('photos') }" src="https://media.macosicons.com/parse/files/macOSicons/913d0ad86a46c87b921e1110939f7edb_low_res_Windows_Photos.png">
      <img v-on:click="() => { clickFunction('davinciresolve') }" src="https://media.macosicons.com/parse/files/macOSicons/90bb9c7a88eec52ecb325f219342334f_low_res_DaVinci_Resolve_17.png">
      <img v-on:click="() => { clickFunction('settings') }" src="https://media.macosicons.com/parse/files/macOSicons/aa77df2eea918650e933e76bdcce92e1_Settings.png">
      <div class="divider"></div>
      <img v-on:click="() => { clickFunction('trash') }" src="https://media.macosicons.com/parse/files/macOSicons/6f6db819037eda48cfe784bc8d414bb9_low_res_1619219604839.png">
    </div>
  </div>
</template>

<style>
#dock-container {
  display: flex;
  justify-content: center;
}
#dock {
  position: absolute;
  z-index: 1;
  bottom: 0.1rem;
  display: flex;
  background: #21212184;
  backdrop-filter: blur(25px);
  justify-content: center;
  padding: 0.25rem;
  height: 3.75rem;
  border-radius: 1rem;
  align-items: end;
  border: 0.5px solid #ffffff2f;
}
#dock img {
  width: 3.5rem;
  height: 3.5rem;
  margin-bottom: 0.25rem;
  transition: width 200ms, height 200ms;
}
#dock img:active {
  filter: brightness(70%);
}
.divider {
  width: 0.05rem;
  background: #ffffff5f;
  height: 3.25rem;
  margin-bottom: 0.25rem;
  margin-inline: 0.5rem;
}
</style>
