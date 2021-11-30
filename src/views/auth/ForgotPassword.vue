<template>
  <div class="forgot">
    <HeaderHectare></HeaderHectare>
    <form class="forgot__main" @submit.prevent="resertPassword">
      <h2 class="forgot__main-name">Восстановление пароля</h2>
      <AppInput nameInput="Введите ваш email" v-model="email"></AppInput>
      <ButtonGreen>Отправить</ButtonGreen>
      <p @click="goAuth" class="forgot__out">Назад</p>
    </form>
  </div>
</template>
<script>
import AppInput from '@/components/AppInput'
import HeaderHectare from '@/components/HeaderHectare'
import ButtonGreen from '@/components/ButtonGreen'
import firebase from 'firebase/app'
import 'firebase/auth'
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
    }
  },
  methods: {
    goAuth() {
      this.$router.push('/')
    },
    resertPassword() {
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
.forgot {
  width: 100%;
  height: 100vh;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  font-family: Inter;
  &__main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    border-radius: 10px;
    padding: 50px 70px;
    max-width: 556px;
    width: 100%;
    height: 400px;
    margin: auto;
    &-name {
      font-weight: 600;
      font-size: 20px;
      color: #222222;
    }
  }
  &__out {
    color: #999999;
    cursor: pointer;
  }
  &__out:hover {
    color: #5ca450;
  }
}
</style>
