<template>
  <div class="field-card">
    <div class="field-card__left-block">
      <h2 class="left-block__title">{{ name }}</h2>
      <div class="left-block__info">
        <span>Площадь: {{area}} га</span>
        <span>Состояние: {{status}}</span>
      </div>
    </div>
    <div class="field-card__right-block"></div>
  </div>
</template>
<script>
export default {
  name: 'FieldCard',
  props: {
    // ДОБАВИТЬ ID
    name: {
      type: String,
    },
    status: {
      type: String
    },
    area: {
      type: Number
    }
  },
  data() {
    return {
    }
  },
}
</script>
<style lang="scss" scoped>
.field-card {
  max-width: 488px;
  max-height: 200px;
  width: 100%;
  height: 100%;
  background: #ffffff;
  border-radius: 10px;
  padding: 15px;
  .field-card__left-block {
    .left-block__title {
      font-family: Inter;
      font-weight: 500;
      font-size: 24px;
      line-height: 16px;
      color: #5ca450;
    }
    .left-block__info {
    }
  }
  .field-card__right-block {
  }
}
</style>
