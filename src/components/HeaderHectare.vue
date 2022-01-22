<template>
  <div class="header">
    <h2 class="header__title" @click.prevent="goHome" >ГЕКТАР</h2>
    <img class="header__logo" src="@/assets/image/svg/logo.svg" alt="" />
  </div>
</template>
<script>
export default {
  name: 'HeaderHectare',
  props: {
    headerTitle: {
      type: String,
    },
  },
  data() {
    return {}
  },
  methods: {
    goHome() {
      this.$router.push({name: 'home'})
    },
  },
}
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 0 25px;
  width: 100%;
  max-height: 70px;
  height: 100%;
  &__title {
    font-family: Montserrat;
    font-size: 36px;
    color: #5ca450;
    letter-spacing: 9px;
    cursor: pointer;
  }
}
</style>
