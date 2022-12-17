<script setup>
import Dock from './components/Dock.vue'
import MenuBar from './components/MenuBar.vue'
import WelcomeWindow from './components/WelcomeWindow.vue'
import { def } from '@vue/shared'
import { useWindowStore } from './stores/windows'
</script>

<template>
  <MenuBar/>
  <Dock/>
  <WelcomeWindow v-if="useWindowStore().welcomeopen"/>
</template>

<style scoped>
</style>
