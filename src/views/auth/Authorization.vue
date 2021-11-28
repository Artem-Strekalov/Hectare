<template>
  <div class="authorization">
    <HeaderHectare>ГЕКТАР</HeaderHectare>
    <div class="authorization__main">
      <form class="authorization__main-content" @submit.prevent="signIn">
        <h2 class="authorization__main-auth">Авторизация на ГЕКТАР</h2>
        <div class="authorization__main-block-input">
          <AppInput
            nameInput="Введите логин(email)"
            class="authorization__input"
            v-model.trim="auth.email"
            :showError="$v.auth.email.$error || showEmailError"
            :textError="errorEmail"
          />
          <AppInput
            v-model.trim="auth.password"
            nameInput="Введите пароль"
            :showPasswordInput="true"
            :typeText="false"
            :showError="$v.auth.password.$error || showPasswordError"
            :textError="errorPassword"
          />
        </div>

        <ButtonGreen>Войти</ButtonGreen>
        <router-link to="/registration" class="registration-link"
          >Регистрация</router-link
        >
      </form>
    </div>
  </div>
</template>

<script>
import AppInput from '@/components/AppInput'
import ButtonGreen from '@/components/ButtonGreen'
import HeaderHectare from '@/components/HeaderHectare'
import {email, required} from 'vuelidate/lib/validators'
import message from '@/errors/message'
export default {
  components: {
    AppInput,
    ButtonGreen,
    HeaderHectare,
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
        console.log(e.code)
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
      .authorization__registration-link {
        font-size: 12px;
        text-decoration-line: underline;
        color: #5ca450;
        &:hover {
          text-decoration-line: none;
        }
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
