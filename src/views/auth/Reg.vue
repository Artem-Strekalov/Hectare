<template>
  <div class="reg">
    <div class="reg__left">
      <h2 class="reg__name">ГЕКТАР</h2>
      <form class="reg__form" @submit.prevent="signUp">
        <h2 class="reg__form-name">РЕГИСТРАЦИЯ</h2>
        <AppInput
          class="reg__form-input"
          nameInput="Введите название хозяйства/компании"
          v-model.trim="regForm.nameCompany"
          :showError="$v.regForm.nameCompany.$error"
          :textError="defaultError"
        />
        <AppInput
          class="reg__form-input"
          nameInput="Введите свое имя"
          v-model.trim="regForm.firstName"
          :showError="$v.regForm.firstName.$error"
          :textError="defaultError"
        />
        <AppInput
          class="reg__form-input"
          nameInput="Введите логин(email)"
          v-model.trim="regForm.email"
          :showError="$v.regForm.email.$error || showEmailError"
          :textError="errorEmail"
        />
        <AppInput
          class="reg__form-input"
          nameInput="Введите пароль"
          :inputPassword="true"
          v-model.trim="regForm.password"
          :typeText="false"
          :showError="$v.regForm.password.$error"
          :textError="errorPassword"
        />
        <AppInput
          class="reg__form-input"
          nameInput="Повторите пароль"
          :inputPassword="true"
          :typeText="false"
          v-model.trim="regForm.repeatPassword"
          :showError="$v.regForm.repeatPassword.$error"
          :textError="errorRepeatPassword"
        />
        <ButtonGreen>Зарегистрироваться</ButtonGreen>
        <div class="reg__nav">
          <p class="reg__nav-link reg__nav-password" @click="goAuth">
            У меня уже есть аккаунт
          </p>
        </div>
      </form>
      <div class="reg__angle"></div>
    </div>
  </div>
</template>

<script>
import {email, required, sameAs, minLength} from 'vuelidate/lib/validators'
import AppInput from '@/components/AppInput'
import ButtonGreen from '@/components/ButtonGreen'
import HeaderHectare from '@/components/HeaderHectare'
export default {
  components: {
    AppInput,
    ButtonGreen,
    HeaderHectare,
  },
  name: 'Reg',
  data() {
    return {
      showEmailError: false,
      defaultError: '',
      errorEmail: '',
      errorPassword: '',
      errorRepeatPassword: '',
      regForm: {
        nameCompany: '',
        firstName: '',
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
      email: {email, required},
      password: {required, minLength: minLength(7)},
      repeatPassword: {required, sameAsPassword: sameAs('password')},
    },
  },
  methods: {
    goAuth() {
      this.$router.push('/')
    },
    async signUp() {
      //Валидация
      this.$v.regForm.$touch()
      if (this.$v.regForm.$error) {
        this.defaultError = 'Поле не должно быть пустым'
        this.errorEmail = 'Неверный формат email'
        this.errorPassword = 'Пароль должен состоять минимум из 7 символов'
        this.errorRepeatPassword = 'Пароли не совпадают'
        return
      }
      const data = {
        email: this.regForm.email,
        password: this.regForm.password,
        nameCompany: this.regForm.nameCompany,
        firstName: this.regForm.firstName,
      }
      try {
        await this.$store.dispatch('registered', data)
        await this.$store.dispatch('sendUsersInfo', data)
        this.$router.push('/home')
      } catch (e) {
        if (e.code == 'auth/email-already-in-use') {
          this.showEmailError = true
          this.errorEmail = 'Пользователь с таким email уже существует'
        }

        console.log(e)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.reg {
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
    .reg__name {
      font-family: Montserrat;
      font-size: 36px;
      color: #5ca450;
      letter-spacing: 9px;
      margin: 25px 0 20px 25px;
    }
  }
  &__form {
    font-family: Inter;
    margin: auto 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 55px;
    opacity: 1;
    &-name {
      font-size: 16px;
      color: #222222;
      margin-bottom: 30px;
      letter-spacing: 2px;
    }
    &-input {
      margin-bottom: 20px;
      color: #5ca450;
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
  ////
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
