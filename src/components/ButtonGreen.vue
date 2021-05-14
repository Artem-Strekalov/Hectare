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
  max-width: 416px;
  height: 55px;
  width: 100%;
  padding: 18px 30px;
  background: #5ca450;
  border: 1px solid #f5f5f5;
  border-radius: 10px;
  color: #fff;
  transition: 200ms;
}
.button:hover {
  background: white;
  border-color: #5ca450;
  color: #5ca450;
  transition: 500ms;
}
</style>
