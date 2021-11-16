<template>
  <div class="welcome">
    <div class="welcome__wrapper">
      <div class="welcome__hidden-block"></div>
      <div class="welcome__title">
        Добро пожаловать на<span class="welcome__hectare"> ГЕКТАР!</span>
      </div>
      <div class="welcome__animation">
        <div class="welcome__harvester">
          <img src="@/assets/image/harvester.svg" alt="" />
        </div>
        <div class="welcome__line"></div>
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
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
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
    width: 100%;
  }
  &__harvester {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    background: white;
    animation: harvester;
    animation-duration: 10s;
    animation-iteration-count: 1;
    animation-delay: 0;
    z-index: 100;
  }
  &__line {
    width: 100vw;
    height: 28px;
    background-image: url('~@/assets/image/koloski.jpg');
    background-position: center;
    background-repeat: repeat-x;
    background-size: contain;
    position: absolute;
  }
  @keyframes harvester {
    0% {
      transform: translateX(-100vw);
    }
    100% {
      transform: none;    
    }
  }
}
</style>
