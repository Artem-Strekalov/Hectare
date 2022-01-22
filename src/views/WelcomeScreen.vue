<template>
  <div class="welcome">
    <div class="welcome__title">ГЕКТАР</div>
    <div class="welcome__line-1"></div>
    <div class="welcome__line-2"></div>
  </div>
</template>

<script>
export default {
  components: {},
  name: 'welcome',
  data() {
    return {}
  },
}
</script>
<style lang="scss" scoped>
.welcome {
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  &__title {
    font-family: Montserrat;
    font-size: 110px;
    color: #5ca450;
    padding: 0 0 10px 215px;
    z-index: 11;
    animation-name: title;
    animation-duration: 2s;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(.16,.29,.23,.85);
  }
  &__line-1 {
    width: 303%;
    height: 100px;
    position: absolute;
    // background: linear-gradient(to bottom,  #09a129, #14cc60);
    background: #5ca450;
    transform: rotate(-35deg) translate(-155vw, 63vh);
    z-index: 10;
    animation-name: firstline;
    animation-duration: 5s;
    animation-delay: 2.58s;
    animation-fill-mode: forwards;
  }
  &__line-2 {
    position: absolute;
    height: 100px;
    width: 303%;
    // background: linear-gradient(to bottom, #14cc60, #09a129);
        background: #5ca450;

    transform: rotate(33.5deg) translate(-207vw, 21vh);
    z-index: 9;
    animation-name: secondline;
    animation-duration: 3s;
    animation-delay: 2s;
    animation-fill-mode: forwards;
  }
  @keyframes firstline {
    0%{
    
    }
    100%{
       transform: rotate(-35deg) translate(100vw, 63vh);
    }

  }
  @keyframes secondline {
    0%{

    }
    100%{
      transform: rotate(33.5deg) translate(61vw, 21vh);
    }
  }
  @keyframes title {
    0%{
      opacity: 0;
    }
    45%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }
}
</style>
