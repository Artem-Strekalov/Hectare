<template>
  <div class="field-card">
    <div class="field-card__left-block">
      <h2 class="left-block__title">{{ name }}</h2>
      <div class="left-block__info">
        <span class="info__area">Площадь: {{ area }} га</span>
        <span class="info__status">Состояние: {{ status }}</span>
      </div>
    </div>
    <div class="field-card__right-block">
      <div class="right-block__label"></div>
      <button class="right-block__govern">Управление</button>
    </div>
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
      type: String,
    },
    area: {
      type: Number,
    },
  },
  data() {
    return {}
  },
}
</script>
<style lang="scss" scoped>
.field-card {
  max-width: 488px;
  height: 200px;
  width: 100%;
  background: #ffffff;
  border-radius: 10px;
  margin: 50px 50px 0px 50px;
  display: flex;
  justify-content: space-between;
  .field-card__left-block {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    padding: 5px 0px 23px 23px;
    .left-block__title {
      font-family: Inter;
      font-weight: 500;
      font-size: 24px;
      line-height: 16px;
      color: #5ca450;
    }
    .left-block__info {
      height: 54px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .info__area,
      .info__status {
        font-family: Inter;
        font-size: 18px;
        line-height: 16px;
        color: #222222;
      }
    }
  }
  .field-card__right-block {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    height: 100%;
    padding: 23px 22px 20px 0px;
    .right-block__label {
      width: 50px;
      height: 10px;
      border-radius: 50px;
      background: #663300;
    }
    .right-block__govern {
      align-items: center;
      vertical-align: middle;
      padding: 18px 30px;
      background: #ffffff;
      border: 1px solid #5ca450;
      border-radius: 10px;
      font-family: Inter;
      font-weight: 600;
      font-size: 16px;
      color: #5ca450;
    }
  }
}
</style>
