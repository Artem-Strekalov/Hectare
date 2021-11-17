<template>
  <Modal @closeModal="closeModalWindow">
    <div class="form">
      <div class="form__name">
        <p>Название участка:</p>
        <input
          v-model="fieldName"
          class="form__input"
          type="text"
          placeholder="Введите название участка"
        />
      </div>
      <div class="form__name">
        <p>Площадь:</p>
        <input
          v-model="fieldSquare"
          class="form__input"
          type="Number"
          placeholder="Введите площадь"
        />
      </div>
      <div class="form__name">
        <p>Состояние:</p>
        <input
          min="0"
          v-model="fieldStatus"
          class="form__input"
          type="text"
          placeholder="Укажите состояние участка"
        />
      </div>
      <button class="form__btn">Добавить</button>
    </div>
  </Modal>
</template>
<script>
import Modal from './Modal.vue'
export default {
  props: {
    closeModalWindow: {
      type: Function,
    },
  },
  components: {
    Modal,
  },
  data() {
    return {
      fieldName: '',
      fieldStatus: '',
      fieldSquare: null,
    }
  },
  methods: {
    createNewField() {},
  },
}
</script>
<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 300px;
  &__btn {
    margin-left: auto;
    margin-top: 20px;
    width: 100%;
    height: 40px;
    background: #5ca450;
    border-radius: 10px;
    color: #fff;
  }
  p {
    margin: 15px 0 5px 0;
  }
  &__input {
    width: 100%;
    height: 40px;
    border-radius: 10px;
    padding: 0 10px;
    border: 1px solid #999;
  }
}
</style>
