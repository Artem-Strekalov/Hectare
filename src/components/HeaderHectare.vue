<template>
  <div class="header">
    <h2 class="title">{{ headerTitle }}</h2>
    <img class="header-logo" src="@/assets/image/svg/logo.svg" alt="" />
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
  .title {
    font-family: Montserrat;
    font-size: 36px;
    color: #5ca450;
  }
}
</style>
