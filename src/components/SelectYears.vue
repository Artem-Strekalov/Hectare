<template>
  <div class="content">
    <div class="content__select" @click.prevent="showOptions = !showOptions">
      <span>{{ option }}</span>
      <img
        src="@/assets/image/svg/arrowDown.svg"
        alt=""
        :class="{upendArrow: showOptions}"
      />
    </div>
    <div class="content__options" v-if="showOptions">
      <vuescroll :ops="ops">
        <p
          class="content__options-item"
          v-for="item in options"
          :key="item"
          @click.prevent="selectedOption(item)"
        >
          {{ item }}
        </p>
      </vuescroll>
    </div>
  </div>
</template>
<script>
import vuescroll from 'vuescroll'
export default {
  name: 'SelectYears',
  components: {
    vuescroll,
  },
  data() {
    return {
      showOptions: false,
      option: new Date().getFullYear(),
      options: [
        2014,
        2015,
        2016,
        2017,
        2018,
        2019,
        2020,
        2021,
        2022,
        2023,
        2024,
        2025,
        2026,
        2027,
        2028,
        2029,
        2030,
      ],
      ops: {
        bar: {
          onlyShowBarOnScroll: true,
          keepShow: false,
          background: '#5ca450',
          opacity: 0.8,
          hoverStyle: false,
          specifyBorderRadius: false,
          minSize: 0.1,
          size: '3px',
        },
      },
    }
  },
  methods: {
    selectedOption(item) {
      this.$emit('select', item)
      this.option = item
      this.showOptions = false
    },
  },
}
</script>
<style lang="scss" scoped>
.content {
  position: relative;
  &__select {
    display: flex;
    align-items: center;
    margin-top: 4px;
    cursor: pointer;
    img {
      width: 15px;
    }
    .upendArrow {
      transform: rotate(180deg);
    }
    span {
      margin: 0 10px;
    }
  }
  &__options {
    position: absolute;
    width: 100%;
    height: 200px;
    background: #f1f1f1;
    padding: 10px 0;
    border-radius: 0 0 10px 10px;
    z-index: 1;
    top: 20px;
    &-item {
      cursor: pointer;
      margin-bottom: 10px;
      text-align: center;
    }
    &-item:hover {
      background: #5ca450;
    }
  }
}
</style>
