<template>
  <div class="forgot">
    <HeaderHectare></HeaderHectare>
    <div class="forgot__main">
      <h2 class="forgot__main-name">Восстановление пароля</h2>
    </div>
  </div>
</template>
<script>
import HeaderHectare from '@/components/HeaderHectare'
export default {
  name: 'ForgotPassword',

  components: {
    HeaderHectare,
  },
}
</script>
<style lang="scss" scoped>
.forgot {
  width: 100%;
  height: 100vh;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  font-family: Inter;
  &__main {
    max-width: 556px;
    width: 100%;
    margin: auto;
    &-name {
      font-weight: 600;
      font-size: 20px;
      color: #222222;
    }
  }
}
</style>
