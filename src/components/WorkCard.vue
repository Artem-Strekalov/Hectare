<template>
  <div class="content__cart">
    <div class="content__cart-left">
      <p class="content__cart-name">{{ processingType }}</p>
      <p class="content__cart-p">
        Период обработки: {{ dateStart }} - {{ dateEnd }}
      </p>
      <p class="content__cart-p">Погодные условия: {{ weather }}</p>
      <p class="content__cart-p">Используемая техника: {{ technique }}</p>
      <p class="content__cart-p">Обработано: {{ area }} га</p>
    </div>
    <div class="content__cart-right">
      <p class="content__cart-p">Ваши заметки: {{ notes }}</p>
      <ButtonGreen>Редактировать</ButtonGreen>
    </div>
  </div>
</template>
<script>
import ButtonGreen from '@/components/ButtonGreen'

export default {
  components: {
    ButtonGreen,
  },
  name: 'WorkCard',
  props: {
    processingType: {
      type: String,
    },
    dateStart: {
      type: String,
    },
    dateEnd: {
      type: String,
    },
    weather: {
      type: String,
    },
    technique: {
      type: String,
    },
    area: {
      type: String,
    },
    notes: {
      type: String,
    },
  },
  data() {
    return {}
  },
}
</script>
<style lang="scss" scoped>
.content__cart {
  width: 100%;
  height: max-content;
  border-radius: 10px;
  margin-top: 30px;
  border: 1px solid #5ca450;
  padding: 25px;
  display: flex;
  &-name {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 30px;
  }
  &-left,
  &-right {
    width: 50%;
  }
  &-right {
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    button {
      margin-left: auto;
      max-width: 190px;
      width: 100%;
    }
  }
  &-p {
    margin-top: 20px;
    font-size: 16px;
    color: #999999;
    height: auto;
  }
}
</style>
