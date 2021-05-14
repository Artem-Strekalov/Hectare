<template>
  <button class="button">{{ textButton }}</button>
</template>
<script>
export default {
  name: 'ButtonGreen',
  data() {
    return {}
  },
}
</script>
<style lang="scss" scoped>
.button {
  max-width: 416px;
  height: 55px;
  width: 100%;
  padding: 18px 30px;
  background: #5ca450;
  border: 1px solid #f5f5f5;
  border-radius: 10px;
  color: #fff;
}
</style>
