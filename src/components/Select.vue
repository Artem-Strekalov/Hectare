<template>
  <div class="content">
    <div class="content__select" @click.prevent="showOptions = !showOptions">
      <img src="@/assets/image/svg/arrowDown.svg" alt="" />
    </div>
    <div class="content__options"></div>
  </div>
</template>
<script>
import vuescroll from 'vuescroll'
export default {
  name: 'Select',
  props: {
    options: {
      type: Array,
      default: [],
    },
  },
  components: {
    vuescroll,
  },
  data() {
    return {
      showOptions: true,
      ops: {
        bar: {
          onlyShowBarOnScroll: true,
          keepShow: false,
          background: '#5ca450',
          opacity: 0.8,
          hoverStyle: false,
          specifyBorderRadius: false,
          minSize: 0.1,
          size: '8px',
        },
      },
    }
  },
}
</script>
<style lang="scss" scoped>
.content {
  width: 100%;
  height: 40px;
  position: relative;
  &__select {
    height: 100%;
    width: 100%;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    background: #f1f1f1;
  }
  &__options{
      position: absolute;
      width: 100%;
      height: 400px;
      background: red;
  }
}
</style>
