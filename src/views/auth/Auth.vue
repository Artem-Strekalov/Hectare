<template>
  <div class="auth">
    <div class="auth__left">
      <h2 class="auth__name">ГЕКТАР</h2>
      <form class="auth__form" @submit.prevent="signIn">
        <h2 class="auth__form-name">АВТОРИЗАЦИЯ</h2>
        <AppInput
          class="auth__form-input"
          nameInput="Введите email"
          v-model.trim="auth.email"
          :showError="$v.auth.email.$error || showEmailError"
          :textError="errorEmail"
        ></AppInput>
        <AppInput
          class="auth__form-input"
          v-model.trim="auth.password"
          nameInput="Введите пароль"
          :showPasswordInput="true"
          :inputPassword="true"
          :typeText="false"
          :showError="$v.auth.password.$error || showPasswordError"
          :textError="errorPassword"
        ></AppInput>
        <ButtonGreen>Войти</ButtonGreen>
        <div class="auth__nav">
          <p class="auth__nav-link" @click="goRegistartion">
            Регистрация
          </p>
          <p
            @click="goForgotPassword"
            class="auth__nav-link auth__nav-password"
          >
            Забыли пароль?
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import AppInput from '@/components/AppInput'
import ButtonGreen from '@/components/ButtonGreen'
import {email, required} from 'vuelidate/lib/validators'
import message from '@/errors/message'
export default {
  components: {
    AppInput,
    ButtonGreen,
  },
  name: 'authorization',
  data() {
    return {
      auth: {email: '', password: ''},
      errorEmail: '',
      errorPassword: '',
      showEmailError: false,
      showPasswordError: false,
    }
  },
  validations: {
    auth: {
      email: {required, email},
      password: {required},
    },
  },
  methods: {
    goForgotPassword() {
      this.$router.push('/forgot-password')
    },
    goRegistartion() {
      this.$router.push('/reg')
    },
    checkForm() {
      this.$v.auth.$touch()
      if (this.$v.auth.$error) {
        this.errorEmail = 'Неверный формат email'
        this.errorPassword = 'Поле не должно быть пустым'
      }
      return
    },
    async signIn() {
      this.$v.auth.$touch()
      if (this.$v.auth.$error) {
        this.errorEmail = 'Неверный формат email'
        this.errorPassword = 'Поле не должно быть пустым'
        return
      }
      const formData = {
        email: this.auth.email,
        password: this.auth.password,
      }
      try {
        await this.$store.dispatch('authorization', formData)
        this.$router.push('/home')
      } catch (e) {
        console.log(e)
        if (e.code == 'auth/wrong-password') {
          console.log('1')
          this.showPasswordError = true
          this.errorPassword = 'Неверный пароль'
          return
        } else {
          this.showEmailError = true
          this.errorEmail = message[e.code]
        }
      }
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
    max-width: 572px;
    width: 100%;
    position: absolute;
    background: linear-gradient(
      93deg,
      #ffffffde 89%,
      rgba(255, 255, 255, 0) 89.2%
    );
    opacity: 0.999;
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
    max-width: 485px;
    width: 100%;
    &-name {
      font-size: 16px;
      color: #222222;
      margin-bottom: 30px;
      letter-spacing: 2px;
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
      color: #5ca450;
      cursor: pointer;
    }
    &-password {
      margin-left: 10px;
      text-decoration: underline;
      color: #999999;
    }
  }
}
</style>
