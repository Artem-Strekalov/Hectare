<template>
  <div class="authorization">
    <HeaderHectare>ГЕКТАР</HeaderHectare>
    <div class="authorization__main">
      <div class="authorization__main-content">
        <h2 class="authorization__main-auth">Авторизация на ГЕКТАР</h2>
        <div class="authorization__main-block-input">
          <AppInput
            class="authorization__input"
            :nameInput="nameInput.login"
            :icon="true"
            :showPasswordInput="false"
          />
          <AppInput
            class="authorization__input"
            :nameInput="nameInput.password"
            :icon="true"
            :showPasswordInput="true"
          />
        </div>
        <ButtonGreen
          class="authorization__main-content-btn"
          :textButton="textButton.authorization"
        ></ButtonGreen>
        <router-link to="/registration" class="registration-link"
          >Регистрация</router-link
        >
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
  name: 'authorization',
  data() {
    return {
      nameInput: {
        login: 'Введите логин(email)',
        password: 'Введите пароль',
      },
      textButton: {
        authorization: 'Войти',
      },
    }
  },
}
</script>
<style lang="scss" scoped>
.authorization {
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
      max-width: 556px;
      width: 100%;
      max-height: 478px;
      height: 100%;
      background: #fff;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      border-radius: 10px;
      .authorization__main-block-input {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 0 70px;
        .authorization__input {
          margin-bottom: 19px;
        }
        .authorization__block-left {
          margin-right: 70px;
        }
      }
      .registration-link {
        font-size: 12px;
        text-decoration-line: underline;
        color: #5ca450;
      }
      .registration-link:hover {
        text-decoration-line: none;
      }
      &-btn {
        
      }
    }
    &-auth {
      font-weight: 600;
      font-size: 24px;
      color: #222222;
    }
  }
}
</style>
