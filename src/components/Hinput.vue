<template>
  <div class="hinput">
    <label class="hinput__label" for="inp">{{ name }}</label>
    <input
      class="hinput__input"
      id="inp"
      :type="type"
      v-bind="$attrs"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>
<script>
export default {
  name: 'Hinput',
  props: {
    value: {
      default: null,
    },
    name: String,
    type: {
      type: String,
      default: 'text',
    },
  },
}
</script>
<style lang="scss" scoped>
.hinput {
  display: flex;
  flex-direction: column;
  width: 100%;
  &__label {
    font-size: 12px;
    margin-bottom: 5px;
    color: #999999;
  }
  &__input {
    font-size: 14px;
    width: 100%;
    height: 40px;
    border-radius: 10px;
    padding: 0 10px;
    background: #f5f5f5;
  }
}
</style>
