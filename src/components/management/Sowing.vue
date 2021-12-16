<template>
  <div class="sowing">
    <div class="sowing__cart">
      <span class="sowing__close">
        <i class="material-icons">close</i>
      </span>
      <h2 class="sowing__cart-name">Сев Пшеница</h2>
      <div class="sowing__cart-content">
        <p class="sowing__cart-content-item">
          Период обработки: c 30.09.2021 по 20.10.21 г
        </p>
        <p class="sowing__cart-content-item">
          Погодные условия: Влага
        </p>
        <p class="sowing__cart-content-item">
          Используемая техника: Мтз
        </p>
        <p class="sowing__cart-content-item">
          Глубина обработки: 12мм
        </p>
      </div>
      <div class="sowing__cart-content">
        <p class="sowing__cart-content-item">Ваши заметки:</p>
        <div class="sowing__cart-area">
          Заметки
        </div>
        <button class="sowing__btn sowing__btnCart">
          Редактировать
        </button>
      </div>
    </div>
    <form class="sowing__form" >
      <div class="sowing__form-content-left">
        <Hinput
          class="sowing__form-left"
          name="Укажите тип обработки"
          v-model="typeTillage"
        ></Hinput>
        <div class="sowing__form-section">
          <Hinput
            class="sowing__form-left"
            name="Погодные условия"
            v-model="weather"
          ></Hinput>
          <div class="sowing__dashCart"></div>
          <Hinput
            class="sowing__form-left"
            name="Глубина обработки"
            v-model="sowingDepth"
          ></Hinput>
        </div>
      </div>
      <div class="sowing__form-content-right">
        <Hinput
          class="sowing__form-left"
          name="Укажите используемую технику"
          v-model="technics"
        ></Hinput>
        <div class="sowing__form-section">
          <Hinput
            name="Начало обработки"
            type="date"
            v-model="startTillage"
          ></Hinput>
          <div class="sowing__dash"></div>
          <Hinput
            name="Окончание обработки"
            type="date"
            v-model="endTillage"
          ></Hinput>
        </div>
      </div>
      <div class="sowing__form-areaBlock">
        <p class="sowing__form-areaBlock-name">Ваши заметки:</p>
        <textarea
          class="sowing__form-areaBlock-area"
          v-model="notes"
        ></textarea>
      </div>
      <button
        class="sowing__btn sowing__btnAdd"
      >
        Сохранить
      </button>
      <button
       
        type="submit"
        class="sowing__btn sowing__btnAdd"
      >
        Добавить
      </button>
      <button
        @click.prevent="closeForm()"
        class="sowing__btn sowing__btnCancel"
      >
        Отмена
      </button>
    </form>
    <div class="sowing__addCart" v-if="!showForm" @click="showForm = true">
      <img src="@/assets/image/svg/plus.svg" alt="" />
    </div>
  </div>
