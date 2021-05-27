<template>
  <div class="card">
    <div class="card__left-block">
      <h2 class="card__title">{{ name }}</h2>
      <div class="card__info">
        <span class="info__area">Площадь: {{ area }} га</span>
        <span class="info__status">Состояние: {{ status }}</span>
      </div>
    </div>
    <div class="card__right-block">
      <div class="card__label"></div>
      <button class="card__govern">Управление</button>
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
.card {
  height: 200px;
  width: 48%;
  background: #ffffff;
  border-radius: 10px;
  margin: 50px 0px 0px 0px;
  display: flex;
  justify-content: space-between;
  .card__left-block {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    padding: 5px 0px 23px 23px;
    .card__title {
      font-family: Inter;
      font-weight: 500;
      font-size: 24px;
      line-height: 25px;
      color: #5ca450;
    }
    .card__info {
      height: 54px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .info__area,
      .info__status {
        font-family: Inter;
        font-size: 18px;
        line-height: 20px;
        color: #222222;
      }
    }
  }
  .card__right-block {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    height: 100%;
    padding: 23px 22px 20px 0px;
    .card__label {
      width: 50px;
      height: 10px;
      border-radius: 50px;
      background: #663300;
    }
    .card__govern {
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
      transition: 300ms;
    }
    .card__govern:hover {
      background: #5ca450;
      border: 1px solid #f5f5f5;
      border-radius: 10px;
      color: #fff;
      transition: 400ms;
    }
  }
}
</style>
