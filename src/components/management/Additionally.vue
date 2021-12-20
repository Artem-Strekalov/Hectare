<template>
  <div class="additional">
    <div class="additional__cart">
      <span class="additional__close">
        <i class="material-icons">close</i>
      </span>
      <h2 class="additional__cart-name">Внесение удобрений</h2>
      <div class="additional__cart-content">
        <p class="additional__cart-content-item">
          <span class="additional__span">Обработано:</span> 50 га
        </p>
        <p class="additional__cart-content-item">
          <span class="additional__span">Удобрение:</span> КАС
        </p>
        <p class="additional__cart-content-item">
          <span class="additional__span">Производитель удобрения:</span> ЕвроХим
        </p>
        <p class="additional__cart-content-item">
          <span class="additional__span">Расход удобрения на га:</span> 100 л/га
        </p>
        <p class="additional__cart-content-item">
          <span class="additional__span">Тип СЗР:</span> Гербицид
        </p>
        <p class="additional__cart-content-item">
          <span class="additional__span">Производитель СЗР:</span> Торнадо 500
        </p>
        <p class="additional__cart-content-item">
          <span class="additional__span">Расход СЗР на га:</span> 5 л/га
        </p>
        <p class="additional__cart-content-item">
          <span class="additional__span">Погодные условия:</span> Пасмурно
        </p>
        <p class="additional__cart-content-item">
          <span class="additional__span">Температура воздуха:</span> +18 C*
        </p>
        <p class="additional__cart-content-item">
          <span class="additional__span">Используемая техника:</span> Трактор
          МТЗ, опрыскиватель
        </p>
        <p class="additional__cart-content-item">
          <span class="additional__span">Период работы:</span> c 30.09.2021 по
          20.10.21 г
        </p>
      </div>
      <div class="additional__cart-content">
        <p class="additional__cart-content-item">Ваши заметки:</p>
        <div class="additional__cart-area">
          Заметки
        </div>
        <button class="additional__btn additional__btnCart">
          Редактировать
        </button>
      </div>
    </div>

    <form class="additional__form">
      <div class="additional__form-block">
        <div class="additional__form-date">
          <Hinput name="Начало работы" type="date"></Hinput>
          <div class="additional__dash"></div>
          <Hinput name="Окончание работы" type="date"></Hinput>
        </div>
        <Hinput class="middleInput" name="Погодные условия"></Hinput>
        <Hinput class="additional__temp" name="Температура воздуха"></Hinput>
        <Hinput name="Обработано в га" type="number"></Hinput>
      </div>

      <div class="additional__form-block">
        <Hinput
          name="Наименование удобрений"
          placeholder="Например КАС"
        ></Hinput>
        <Hinput class="middleInput" name="Производитель удобрения"></Hinput>
        <Hinput
          name="Укажите норму внесения"
          placeholder="Например 100 кг/га"
        ></Hinput>
      </div>
      <div class="additional__form-block">
        <Hinput name="Тип СЗР" placeholder="Например Гербицид"></Hinput>
        <Hinput class="middleInput" name="Производитель СЗР"></Hinput>
        <Hinput name="Расход СЗР на га"></Hinput>
      </div>
      <div class="additional__form-block"></div>
      <div class="additional__form-areaBlock">
        <p class="additional__form-areaBlock-name">Ваши заметки:</p>
        <textarea class="additional__form-areaBlock-area"></textarea>
      </div>
      <button class="additional__btn additional__btnAdd">
        Сохранить
      </button>
      <button type="submit" class="additional__btn additional__btnAdd">
        Добавить
      </button>
      <button
        @click.prevent="closeForm()"
        class="additional__btn additional__btnCancel"
      >
        Отмена
      </button>
    </form>

    <div class="additional__addCart">
      <img src="@/assets/image/svg/plus.svg" alt="" />
    </div>
  </div>
</template>
<script>
import Hinput from '../Hinput.vue'
export default {
  name: 'Additionally',
  components: {
    Hinput,
  },
  props: {
    year: {
      type: [Number, String],
    },
  },
}
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
      additionalDepth: null,
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
      this.additionalDepth = null
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
        additionalDepth: this.additionalDepth,
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
      this.additionalDepth = item.additionalDepth
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
        additionalDepth: this.additionalDepth,
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
    additional() {
      return this.$store.getters.getTillage
    },
  },
} */
</script>
<style lang="scss" scoped>
.additional {
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

    .additional__close {
      position: absolute;
      right: 10px;
      top: 10px;
      color: red;
      cursor: pointer;
      opacity: 0.3;
    }
    .additional__close:hover {
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
        margin-bottom: 12px;
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
    margin: 30px 0;
    width: 100%;
    &-block {
      width: 100%;
      display: flex;
      margin-bottom: 20px;
      .additional__form-date {
        display: flex;
        align-items: center;
        width: 100%;
      }
      .additional__dash {
        width: 20px;
        margin: 10px 10px 0 10px;
        border-top: 2px solid #999;
      }
      .middleInput {
        margin: 0 30px;
      }
      .additional__temp {
        margin-right: 30px;
      }
      .additional__square {
        max-width: 200px;
        width: 100%;
      }
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
  .additional__form-section {
    display: flex;
    align-items: center;
    white-space: nowrap;

    .additional__dash {
      margin: 15px 10px 0 10px;
      width: 20px;
      border-top: 2px solid #999;
    }
    .additional__dashCart {
      margin: 10px;
    }
  }
  .additional__btn {
    cursor: pointer;
    max-width: 130px;
    width: 100%;
    height: 40px;
    background: #5ca450;
    border-radius: 10px;
    color: #fff;
    margin: auto 0 0 auto;
  }

  .additional__btnCancel {
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
