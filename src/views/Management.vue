<template>
  <div class="mgt">
    <div class="mgt__nav"></div>
    <div class="mgt__main"></div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.mgt {
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  display: flex;
  &__nav {
    width: 329px;
    height: 100%;
    background: #fff;
  }
  &__main {
      width: 100%;
    height: 100%;
    background: #e3e8e2;
  }
}
/* .mgt {
  font-family: Montserrat;
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  display: flex;
  &__aside {
    width: 240px;
    height: 100%;
    background: #fff;
    padding: 0 15px 15px 15px;
    position: fixed;
    float: left;
    display: flex;
    flex-direction: column;
    .mgt__header {
      text-align: center;
      padding: 10px;
      width: 100%;
      height: 55px;
      border-bottom: 1px solid #999999;
      h1 {
        font-size: 36px;
        color: #5ca450;
      }
    }
  }
  &__main {
    width: 100%;
    min-height: 100vh;

    background: #e3e8e2;
  }
} */
</style>
