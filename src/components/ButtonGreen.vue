<template>
  <button class="button">{{ textButton }}</button>
</template>
<script>
export default {
  name: 'ButtonGreen',
  props: {
    textButton: {
      type: String,
    },
  },
  data() {
    return {}
  },
}
</script>
<style lang="scss" scoped>
.button {
  height: 55px;
  width: 38%;
  padding: 18px 30px;
  background: #5ca450;
  border: 1px solid #f5f5f5;
  border-radius: 10px;
  color: #fff;
}
</style>