</template>
<script>
/* import Hinput from '../Hinput.vue'
import vuescroll from 'vuescroll'
export default {
  name: 'Tillage',
  components: {
    Hinput,
    vuescroll,
  },

  data() {
    return {
      cartId: null,
      showForm: false,
      showChangeForm: false,
      typeTillage: '',
      weather: null,
      sowingDepth: null,
      technics: null,
      startTillage: null,
      endTillage: null,
      notes: null,
    }
  },
  async mounted() {
    this.idField = this.$route.query.id
    await this.$store.dispatch('loadTillageCart', this.idField)
  },
  methods: {
    clearForm() {
      this.typeTillage = null
      this.weather = null
      this.sowingDepth = null
      this.technics = null
      this.startTillage = null
      this.endTillage = null
      this.notes = null
    },
    closeForm() {
      this.clearForm()
      this.showForm = false
      this.showChangeForm = false
    },
    async addTillage() {
      const dataTillage = {
        idField: this.idField,
        typeTillage: this.typeTillage,
        weather: this.weather,
        sowingDepth: this.sowingDepth,
        technics: this.technics,
        startTillage: this.startTillage,
        endTillage: this.endTillage,
        notes: this.notes,
      }
      await this.$store.dispatch('addTillage', dataTillage)
      await this.$store.dispatch('loadTillageCart', this.idField)
      this.closeForm()
    },
    async removeTillage(idTillage) {
      const dataId = {
        idField: this.idField,
        idTillage,
      }
      await this.$store.dispatch('removeTillage', dataId)
      await this.$store.dispatch('loadTillageCart', this.idField)
    },
    openRedactionForm(item) {
      this.typeTillage = item.typeTillage
      this.weather = item.weather
      this.sowingDepth = item.sowingDepth
      this.technics = item.technics
      this.startTillage = item.startTillage
      this.endTillage = item.endTillage
      this.notes = item.notes
      this.cartId = item.id
      this.showChangeForm = true
      this.showForm = true
    },

    async changeTillage() {
      const dataTillage = {
        idTillage: this.cartId,
        idField: this.idField,
        typeTillage: this.typeTillage,
        weather: this.weather,
        sowingDepth: this.sowingDepth,
        technics: this.technics,
        startTillage: this.startTillage,
        endTillage: this.endTillage,
        notes: this.notes,
      }
      await this.$store.dispatch('changeTillage', dataTillage)
      await this.$store.dispatch('loadTillageCart', this.idField)
      this.closeForm()
    },
  },
  computed: {
    sowing() {
      return this.$store.getters.getTillage
    },
  },
} */
</script>
<style lang="scss" scoped>
.sowing {
  font-family: 'Inter', Arial;
  width: calc(100% - 15px);
  max-height: inherit;

  &__cart {
    width: 100%;
    padding: 15px;
    border-radius: 10px;
    border: 1px solid #5ca450;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 30px;
    position: relative;
    margin-right: 30px;
    .sowing__close {
      position: absolute;
      right: 10px;
      top: 10px;
      color: red;
      cursor: pointer;
      opacity: 0.3;
    }
    .sowing__close:hover {
      opacity: 1;
    }
    &-name {
      width: 100%;
      font-weight: 500;
      margin-bottom: 20px;
    }
    &-content {
      display: flex;
      flex-direction: column;
      width: 50%;
      &-item {
        color: #5a5a5a;
        margin-bottom: 10px;
      }
    }
    &-area {
      margin-top: 5px;
      width: 100%;
      border-radius: 5px;
    }
    &-btn {
      margin: auto 0 0 auto;
      max-width: 120px;
      width: 100%;
      height: 40px;
      background: #5ca450;
      border-radius: 10px;
      color: #fff;
    }
  }
  &__form {
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
    width: 100%;
    &-content-right {
      padding-left: 10px;
      width: 50%;
    }
    &-content-left {
      padding-right: 10px;
      width: 50%;
    }
    &-left {
      margin-bottom: 20px;
    }
    &-right {
      margin-top: 20px;
    }
    &-areaBlock {
      display: flex;
      width: 50%;
      &-name {
        color: #999;
        font-size: 12px;
        white-space: nowrap;
        margin-right: 10px;
      }
      &-area {
        padding: 5px;
        margin-right: 10px;
        border-radius: 10px;
        width: 100%;
        height: 100px;
        border: 1px solid #f1f1f1;
      }
    }
  }
  .sowing__form-section {
    display: flex;
    align-items: center;
    white-space: nowrap;

    .sowing__dash {
      margin: 15px 10px 0 10px;
      width: 20px;
      border-top: 2px solid #999;
    }
    .sowing__dashCart {
      margin: 10px;
    }
  }
  .sowing__btn {
    cursor: pointer;
    max-width: 130px;
    width: 100%;
    height: 40px;
    background: #5ca450;
    border-radius: 10px;
    color: #fff;
    margin: auto 0 0 auto;
  }

  .sowing__btnCancel {
    margin: auto 0 0 15px;
  }
  &__addCart {
    cursor: pointer;
    display: flex;
    height: 200px;
    border: 1px solid #5ca450;
    border-radius: 10px;
    background: #5ca450;
    opacity: 0.8;
    img {
      margin: auto;
    }
  }
  &__addCart:hover {
    opacity: 1;

    img {
      width: 50px;
    }
  }
  button:hover {
    border: 1px solid #5ca450;
    background: #fff;
    color: #5ca450;
  }
}
</style>
