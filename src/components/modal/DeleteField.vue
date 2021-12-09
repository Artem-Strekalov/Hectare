<template>
  <Modal>
    <div class="content">
      <h1 class="content__name">
        Вы действительно хотите удалить это поле?
      </h1>
      <button class="content__btn">Отмена</button>
      <button class="content__btn">Удалить</button>
    </div>
  </Modal>
</template>

<script>
import Modal from './Modal.vue'
export default {
  name: 'DeleteField',
  components: {Modal},
}
</script>

<style lang="scss" scoped>
.content {
  width: 500px;
  height: 100px;
  display: flex;
  flex-wrap: wrap;
  &__name {
    margin: 0 auto;
    
  }
  &__btn {
    width: 40%;
    height: 40px;
    margin: 20px auto 20px auto;
    border: 1px solid #5ca450;
    background: #5ca450;
    border-radius: 10px;
    color: #fff;
  }
  &__btn:hover {
    background: #fff;
    border: 1px solid #5ca450;
    color: #5ca450;
    font-weight: 600;
  }
}
</style>
