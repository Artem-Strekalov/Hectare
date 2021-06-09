<template>
  <div class="input">
    <div class="input__name-block">
      <p class="input__name">{{ nameInput }}</p>
      <p class="input__error" :class="{error: errorInput}">{{ errorInput }}</p>
    </div>

    <div class="input__block">
      <input
        class="input__block-input"
        :type="icon || typeText ? 'text' : 'password'"
        @input="$emit('input', $event.target.value)"
      />
      <div
        class="input__block-icon"
        v-if="showPasswordInput"
        @click="icon = !icon"
      >
        <img v-if="icon" src="@/assets/image/svg/showPassword.svg" alt="" />
        <img v-if="!icon" src="@/assets/image/svg/noShowPassword.svg" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AppInput',
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
    typeText: {
      type: Boolean,
      default: true,
    },
    errorInput: {
      type: String,
    },
    nameInput: {
      type: String,
    },
    showPasswordInput: {
      type: Boolean,
    },
  },
  data() {
    return {
      icon: false,
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
  &__error {
    font-size: 12px;
    color: red;
    margin-bottom: 6px;
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
}
</style>
