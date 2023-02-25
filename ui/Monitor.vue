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
    animation-name: translateShadow;
    animation-duration: 10s;
    animation-iteration-count: infinite;
    box-sizing: border-box;
    .panel {
      width: 100%;
      height: 46px;
      position: absolute;
      bottom: 0;
      left: 0px;
      box-sizing: border-box;
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
    .root {
      width: 10%;
      height: 50px;
      background: transparent;
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      &:before {
        content: '';
        display: block;
        width: 250%;
        height: 5px;
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    .window {
      overflow: scroll;
      position: absolute;
      height: 100%;
      width: 100%;
      border-radius: 10px;
      left: 0;
      &::-webkit-scrollbar {
        width: 10px;
        background: transparent;
      }
      &::-webkit-scrollbar-thumb {
        background: #2bb3c0;
        border-radius: 20px;
      }
    }
  }
</style>