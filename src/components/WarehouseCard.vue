<template>
  <div class="warehouseCard">
    <div class="warehouseCard__content">
      <div class="warehouseCard__content-top">
        <div class="warehouseCard__left-block">{{warehouseCards.weight}}т</div>
        <div class="warehouseCard__right-block">
          <div class="warehouseCard__warehouse-number">Склад № {{warehouseCards.warehouseNumber}}</div>
          <div class="warehouseCard__protein">Клейковина: {{warehouseCards.gluten}}</div>
          <div class="warehouseCard__gluten">Белок: {{warehouseCards.protein}}</div>
          <div class="warehouseCard__nature">Натура: {{warehouseCards.nature}}</div>
        </div>
      </div>
      <div class="warehouseCard__content-bottom">
        <div class="warehouseCard__numberCar">
          Номер машины: {{warehouseCards.cornLoadingNumberCar}}
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
    return {
      // warehouseNumber: null,
      // cartId: null,
      // showForm: false,
      // endTillage: null,
      // nature: null,
      // weight: null,
      // cornLoadingNumberCar: null,
      // startTillage: null,
      // protein: null,
      // showChangeForm: false,
      // gluten: null,
      // cornLoadCarts: [{}],
    }
  },
  mounted() {},
  methods: {},
  computed: {},
  watch: {},
}
</script>
<style lang="scss" scoped>
.warehouseCard {
  min-width: 328px;
  /* измени здесь ширину на 100% когда будешь делать адаптив */
  width: 100%;
  height: 200px;
  background: #e3e8e2;
  border: 10px solid #e3e8e2;
  position: relative;
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
  }
  &__left-block {
    font-size: 45px;
    font-weight: 300;
    height: 100%;
    vertical-align: top;
    padding: 3px 0 0 17px;
  }
  &__content-top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
  &__content-bottom {
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
  &__warehouse-number {
    font-size: 19px;
    font-weight: 450;
    padding: 0 3px 5px 0;
  }
}
</style>
