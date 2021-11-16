<template>
  <div class="card">
    <div class="card__block">
      <h2 class="card__block-name">Участок №1</h2>
      <p class="card__block-square">Площадь: 60га</p>
      <p class="cars__block-status">Состояние: Пахота</p>
    </div>
    <button class="card__btn">Управление</button>
  </div>
</template>
<script>
import ButtonGreen from '@/components/ButtonGreen'
export default {
  name: 'FieldCard',
  components: {
    ButtonGreen,
  },

  data() {
    return {}
  },
}
</script>
<style lang="scss" scoped>
.card {
  box-sizing: border-box;
  font-family: 'Montserrat';
  max-width: 400px;
  width: 100%;
  height: 200px;
  background: #ffffff;
  border-radius: 10px;
  padding: 30px;
  display: flex;
  justify-content: space-between;
  &__block {
    width: 50%;
    height: 100%;
    &-name {
      font-size: 18px;
    }
    &-square {
      margin: 40px 0 5px 0;
    }
  }
  &__btn {
    max-width: 120px;
    width: 100%;
    height: 50px;
    background: #5ca450;
    border-radius: 10px;
    color: #fff;
    margin-top: auto;
    opacity: 0.9;
  }
  &__btn:hover {
    opacity: 1;
  }
}
</style>
