<template>
  <div class="welcome">
    <div class="welcome__wrapper">
      <div class="welcome__animation">
        <div class="welcome__harvester">
          <img src="@/assets/image/svg/harvester.svg" alt="" />
        </div>
        <div class="welcome__line"></div>
      </div>
      <div class="welcome__title">
        Добро пожаловать на<span class="welcome__hectare"> ГЕКТАР!</span>
      </div>
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
  &__wrapper {
    display: flex;
    align-items: flex-end;
  }
  &__title {
    font-family: Inter;
    font-weight: 600;
    font-size: 30px;
    color: #222222;
    padding: 0 15px;
  }
  &__hectare {
    color: #5ca450;
  }
  &__animation {
    display: flex;
    align-items: flex-end;
  }
  &__harvester {
    display: flex;
    justify-content: flex-end;
    width: 380px;
    background: white;
    animation: harvester;
    animation-duration: 3s;
    animation-iteration-count: 1;
    animation-delay: 0;
    z-index: 100;
  }
  &__line {
    width: 380px;
    height: 30px;
    background-image: url('~@/assets/image/svg/koloski.png');
    background-position: center;
    background-repeat: repeat-x;
    background-size: contain;
    position: absolute;
  }
  @keyframes harvester {
    0% {
      transform: translateX(-600px);
    }
    100% {
      transform: none;
    }
  }
}
</style>
