<template>
  <div class="input">
    <div class="input__name-block">
      <p class="input__name">{{ nameInput }}</p>
    </div>
    <div class="input__block" :class="{input__error: showError}">
      <input
        class="input__block-input"
        :type="typePassword || typeText ? 'text' : 'password'"
        v-bind="$attrs"
        :value="value"
        @input="$emit('input', $event.target.value)"
      />
      <div
        class="input__block-icon"
        v-if="inputPassword"
        @click="typePassword = !typePassword"
      >
        <img
          v-if="typePassword"
          src="@/assets/image/svg/showPassword.svg"
          alt=""
        />
        <img
          v-if="!typePassword"
          src="@/assets/image/svg/noShowPassword.svg"
          alt=""
        />
      </div>
    </div>
    <p class="input__text-error" v-if="showError">
      {{ textError }}
    </p>
  </div>
</template>
<script>
export default {
  name: 'AppInput',
  props: {
    value: {
      default: null,
    },
    typeText: {
      type: Boolean,
      default: true,
    },
    showError: {
      type: Boolean,
      default: false,
    },
    textError: {
      type: String,
      Object,
    },
    nameInput: {
      type: String,
    },
    inputPassword: {
      type: Boolean,
    },
  },
  data() {
    return {
      typePassword: false,
    }
  },
}
</script>
<style lang="scss" scoped>
// убирает автозаполнение цветом инпута
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  transition: background-color 5000s ease-in-out 0s;
}
.input {
  width: 100%;
  font-family: Inter;
  .input__name-block {
    display: flex;
    justify-content: space-between;
  }
  &__name {
    font-size: 12px;
    color: #999999;
    margin-bottom: 6px;
  }
  &__block {
    width: 100%;
    height: 55px;
    background: #f1f1f1;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    &-input {
      height: 100%;
      width: 100%;
      background: #f1f1f1;
      padding-right: 20px;
    }
    &-icon {
      cursor: pointer;
    }
  }
  &__text-error {
    position: absolute;
    margin-top: 1px;
    font-size: 10px;
    color: red;
    margin-bottom: 6px;
  }
}
.input__error {
  border-bottom: 2px solid rgb(233, 19, 19);
}
</style>
