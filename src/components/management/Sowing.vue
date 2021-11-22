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
        <button class="sowing__cart-btn">Редактировать</button>
      </div>
    </div>
    <div class="sowing__form">
      <div class="sowing__form-content">
        <Hinput class="sowing__form-left" name="Укажите тип обработки"></Hinput>
        <Hinput
          class="sowing__form-left"
          name="Укажите глубину обработки"
        ></Hinput>
        <Hinput
          class="sowing__form-left"
          name="Укажите используемую технику"
        ></Hinput>
      </div>
      <div class="sowing__form-content">
        <div class="sowing__form-date">
          <p class="sowing__from-data-name">Период обработки:</p>
          <Hinput type="date" class="test"></Hinput>
          &mdash;
          <Hinput type="date" class="test"></Hinput>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Hinput from '../Hinput.vue'
export default {
  components: {
    Hinput,
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
    margin-top: 30px;
    width: 100%;
    &-content {
      width: 50%;
    }
    &-date {
      display: flex;
      align-items: center;
      white-space: nowrap;
    }
    &-left {
      margin-bottom: 20px;
    }
  }
}
</style>
