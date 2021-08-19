<template>
  <div class="authorization">
    <HeaderHectare>ГЕКТАР</HeaderHectare>
    <div class="authorization__main">
      <form class="authorization__main-content" @submit.prevent="signIn">
        <h2 class="authorization__main-auth">Авторизация на ГЕКТАР</h2>
        <div class="authorization__main-block-input">
          <AppInput
            class="authorization__input"
            v-model="email"
            :errorInput="emailError"
            :nameInput="nameInput.login"
            :icon="true"
            :showPasswordInput="false"
          />
          <AppInput
            class="authorization__input"
            v-model="password"
            :errorInput="passwordError"
            :nameInput="nameInput.password"
            :showPasswordInput="true"
            :typeText="false"
          />
        </div>
        <ButtonGreen>Войти</ButtonGreen>
        <router-link to="/registration" class="registration-link"
          >Регистрация</router-link
        >
      </form>
    </div>
    <v-snackbar
      v-model="showError"
      :centered="true"
      color="#ED4949"
      timeout="15000"
    >
      {{ textError }}
      <template v-slot:action="{attrs}">
        <v-btn color="red" text v-bind="attrs" @click="showError = false">
          Закрыть
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import error from '@/utils/error'
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
      passwordError: '',
      emailError: '',
      showError: false,
      textError: '',
      email: '',
      password: '',
      nameInput: {
        login: 'Введите логин(email)',
        password: 'Введите пароль',
      },
    }
  },
  methods: {
    async signIn() {
      const formData = {
        email: this.email,
        password: this.password,
      }
      try {
        await this.$store.dispatch('login', formData)
        this.$router.push('/home')
      } catch (e) {}
    },
    clearError() {
      this.$store.commit.clearError
      this.emailError = ''
      this.passwordError = ''
    },
  },
  computed: {
    errorMessage() {
      return this.$store.getters.error
    },
  },
  watch: {
    //обрабатываем ошибки
    errorMessage(fbError) {
      this.clearError()
      console.log(fbError.code)
      switch (fbError.code) {
        case 'auth/user-not-found':
          this.emailError = 'E-mail не существует'
          break
        case 'auth/invalid-email':
          this.emailError = 'Неверный E-mail'
          break

        case 'auth/wrong-password':
          this.passwordError = 'Неверный пароль'
          break
        case 'auth/too-many-requests':
          this.textError = 'Ошибка сервера. Обновите страницу.'
          this.showError = true
          break
        default:
          this.textError = 'Упс... Что-то пошло не так'
          this.showError = true
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
