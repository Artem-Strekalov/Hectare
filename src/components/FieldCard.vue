<template>
  <div class="card">
    <div class="card__left-block">
      <h2 class="card__title">{{ name }}</h2>
      <div class="card__info">
        <span class="card__area">Площадь: {{ area }} га</span>
        <span class="card__status">Состояние: {{ status }}</span>
      </div>
    </div>
    <div class="card__right-block">
      <div class="card__label"></div>
      <ButtonGreen class="card__govern">Управление</ButtonGreen>
    </div>
  </div>
</template>
<script>
import ButtonGreen from '@/components/ButtonGreen'
export default {
  name: 'FieldCard',
  components: {
    ButtonGreen,
  },
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
  &__left-block {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    padding: 5px 0px 23px 23px;
  }
  &__title {
    font-family: Inter;
    font-weight: 500;
    font-size: 24px;
    line-height: 25px;
    color: #5ca450;
  }
  &__info {
    height: 54px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &__area,
  &__status {
    font-family: Inter;
    font-size: 18px;
    line-height: 20px;
    color: #222222;
  }
  &__right-block {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    height: 100%;
    padding: 23px 22px 20px 0px;
  }
  &__label {
    width: 50px;
    height: 10px;
    border-radius: 50px;
    background: #663300;
  }
  &__govern {
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
    &:hover {
      background: #5ca450;
      border: 1px solid #f5f5f5;
      border-radius: 10px;
      color: #fff;
      transition: 400ms;
    }
  }
}
</style>
