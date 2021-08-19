<template>
  <div class="registration">
    <HeaderHectare>ГЕКТАР</HeaderHectare>
    <div class="registration__main">
      <form class="registration__main-content" @submit.prevent="registration">
        <h2 class="registration__main-reg">Регистрация на ГЕКТАР</h2>
        <div class="registration__main-block-input">
          <div class="registration__block-left">
            <AppInput
              class="registration__input"
              :nameInput="nameInput.nameCompany"
              :showPasswordInput="false"
              v-model="regForm.nameCompany"
            />
            <AppInput
              class="registration__input"
              :nameInput="nameInput.userFirstName"
              :showPasswordInput="false"
              v-model="regForm.userFirstName"
            />
            <AppInput
              class="registration__input"
              :nameInput="nameInput.userLastName"
              :showPasswordInput="false"
              v-model="regForm.userLastName"
            />
          </div>
          <div class="registration__block-right">
            <AppInput
              class="registration__input"
              :nameInput="nameInput.login"
              :showPasswordInput="false"
              v-model="regForm.email"
            />
            <AppInput
              class="registration__input"
              :nameInput="nameInput.password"
              :showPasswordInput="true"
              v-model="regForm.password"
              :typeText="false"
            />
            <AppInput
              class="registration__input"
              :nameInput="nameInput.confirmPassword"
              :showPasswordInput="true"
              :typeText="false"
              v-model="regForm.repeatPassword"
            />
          </div>
        </div>
        <ButtonGreen>Зарегистрироваться</ButtonGreen>
        <router-link to="/" class="registration-link"
          >У меня уже есть аккаунт</router-link
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
  name: 'registration',
  data() {
    return {
      showError: false,
      textError: '',
      nameInput: {
        nameCompany: 'Введите название хозяйства/компании',
        userFirstName: 'Введите свое имя',
        userLastName: 'Введите свою фамилию',
        login: 'Введите логин(email)',
        password: 'Введите пароль',
        confirmPassword: 'Повторите пароль',
      },
      regForm: {
        email: '',
        password: '',
        nameCompany: '',
        userLastName: '',
        userFirstName: '',
      },
    }
  },
  methods: {
    async registration() {
      const formData = {
        email: this.regForm.email,
        password: this.regForm.password,
        userFirstName: this.regForm.userFirstName,
        userLastName: this.regForm.userLastName,
        nameCompany: this.regForm.nameCompany,
      }
   
      try {
        await this.$store.dispatch('register', formData)
        this.$router.push('/home')
      } catch (e) {}
    },
  },
  computed: {
    errorMessage() {
      return this.$store.getters.error
    },
  },
  watch: {
    errorMessage(fbError) {

      /* this.textError = error(fbError.code)
      this.showError = true */
    },
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
