<template>
  <div class="sowing">
    <div class="sowing__cart">
      <h2 class="sowing__cart-name">Дискование</h2>
      <div class="sowing__cart-content">
        <p class="sowing__cart-content-item">
          Период обработки: c 15.08.2021 по 20.08.2021
        </p>
        <p class="sowing__cart-content-item">Погодные условия: Сухая погода</p>
        <p class="sowing__cart-content-item">
          Используемая техника: Трактор МТЗ, бдт-2,5
        </p>
        <p class="sowing__cart-content-item">Глубина обработки: 10см</p>
      </div>
      <div class="sowing__cart-content">
        <p class="sowing__cart-content-item">Ваши заметки:</p>
        <div class="sowing__cart-area">
          Обработка происходила в сырую погоду, глубина обработки 10см
        </div>
        <button class="sowing__btn sowing__btnCart">Редактировать</button>
      </div>
    </div>
    <div class="sowing__form" v-if="showForm">
      <div class="sowing__form-content-left">
        <Hinput class="sowing__form-left" name="Укажите тип обработки"></Hinput>
        <div class="sowing__form-section">
          <Hinput class="sowing__form-left" name="Погодные условия"></Hinput>
          <div class="sowing__dashCart"></div>
          <Hinput class="sowing__form-left" name="Глубина обработки"></Hinput>
        </div>
      </div>
      <div class="sowing__form-content-right">
        <Hinput
          class="sowing__form-left"
          name="Укажите используемую технику"
        ></Hinput>
        <div class="sowing__form-section">
          <Hinput name="Начало обработки" type="date"></Hinput>
          <div class="sowing__dash"></div>
          <Hinput name="Окончание обработки" type="date"></Hinput>
        </div>
      </div>
      <div class="sowing__form-areaBlock">
        <p class="sowing__form-areaBlock-name">Ваши заметки:</p>
        <textarea class="sowing__form-areaBlock-area"></textarea>
      </div>
      <button class="sowing__btn">Добавить</button>
    </div>
    <div class="sowing__addCart">
      <img src="@/assets/image/svg/plus.svg" alt="" />
    </div>
  </div>
</template>
<script>
import Hinput from '../Hinput.vue'
export default {
  components: {
    Hinput,
  },
  data() {
    return {
      showForm: false,
    }
  },
}
</script>
<style lang="scss" scoped>
.sowing {
  font-family: 'Inter', Arial;
  width: 100%;
  &__cart {
    width: 100%;
    padding: 15px;
    border-radius: 10px;
    border: 1px solid #5ca450;
    display: flex;
    flex-wrap: wrap;
    &-name {
      width: 100%;
      font-weight: 500;
      margin-bottom: 20px;
    }
    &-content {
      display: flex;
      flex-direction: column;
      width: 50%;
      &-item {
        color: #5a5a5a;
        margin-bottom: 10px;
      }
    }
    &-area {
      margin-top: 5px;
      width: 100%;
      border-radius: 5px;
    }
    &-btn {
      margin: auto 0 0 auto;
      max-width: 120px;
      width: 100%;
      height: 40px;
      background: #5ca450;
      border-radius: 10px;
      color: #fff;
    }
  }
  &__form {
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
    width: 100%;
    &-content-right {
      padding-left: 10px;
      width: 50%;
    }
    &-content-left {
      padding-right: 10px;
      width: 50%;
    }
    &-left {
      margin-bottom: 20px;
    }
    &-right {
      margin-top: 20px;
    }
    &-areaBlock {
      display: flex;
      width: 50%;
      &-name {
        color: #999;
        font-size: 12px;
        white-space: nowrap;
        margin-right: 10px;
      }
      &-area {
        padding: 5px;
        margin-right: 10px;
        border-radius: 10px;
        width: 100%;
        height: 100px;
        border: 1px solid #f1f1f1;
      }
    }
  }
  .sowing__form-section {
    display: flex;
    align-items: center;
    white-space: nowrap;
    .sowing__dash {
      margin: 15px 10px 0 10px;
      width: 20px;
      border-top: 2px solid #999;
    }
    .sowing__dashCart {
      margin: 10px;
    }
  }
  .sowing__btn {
    cursor: pointer;
    max-width: 120px;
    width: 100%;
    height: 40px;
    background: #5ca450;
    border-radius: 10px;
    color: #fff;
    margin: auto 15px 15px auto;
  }
  .sowing__btnCart {
    margin: auto 0 0 auto;
  }
  &__addCart {
    cursor: pointer;
    display: flex;
    margin-top: 30px;
    width: 100%;
    height: 200px;
    border: 1px solid #5ca450;
    border-radius: 10px;
    background: #5ca450;
    img {
      margin: auto;
    }
  }
  &__addCart:hover {
    background: #fff;
  }
}
</style>
