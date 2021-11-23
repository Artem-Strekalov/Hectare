<template>
  <div class="mgt">
    <div class="mgt__header">
      <h1 class="mgt__header-title">ГЕКТАР</h1>
      <div class="mgt__header-back">
        <span class="material-icons arrow">
          arrow_back
        </span>
        <span class="back-title">Назад</span>
        <span class="mgt__header-back-name">Участок № 1, 100га</span>
      </div>
    </div>
    <div class="mgt__main">
      <div class="mgt__main-nav">
        <ul class="mgt__main-nav-list">
          <li
            class="mgt__main-nav-item mgt__first-item"
            :class="{mgt__itemActive: navItem === 'tillage'}"
            @click.prevent="navItem = 'tillage'"
          >
            Подготовка почвы
          </li>
          <li
            class="mgt__main-nav-item"
            :class="{mgt__itemActive: navItem === 'sawing'}"
            @click.prevent="navItem = 'sawing'"
          >
            Сев
          </li>
          <li
            class="mgt__main-nav-item"
            :class="{mgt__itemActive: navItem === 'additionally'}"
            @click.prevent="navItem = 'additionally'"
          >
            Дополнительные работы
          </li>
          <li
            class="mgt__main-nav-item"
            :class="{mgt__itemActive: navItem === 'harvest'}"
            @click.prevent="navItem = 'harvest'"
          >
            Уборка урожая
          </li>
        </ul>
      </div>
      <Tillage v-if="navItem === 'tillage'"></Tillage>
    </div>
  </div>
</template>
<script>
import Tillage from '@/components/management/Tillage.vue'
export default {
  components: {
    Tillage,
  },
  data() {
    return {
      navItem: 'tillage',
    }
  },
}
</script>
<style lang="scss" scoped>
.mgt {
  font-family: 'Inter', arial;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  background: #e3e8e2;
  padding: 10px;
  &__header {
    display: flex;
    align-items: center;
    width: 100%;
    &-title {
      font-family: Montserrat;
      font-size: 36px;
      color: #5ca450;
      padding: 0 60px 0 50px;
    }
    &-back {
      width: 100%;
      height: 50px;
      background: #fff;
      border-radius: 10px;
      padding: 0 10px;
      display: flex;
      align-items: center;
      .arrow {
        cursor: pointer;
        color: #999;
        font-size: 25px;
      }
      .back-title {
        cursor: pointer;
        color: #999;
        font-size: 16px;
        margin-left: 5px;
      }
      &-name {
        margin: 0 auto;
        font-size: 18px;
      }
    }
  }
  &__main {
    margin-top: 10px;
    width: 100%;
    height: calc(100% - 60px);
    background: #fff;
    border-radius: 10px;
    padding: 25px;
    &-nav {
      width: 100%;
      border-bottom: 1px solid #f1f1f1;
      margin-bottom: 20px;
      &-list {
        display: flex;
        height: 25px;
      }
      &-item {
        box-sizing: border-box;
        color: #999999;
        font-size: 16px;
        cursor: pointer;
        margin: 0 20px;
        white-space: nowrap;
      }
      &-item:hover {
        color: #5ca450;
        border-bottom: 2px solid #5ca450;
      }
      .mgt__itemActive {
        color: #5ca450;
        border-bottom: 2px solid #5ca450;
      }
      .mgt__first-item {
        margin: 0 10px 0 0;
      }
    }
  }
}
</style>
