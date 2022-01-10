<template>
  <Modal @closeModal="closeModalWindow">
    <form class="form" @submit.prevent="addNewField">
      <h1 class="form__newSquare">Новый участок</h1>
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
        <p>Площадь в Га:</p>
        <input
          v-model="form.square"
          :class="{errorInput: $v.form.square.$error}"
          class="form__input"
          type="Number"
          placeholder="Введите площадь"
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
  .form__newSquare{
    position: absolute;
    top: 20px;
    font-weight: 600;
    font-size: 16px;
   border-bottom: 1px solid #5ca450;
  }
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
