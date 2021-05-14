<template>
  <div class="registration">
    <HeaderHectare>ГЕКТАР</HeaderHectare>
    <div class="registration__main">
      <div class="registration__main-content">
        <h2 class="registration__main-reg">Регистрация на ГЕКТАР</h2>
        <div class="registration__main-block-input">
          <div class="registration__block-left">
            <AppInput
              class="registration__input"
              :nameInput="nameInput.nameCompany"
              :icon="true"
              :showPasswordInput="false"
            />
            <AppInput
              class="registration__input"
              :nameInput="nameInput.userFirstName"
              :icon="true"
              :showPasswordInput="false"
            />
            <AppInput
              class="registration__input"
              :nameInput="nameInput.userLastName"
              :icon="true"
              :showPasswordInput="false"
            />
          </div>
          <div class="registration__block-right">
            <AppInput
              class="registration__input"
              :nameInput="nameInput.login"
              :icon="true"
              :showPasswordInput="false"
            />
            <AppInput
              class="registration__input"
              :nameInput="nameInput.password"
              :icon="true"
              :showPasswordInput="true"
            />
            <AppInput
              class="registration__input"
              :nameInput="nameInput.confirmPassword"
              :icon="false"
              :showPasswordInput="true"
            />
          </div>
        </div>
        <ButtonGreen :textButton="textButton.registration"></ButtonGreen>
      </div>
    </div>
  </div>
</template>

<script>
import AppInput from '@/components/AppInput'
import ButtonGreen from '@/components/ButtonGreen'
import HeaderHectare from '@/components/HeaderHectare'
export default {
  components: {
    AppInput,
    ButtonGreen,
    HeaderHectare,
  },
  name: 'registration',
  data() {
    return {
      nameInput: {
        nameCompany: 'Введите название хозяйства/компании',
        userFirstName: 'Введите свое имя',
        userLastName: 'Введите свою фамилию',
        login: 'Введите логин(email)',
        password: 'Введите пароль',
        confirmPassword: 'Повторите пароль',
      },
      textButton: {
        registration: 'Зарегистрироваться',
      },
    }
  },
}
</script>
<style lang="scss" scoped>
.registration {
  width: 100vw;
  height: 100vh;
  font-family: Inter;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  &__main {
    width: 100%;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    &-content {
      max-width: 1044px;
      width: 100%;
      max-height: 478px;
      height: 100%;
      background: #fff;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      border-radius: 10px;
      .registration__main-block-input {
        display: flex;
        justify-content: space-between;
        width: 100%;
        padding: 0 70px;
        .registration__block-left,
        .registration__block-right {
          max-width: 416px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          .registration__input {
            margin-bottom: 19px;
          }
        }
        .registration__block-left {
          margin-right: 70px;
        }
      }
    }
    &-reg {
      font-weight: 600;
      font-size: 24px;
      color: #222222;
    }
  }
}
</style>
