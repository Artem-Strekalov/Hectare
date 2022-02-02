<template>
  <div class="warehousecard">
    <div class="warehousecard__content">
      <div class="warehousecard__content-top">
        <div class="warehousecard__center-block">
          <div class="warehousecard__item">
            Культура: {{ warehouseCards.culture }}
          </div>
          <div class="warehousecard__item">
            Сорт: {{ warehouseCards.variety }}
          </div>
          <div class="warehousecard__item">
            Клейковина: {{ warehouseCards.gluten }}
          </div>
          <div class="warehousecard__item">
            Белок: {{ warehouseCards.protein }}
          </div>
          <div class="warehousecard__item">
            Натура: {{ warehouseCards.nature }}
          </div>
          <div class="warehousecard__item">
            Масличность: {{ warehouseCards.oilContent }}
          </div>
        </div>
        <div class="warehousecard__right-block">
          <div class="warehousecard__item warehousecard__warehousenumber">
            Склад № {{ warehouseCards.warehouseNumber }}
          </div>
          <div class="warehousecard__numcar">
            Номер машины: <br />
            {{ warehouseCards.numberCar }}
          </div>
        </div>
        <div class="warehousecard__left-block">
          {{ warehouseCards.weight }}т
        </div>
      </div>
      <div class="warehousecard__content-bottom">
        <div class="warehousecard__date">
          {{ warehouseCards.date + ' ' + warehouseCards.time }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Hinput from './Hinput.vue'
import vuescroll from 'vuescroll'
import Calendar from './Calendar.vue'
export default {
  name: 'CornLoading',
  components: {
    Calendar,
    Hinput,
    vuescroll,
  },
  props: {
    warehouseCards: {
      type: Object,
    },
  },
  data() {
    return {}
  },
  mounted() {},
  methods: {},
  computed: {},
  watch: {},
}
</script>
<style lang="scss" scoped>
.warehousecard {
  min-width: 318px;
  /* измени здесь ширину на 100% когда будешь делать адаптив */
  width: 48.8%;
  min-height: 210px;
  background: #e3e8e2;
  margin: 9px 10px 9px 0;
  position: relative;
  @media (max-width: 1356px) {
    width: 100%;
  }
  &__content {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: #ffffff;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    outline: 2px #76b16d solid;
  }
  &__content-top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
  &__left-block {
    font-size: 48px;
    font-weight: 300;
    height: 100%;
    vertical-align: top;
    padding: 5px 0 0 14px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  &__center-block {
  }
  &__right-block {
  }
  &__content-bottom {
    display: flex;
    justify-content: end;
    width: 100%;
  }
  &__numcar {
    font-size: 17px;
    font-weight: 400;
  }
  &__date {
    font-size: 15px;
    font-weight: 400;
    padding: 2px 10px 0px 8px;
    border-radius: 10px;
    background: #7bb571;
    color: white;
    z-index: 1;
    margin: 0 0 -22px 0;
  }
  &__right-block {
    padding: 1px 5px 0px 0px;
  }
  &__gluten {
  }
  &__nature {
  }
  &__protein {
  }
  &__item {
    font-size: 15px;
    font-weight: 400;
    padding: 0 3px 5px 0;
  }
  &__warehousenumber {
    font-size: 22px;
    font-weight: 400;
    height: 110px;
  }
}
</style>
