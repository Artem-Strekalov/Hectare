<template>
  <div class="card">
    <div class="content">
      <div class="content__block">
        <h2 class="content__block-name">{{ field.name }}</h2>
        <span class="content__block-delete" @click.prevent="test">
          <i class="modal__close material-icons">close</i>
        </span>
        <p class="content__block-square">Площадь: {{ field.square }} га</p>
        <p class="cars__block-status">Состояние: {{ field.status }}</p>
      </div>
      <button class="content__btn" @click="goManagement">Управление</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Fieldcontent',
  props: {
    field: {
      type: Object,
    },
  },
  methods: {
    goManagement() {
      this.$router.push('/management')
    },
    test() {
      console.log(this.field)
    },
  },
}
</script>
<style lang="scss" scoped>
.card {
  min-width: 328px;
  /* измени здесь ширину на 100% когда будешь делать адаптив */
  width: 33.3333333%;
  height: 200px;
  background: #e3e8e2;
  border: 10px solid #e3e8e2;
  position: relative;
}
.content {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: #ffffff;
  border: 10px solid #ffffff;
  border-radius: 10px;
  padding: 10px;
  &__block {
    width: 100%;
    height: 100%;
    &-name {
      font-size: 18px;
    }
    &-square {
      margin: 25px 0 5px 0;
    }
    &__status {
      white-space: nowrap;
    }
    &-delete {
      position: absolute;
      top: 0;
      right: 0;
      color: #5ca450;
      cursor: pointer;
    }
  }
  &__btn {
    position: absolute;
    bottom: 10px;
    right: 10px;
    max-width: 110px;
    width: 100%;
    height: 40px;
    background: #5ca450;
    border-radius: 10px;
    color: #fff;
    margin-top: auto;
    opacity: 0.8;
  }
  &__btn:hover {
    opacity: 1;
  }
}
</style>
