import { checkCompatEnabled } from '@vue/compiler-core';
import { defineStore } from 'pinia'

export const useWindowStore = defineStore('windows', {
  state: () => {
    return { openwindows: ["welcome"] }
  },
  actions: {
    toggleWindow(win = "welcome") {

      var index = this.openwindows.indexOf(win);

      if (index === -1) {
        this.openwindows.push(win);
      } else {
        this.openwindows.splice(index, 1);
      }

    },
    closeWindow(win = "welcome") {

      var index = this.openwindows.indexOf(win);
      this.openwindows.splice(index, 1);

    },
    openWindow(win = "welcome") {

      var index = this.openwindows.indexOf(win);

      if (index === -1) {
        this.openwindows.push(win);
      }

    },
    checkOpen(win = "welcome") {
      
      return this.openwindows.indexOf(win) !== -1

    }
  }
})