<template>
  <div class="welcome">
    <div class="welcome__title">
      Добро пожаловать на<span class="welcome__hectare"> ГЕКТАР!</span>
    </div>
    <div class="welcome__animation">
      <img src="@/assets/image/svg/logo.svg" alt="" />
    </div>
  </div>
</template>

<script>
import HeaderHectare from '@/components/HeaderHectare'
export default {
  components: {
    HeaderHectare,
  },
  name: 'welcome',
  data() {
    return {}
  },
}
</script>
<style lang="scss" scoped>
.welcome {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  &__title {
    font-family: Inter;
    font-weight: 600;
    font-size: 30px;
    line-height: 36px;
    color: #222222;
    animation: scroll;
    animation-duration: 1.3s;
    animation-iteration-count: infinite;
    animation-delay: 0;
    &__hectare {
      color: #5ca450;
    }
  }

  &__animation {
    img {
      animation: harvester;
      animation-duration: 3s;
      animation-iteration-count: 1;
      animation-delay: 0;
    }
  }
  @keyframes harvester {
    0% {
      transform: skewX(-20deg) translateX(600px);
    }
    25% {
      transform: rotate(15deg);
    }
    50% {
      transform: skewX(20deg) translateX(-600px);
    }
    90% {
      transform: skewX(-10deg);
    }
    100% {
      transform: none;
    }
  }
}
</style>
