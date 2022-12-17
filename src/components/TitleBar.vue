<script>
export default {
  props: {
    title: String,
    bgcolor: String
  },
  mounted () {
    var win = this.$el.parentElement
    var titlebar = this.$el
    var pos = [0,0,0,0];

    titlebar.onmousedown = startDrag
    document.onkeydown = (ev) => {
      if (ev.key == "Alt") {
        win.onmousedown = startDrag
      }
    }
    document.onkeyup = (ev) => {
      win.onmousedown = null
    }

    function startDrag (ev) {

      ev.preventDefault();
      pos[2] = ev.clientX;
      pos[3] = ev.clientY;
      document.onmouseup = stopDrag
      document.onmousemove = elementDrag

    }
    function elementDrag (ev) {

      ev.preventDefault();

      pos[0] = pos[2] - ev.clientX;
      pos[1] = pos[3] - ev.clientY;
      pos[2] = ev.clientX;
      pos[3] = ev.clientY;

      win.style.top = (win.offsetTop - pos[1]) + "px";
      win.style.left = (win.offsetLeft - pos[0]) + "px";

    }
    function stopDrag () {

      document.onmouseup = null;
      document.onmousemove = null;

    }
  }
}
</script>

<template>
  <div id="titlebar" ref="titlebar">
    <div id="windowbtns">
      <div id="closebtn" ref="closebtn"></div>
      <div id="minbtn" ref="minbtn"></div>
      <div id="maxbtn" ref="maxbtn"></div>
    </div>
    {{ title }}
    <div></div>
  </div>
</template>

<style>
#titlebar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: v-bind('bgcolor');
  padding-inline: 0.5rem;
  box-sizing: border-box;
  cursor: default;
  user-select: none;
  font-size: 14px;
}
#titlebar > * {
  user-select: none;
  flex: 1;
}
#windowbtns {
  display: flex;
  gap: 0.5rem;
}
#windowbtns > * {
  border: 0.5px solid #00000050;
  box-sizing: border-box;
  height: 0.8rem;
  width: 0.8rem;
  border-radius: 50%;
}
#windowbtns > #closebtn {
  background-color: #ff605c;
}
#windowbtns > #minbtn {
  background-color: #ffbd44;
}
#windowbtns > #maxbtn {
  background-color: #00ca4e;
}
</style>