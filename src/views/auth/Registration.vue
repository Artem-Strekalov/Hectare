<template>
  <div class="registration">
    <HeaderHectare>ГЕКТАР</HeaderHectare>
    <div class="registration__main">
      <form class="registration__main-content" @submit.prevent="signUp">
        <h2 class="registration__main-reg">Регистрация на ГЕКТАР</h2>
        <div class="registration__main-block-input">
          <div class="registration__block-left">
            <AppInput
              class="registration__input"
              nameInput="Введите название хозяйства/компании"
              v-model.trim="regForm.nameCompany"
              :showError="$v.regForm.nameCompany.$error"
              :textError="defaultError"
            />
            <AppInput
              class="registration__input"
              nameInput="Введите свое имя"
              v-model.trim="regForm.firstName"
              :showError="$v.regForm.firstName.$error"
              :textError="defaultError"
            />
            <AppInput
              class="registration__input"
              nameInput="Введите свою фамилию"
              v-model.trim="regForm.lastName"
              :showError="$v.regForm.lastName.$error"
              :textError="defaultError"
            />
          </div>
          <div class="registration__block-right">
            <AppInput
              class="registration__input"
              nameInput="Введите логин(email)"
              v-model.trim="regForm.email"
              :showError="$v.regForm.email.$error"
              :textError="errorEmail"
            />
            <AppInput
              class="registration__input"
              nameInput="Введите пароль"
              :inputPassword="true"
              v-model.trim="regForm.password"
              :typeText="false"
              :showError="$v.regForm.password.$error"
              :textError="errorPassword"
            />
            <AppInput
              class="registration__input"
              nameInput="Повторите пароль"
              :inputPassword="true"
              :typeText="false"
              v-model.trim="regForm.repeatPassword"
              :showError="$v.regForm.repeatPassword.$error"
              :textError="errorRepeatPassword"
            />
          </div>
        </div>
        <ButtonGreen>Зарегистрироваться</ButtonGreen>
        <router-link to="/" class="registration-link"
          >У меня уже есть аккаунт</router-link
        >
      </form>
    </div>
  </div>
</template>

<script>
import {email, required, sameAs, minLength} from 'vuelidate/lib/validators'
import AppInput from '@/components/AppInput'
import ButtonGreen from '@/components/ButtonGreen'
import HeaderHectare from '@/components/HeaderHectare'
import message from '@/errors/message'
export default {
  components: {
    AppInput,
    ButtonGreen,
    HeaderHectare,
  },
  name: 'registration',
  data() {
    return {
      defaultError: '',
      errorEmail: '',
      errorPassword: '',
      errorRepeatPassword: '',
      regForm: {
        nameCompany: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        repeatPassword: '',
      },
    }
  },
  validations: {
    regForm: {
      nameCompany: {required},
      firstName: {required},
      lastName: {required},
      email: {email, required},
      password: {required, minLength: minLength(7)},
      repeatPassword: {required, sameAsPassword: sameAs('password')},
    },
  },
  methods: {
    checkForm() {
      this.$v.regForm.$touch()
      if (this.$v.regForm.$error) {
        this.defaultError = 'Поле не должно быть пустым'
        this.errorEmail = 'Неверный формат email'
        this.errorPassword = 'Пароль должен состоять минимум из 7 символов'
        this.errorRepeatPassword = 'Пароли не совпадают'
        return
      }
    },
    async signUp() {
      this.checkForm()
      const data = {
        email: this.regForm.email,
        password: this.regForm.password,
      }
      try {
        await this.$store.dispatch('registered', data)
        this.$router.push('/home')
      } catch (e) {
        console.log(e)
      }
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
