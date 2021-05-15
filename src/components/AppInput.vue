<template>
  <div class="input">
    <p class="input__name">{{ nameInput }}</p>
    <div class="input__block">
      <input
        class="input__block-input"
        :type="icon ? 'text' : 'password'"
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
    nameInput: {
      type: String,
    },
    icon: {
      type: Boolean,
    },
    showPasswordInput: {
      type: Boolean,
    },
  },
  data() {
    return {}
  },
}
</script>
<style lang="scss" scoped>
.input {
  width: 100%;
  font-family: Inter;
  .input__name {
    font-size: 12px;
    color: #999999;
    margin-bottom: 6px;
  }
  .input__block {
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
