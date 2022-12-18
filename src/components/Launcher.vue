<script setup>
import { useWindowStore } from '../stores/windows'
</script>

<script>
export default {
  mounted () {
    var launcher = this.$refs.launcher
    document.onkeydown = (k) => {
      if (k.key == 'Escape') {
        useWindowStore().openwindows.indexOf('launcher') !== -1 ? useWindowStore().closeWindow('launcher') : null;
      }
    }
  },
  methods : {
    clickFunction : function (appname = "") {
      const windows = useWindowStore()
      console.log(appname)
      windows.openWindow(appname)
      windows.closeWindow("launcher")
    }
  }
}
</script>
<template>
  <div id="launcher" ref="launcher">
    <div id="launchergrid">
      <div><img v-on:click="() => { clickFunction('files') }" src="https://media.macosicons.com/parse/files/macOSicons/b074f5155483156798db46611dd625c4_Finder.png">Files</div>
      <div><img v-on:click="() => { clickFunction('firefox') }" src="https://media.macosicons.com/parse/files/macOSicons/a545af1f9add79e21f321436ef33a671_low_res_Firefox.png">Firefox</div>
      <div><img v-on:click="() => { clickFunction('discord') }" src="https://media.macosicons.com/parse/files/macOSicons/9b203989fca72b62534d220947555b52_low_res_Discord_Winter.png">Discord</div>
      <div><img v-on:click="() => { clickFunction('welcome') }" src="https://media.macosicons.com/parse/files/macOSicons/a2664a618ece36f477aa9d03e11c5ba7_low_res_Tips_Alt.png">Welcome</div>
      <div><img v-on:click="() => { clickFunction('music') }" src="https://media.macosicons.com/parse/files/macOSicons/27e808a6452ae4dc271987e18c217c49_low_res_Music.png">Music</div>
      <div><img v-on:click="() => { clickFunction('code') }" src="https://media.macosicons.com/parse/files/macOSicons/47e2a975bc107350a14a12c9859a1595_low_res_Visual_Studio_Code.png">VSCode</div>
      <div><img v-on:click="() => { clickFunction('terminal') }" src="https://media.macosicons.com/parse/files/macOSicons/a1249c43ec5c19f1636b4c0b2f72dcaf_low_res_iterm2.png">Terminal</div>
      <div><img v-on:click="() => { clickFunction('photos') }" src="https://media.macosicons.com/parse/files/macOSicons/913d0ad86a46c87b921e1110939f7edb_low_res_Windows_Photos.png">Photos</div>
      <div><img v-on:click="() => { clickFunction('davinciresolve') }" src="https://media.macosicons.com/parse/files/macOSicons/90bb9c7a88eec52ecb325f219342334f_low_res_DaVinci_Resolve_17.png">DaVinci Resolve</div>
      <div><img v-on:click="() => { clickFunction('settings') }" src="https://media.macosicons.com/parse/files/macOSicons/aa77df2eea918650e933e76bdcce92e1_Settings.png">Settings</div>
    </div>
  </div>
</template>

<style>
#launcher {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  height: 100vh;
  width: 100vw;
  background: url(../assets/blurred.png) no-repeat center center fixed;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items:flex-start;
}

#launchergrid {
  margin: 7rem;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: auto auto auto auto auto;
  gap: 3rem;
}

#launchergrid div {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 0.7rem;
  border-radius: 2.25rem;
  padding: 0.5rem 0.5rem 1rem 0.5rem;
  transition: background-color 100ms;
}

#launchergrid div:hover {
  background: #ffffff2f;
}

#launchergrid img {
  width: 8rem;
  height: 8rem;
  margin-bottom: 0.25rem;
}

</style>