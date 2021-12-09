<template>
  <Modal @closeModal="closeModalWindow">
    <form class="form" @submit.prevent="addNewField">
      <div class="form__name">
        <p>Название участка:</p>
        <input
          v-model="form.name"
          :class="{errorInput: $v.form.name.$error}"
          class="form__input"
          type="text"
          placeholder="Введите название участка"
        />
      </div>
      <div class="form__name">
        <p>Площадь:</p>
        <input
          v-model="form.square"
          :class="{errorInput: $v.form.square.$error}"
          class="form__input"
          type="Number"
          placeholder="Введите площадь"
        />
      </div>
      <div class="form__name">
        <p>Состояние:</p>
        <input
          min="0"
          v-model="form.status"
          :class="{errorInput: $v.form.status.$error}"
          class="form__input"
          type="text"
          placeholder="Укажите состояние участка"
        />
      </div>
      <button type="submit" class="form__btn">Добавить</button>
    </form>
  </Modal>
</template>
<script>
import Modal from './Modal.vue'
import {required} from 'vuelidate/lib/validators'
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
      form: {
        name: null,
        status: null,
        square: null,
      },
    }
  },

  methods: {
    async addNewField() {
      this.$v.form.$touch()
      if (this.$v.form.$error) return
      let field = {
        name: this.form.name,
        status: this.form.status,
        square: this.form.square,
      }
      await this.$store.dispatch('addField', field)
      await this.$store.dispatch('loadFields')
      this.closeModalWindow()
    },
  },
  validations: {
    form: {
      name: {required},
      status: {required},
      square: {required},
    },
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
  .errorInput {
    border: 1px solid red;
  }
}
</style>
