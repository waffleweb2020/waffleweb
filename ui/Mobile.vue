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
  max-width: 400px;
  width: 100%;
  bottom: 10%;
  height: 80%;
  transform: translateX(-50%);
  left: 50%;
  border-radius: 20px;
  grid-area: g;
  animation-name: translateShadow;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  @media screen and (max-width: 767px){
    width: 90%;
  }
  .panel {
    border-top: 5px solid;
    border-color: inherit;
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
  .window {
    overflow: scroll;
    position: absolute;
    height: 100%;
    width: 100%;
    border-radius: 10px;
    left: 0;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>