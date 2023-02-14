<template>
  <div class="monitor">
    <div class="window">
      <slot/>
    </div>
    <div class="panel"></div>
    <div class="root"></div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
@keyframes translateShadow {
  0% {
    box-shadow: -200px -20px 200px #ffffff;
  }
  50% {
    box-shadow: 300px -30px 200px #61234E;
  }
  100% {
    box-shadow: -200px -20px 200px #ffffff;
  }
}
.monitor {
  background: transparent;
  position: absolute;
  width: 100%;
  bottom: 10%;
  height: 90%;
  border-radius: 20px;
  grid-area: g;
  z-index: 4;
  animation-name: translateShadow;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  box-sizing: border-box;
  .panel {
    border-color: inherit;
    height: 100%;
    width: 10%;
    right: 0;
    left: unset;
    border: none;
    border-left: 5px solid;
    position: absolute;
    bottom: 0;
    box-sizing: border-box;
    @media screen and (max-width: 585px) {
      width: 5%;
    }
    &:before {
      content: '';
      display: block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
    }
  }
  .window {
    overflow-y: scroll;
    overflow-x: hidden;
    position: absolute;
    height: 100%;
    width: 100%;
    border-radius: 10px;
    left: 0;
  }
}
</style>