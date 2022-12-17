import { defineStore } from 'pinia'

export const useWindowStore = defineStore('windows', {
  state: () => {
    return { welcomeopen: true }
  }
})