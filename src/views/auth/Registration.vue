<template>
  <div class="registration">
    <div class="registration__header">
      <h2 class="registration__header-name">ГЕКТАР</h2>
      <img class="registration__header-img" src="@/assets/image/svg/logo.svg" alt="" />
    </div>
    <div class="registration__main">
      <div class="registration__main-content">
        <h2 class="registration__main-reg">Регистрация на ГЕКТАР</h2>
        <div class="registration__main-block-input">
          <div class="registration__block-left">
            <AppInput
              class="registration__input"
              :nameInput="nameInput.nameCompany"
              :icon="true"
              :showPasswordInput="true"
            />
            <AppInput
              class="registration__input"
              :nameInput="nameInput.nameCompany"
              :icon="true"
              :showPasswordInput="true"
            />
            <AppInput
              class="registration__input"
              :nameInput="nameInput.nameCompany"
              :icon="true"
              :showPasswordInput="true"
            />
          </div>
          <div class="registration__block-right">
            <AppInput
              class="registration__input"
              :nameInput="nameInput.nameCompany"
              :icon="true"
              :showPasswordInput="true"
            />
            <AppInput
              class="registration__input"
              :nameInput="nameInput.nameCompany"
              :icon="true"
              :showPasswordInput="true"
            />
            <AppInput
              class="registration__input"
              :nameInput="nameInput.nameCompany"
              :icon="true"
              :showPasswordInput="true"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppInput from '@/components/AppInput'
export default {
  components: {
    AppInput,
  },
  name: 'registration',
  data() {
    return {
      nameInput: {
        nameCompany: 'Введите название хозяйства/компании',
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

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    padding: 0 25px;
    width: 100%;
    max-height: 60px;
    height: 100%;
    &-name {
      font-family: Montserrat;
      font-size: 36px;
      color: #5ca450;
    }
  }
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
