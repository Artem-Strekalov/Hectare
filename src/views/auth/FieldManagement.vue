<template>
  <div class="content" data-app>
    <div class="content__header">
      <div class="content__header-out">
        <img src="@/assets/image/svg/arrow.svg" alt="" />
        <p class="content__header-name">Назад</p>
      </div>
      <p class="content__header-title">ГЕКТАР</p>
    </div>
    <div class="content__field">
      <p class="content__field-name">4 участок</p>
      <div class="content__field-year">
        <p class="content__year-name">Выберите год:</p>
        <div class="content__year-block">
          <img src="@/assets/image/svg/arrowDown.svg" alt="" />
        </div>
      </div>
    </div>
    <div class="content__nav">
      <span class="content__nav-item content__nav-itemOne"
        >Подготовка почвы</span
      >
      <span class="content__nav-item">Сев</span>
      <span class="content__nav-item">Дополнительные работы</span>
      <span class="content__nav-item">Уборка урожая</span>
    </div>
    <div class="content__form">
      <div class="content__form-main">
        <div class="content__form-left">
          <div class="content__form-type">
            <p class="content__form-name">Укажите тип обработки:</p>
            <input type="text" />
          </div>
          <div class="content__form-weather">
            <p class="content__form-name">Погодные условия:</p>
            <input type="text" />
          </div>
          <div class="content__form-cultivation">
            <p class="content__form-p">Обработано:</p>
            <v-slider v-model="ex1.val" :color="ex1.color"></v-slider>
            <p class="content__form-ga">{{ ex1.val }} га</p>
          </div>
        </div>
        <div class="content__form-right">
          <div class="content__form-calendar">
            <p class="content__form-name">Период:</p>
            <div class="content__form-data">
              <img src="@/assets/image/svg/arrowDown.svg" alt="" />
            </div>
            <hr />
            <div class="content__form-data">
              <img src="@/assets/image/svg/arrowDown.svg" alt="" />
            </div>
          </div>
          <div class="content__form-technics">
            <p class="content__form-name">Используемая техника:</p>
            <input type="text" />
          </div>
        </div>
      </div>
      <div class="content__form-notes">
        <p class="content__form-name">Ваши заметки:</p>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
      <ButtonGreen>Добавить</ButtonGreen>
    </div>
    <!-- <div class="content__add">
      <img src="@/assets/image/svg/addIcon.svg" alt="" />
      <p class="content__add-name">Добавить работу</p>
    </div> -->
  </div>
</template>
<script>
import ButtonGreen from '@/components/ButtonGreen'
export default {
  components: {
    ButtonGreen,
  },
  name: 'FieldManagement',
  data: () => ({
    ex1: {label: 'color', val: 0, color: '#5ca450'},
  }),
}
</script>
<style lang="scss" scoped>
.content {
  font-family: Inter;
  padding: 0 25px;
  height: 100vh;
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    &-out {
      display: flex;
      align-items: center;
      height: 100%;
      cursor: pointer;
    }
    &-name {
      font-size: 18px;
      color: #999999;
      margin-left: 18px;
    }
    &-title {
      font-family: Montserrat;
      font-size: 36px;
      color: #5ca450;
      letter-spacing: 9px;
    }
  }
  /* &__add {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-height: 200px;
    height: 100%;
    cursor: pointer;
    border: 1px solid #5ca450;
    border-radius: 10px;
    &-name {
      font-size: 18px;
      color: #222222;
      margin-left: 10px;
    }
  } */
  &__field {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    &-year {
      max-width: 325px;
      width: 100%;
      display: flex;
      align-items: center;
    }
    &-name {
      font-size: 18px;
      font-weight: 600;
    }
  }
  &__year-name {
    white-space: nowrap;
    margin-right: 11px;
  }
  &__year-block {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    width: 100%;
    height: 50px;
    background: #f5f5f5;
    border-radius: 10px;
  }
  &__nav {
    width: 100%;
    border-bottom: 1px solid #999999;
    padding-bottom: 5px;
    margin-top: 30px;
    white-space: nowrap;
    &-item {
      font-size: 18px;
      color: #999999;
      margin-left: 30px;
      padding-bottom: 2px;
      cursor: pointer;
    }
    &-itemOne {
      margin: 0;
    }
    &-item:hover {
      color: #5ca450;

      border-bottom: 2px solid #5ca450;
    }
  }
  &__form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    width: 100%;
    white-space: nowrap;
    input {
      width: 100%;
      height: 50px;
      background: #f5f5f5;
      border-radius: 10px;
      padding: 0 15px;
    }
    &-main {
      display: flex;
      width: 100%;
    }
    &-name {
      margin-right: 10px;
    }
    &-left {
      margin-right: 30px;
      width: 40%;
      .content__form-type,
      .content__form-weather {
        display: flex;
        align-items: center;
      }
      .content__form-weather {
        margin-top: 30px;
      }
      .content__form-cultivation {
        display: flex;
        margin-top: 22px;
        .content__form-p {
          margin: 8px 55px 0 0;
        }
        .content__form-ga {
          margin-top: 8px;
        }
      }
    }
    &-right {
      width: 60%;
      margin-left: 30px;
    }
    &-calendar {
      display: flex;
      align-items: center;
    }
    &-data {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      padding: 0 20px;
      width: 50%;
      height: 50px;
      background: #f5f5f5;
      border-radius: 10px;
      cursor: pointer;
    }
    hr {
      width: 20px;
      height: 3px;
      background: #999999;
      margin: 0 10px;
      border-radius: 10px;
    }
    &-technics {
      display: flex;
      align-items: center;
      margin-top: 30px;
    }
    &-notes {
      display: flex;
      margin-top: 20px;
      textarea {
        border: 2px solid #999999;
        border-radius: 10px;
        width: 100%;
        margin-left: 30px;
        padding: 10px;
      }
    }
    button {
      margin-top: 37px;
      max-width: 197px;
      align-self: flex-end;
    }
  }
}
</style>