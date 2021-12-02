<template>
  <div class="auth">
    <div class="auth__left">
      <h2 class="auth__name">ГЕКТАР</h2>
      <form class="auth__form" @submit.prevent="resertPassword">
        <h2 class="auth__form-name">ВОССТАНОВЛЕНИЕ ПАРОЛЯ</h2>
        <AppInput
          class="auth__form-input"
          nameInput="Введите email"
          v-model.trim="email"
          :showError="$v.email.$error"
          :textError="errorEmail"
        ></AppInput>
        <ButtonGreen>Отправить</ButtonGreen>
        <div class="auth__nav">
          <p class="auth__nav-link" @click="goAuth">
            Назад
          </p>
        </div>
      </form>
      <div class="auth__angle"></div>
    </div>
  </div>
</template>

<script>
import AppInput from '@/components/AppInput'
import HeaderHectare from '@/components/HeaderHectare'
import ButtonGreen from '@/components/ButtonGreen'
import firebase from 'firebase/app'
import 'firebase/auth'
import {email, required} from 'vuelidate/lib/validators'
export default {
  name: 'ForgotPassword',
  components: {
    HeaderHectare,
    AppInput,
    ButtonGreen,
  },
  data() {
    return {
      email: null,
      errorEmail: '',
    }
  },
  validations: {
    email: {required, email},
  },
  methods: {
    goAuth() {
      this.$router.push('/')
    },
    resertPassword() {
      this.$v.email.$touch()
      if (this.$v.email.$error) {
        this.errorEmail = 'Неверный формат email'
        return
      }
      firebase
        .auth()
        .sendPasswordResetEmail(this.email)
        .then(() => {
          console.log('ewew')
        })
        .catch(e => {
          console.log(e)
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.auth {
  background: url('../../assets/image/background.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  &__left {
    display: flex;
    flex-direction: column;
    max-width: 500px;
    width: 100%;
    position: absolute;
    background: #fff;
    opacity: 0.9;
    bottom: 0;
    top: 0;

    .auth__name {
      font-family: Montserrat;
      font-size: 36px;
      color: #5ca450;
      letter-spacing: 9px;
      margin: 25px 0 0 25px;
    }
  }
  &__form {
    font-family: Inter;
    height: 400px;
    margin: auto 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 60px;
    &-name {
      font-size: 16px;
      color: #222222;
      margin-bottom: 30px;
    }
    &-input {
      margin-bottom: 20px;
    }
  }
  &__nav {
    margin-top: 20px;
    text-align: center;
    display: flex;
    &-link {
      margin-bottom: 10px;
      color: #999;
      cursor: pointer;
    }
  }
  &__angle {
    position: absolute;
    background-color: #fff;
    transform: rotate(4deg);
    width: 70px;
    right: -35px;
    top: -4px;
    height: 100.3%;
  }

}
</style>
