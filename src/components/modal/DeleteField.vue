<template>
  <Modal @closeModal="closeModalDeleteField">
    <div class="content">
      <h1 class="content__name">
        Вы действительно хотите удалить {{ selectedField.name }}?
      </h1>
      <div class="content__block-btn">
        <button class="content__btn" @click.prevent="closeModalDeleteField">
          Отмена
        </button>
        <button class="content__btn" @click="removeField">Удалить</button>
      </div>
    </div>
  </Modal>
</template>

<script>
import Modal from './Modal.vue'
export default {
  name: 'DeleteField',
  components: {Modal},
  props: {
    closeModalDeleteField: {
      type: Function,
    },
    selectedField: {
      type: Object,
    },
  },
  methods: {
    async removeField() {
      await this.$store.dispatch('removeField', this.selectedField.id)
      await this.$store.dispatch('loadFields')
      this.closeModalDeleteField()
    },
  },
}
</script>

<style lang="scss" scoped>
.content {
  width: 500px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  &__name {
    margin: 0 auto;
  }
  &__block-btn {
    display: flex;
    justify-content: space-around;
  }
  &__btn {
    width: 40%;
    height: 40px;
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
