<template>
  <div class="harvest">
    <div class="harvest__cart">
      <span class="harvest__close">
        <i class="material-icons">close</i>
      </span>
      <h2 class="harvest__cart-name">Уборка урожая</h2>
      <div class="harvest__cart-content">
        <p class="harvest__cart-content-item">
          <span class="harvest__span">Площадь уборки:</span> 50 га
        </p>
        <p class="harvest__cart-content-item">
          <span class="harvest__span">Культура:</span> Пшеница
        </p>
        <p class="harvest__cart-content-item">
          <span class="harvest__span">Сорт:</span> Зустрич
        </p>
        <p class="harvest__cart-content-item">
          <span class="harvest__span">Средняя урожайность:</span> 50 ц/га
        </p>
        <p class="harvest__cart-content-item">
          <span class="harvest__span">Качество:</span> 3 класс
        </p>
        <p class="harvest__cart-content-item">
          <span class="harvest__span">Натура:</span> 800
        </p>
        <p class="harvest__cart-content-item">
          <span class="harvest__span">Средняя влажность на участке</span> 13
        </p>
        <p class="harvest__cart-content-item">
          <span class="harvest__span">Итоговый намолот</span> 600 т
        </p>

        <p class="harvest__cart-content-item">
          <span class="harvest__span">Используемая техника:</span> Трактор МТЗ,
          опрыскиватель
        </p>
        <p class="harvest__cart-content-item">
          <span class="harvest__span">Период уборки:</span> c 30.09.2021 по
          20.10.21 г
        </p>
      </div>
      <div class="harvest__cart-content">
        <p class="harvest__cart-content-item">Ваши заметки:</p>
        <div class="harvest__cart-area">
          Заметки
        </div>
        <button class="harvest__btn harvest__btnCart">
          Редактировать
        </button>
      </div>
    </div>

    <form class="harvest__form">
      <div class="harvest__form-block">
        <div class="harvest__form-date">
          <Hinput name="Начало уборки" type="date"></Hinput>
          <div class="harvest__dash"></div>
          <Hinput name="Окончание уборки" type="date"></Hinput>
        </div>
        <Hinput class="middleInput" name="Культура"></Hinput>
        <Hinput class="harvest__sort" name="Сорт"></Hinput>
        <Hinput name="Средняя урожайность"></Hinput>
      </div>

      <div class="harvest__form-block">
        <Hinput name="Качество"></Hinput>
        <Hinput class="middleInput" name="Натура"></Hinput>
        <Hinput class="harvest__sort" name="Средняя влажность"></Hinput>
        <Hinput name="Итоговый намолот"></Hinput>
      </div>
      <div class="harvest__form-block">
        <Hinput name="Используемая техника"></Hinput>
      </div>
      <div class="harvest__form-block"></div>
      <div class="harvest__form-areaBlock">
        <p class="harvest__form-areaBlock-name">Ваши заметки:</p>
        <textarea class="harvest__form-areaBlock-area"></textarea>
      </div>
      <button class="harvest__btn harvest__btnAdd">
        Сохранить
      </button>
      <button type="submit" class="harvest__btn harvest__btnAdd">
        Добавить
      </button>
      <button
        @click.prevent="closeForm()"
        class="harvest__btn harvest__btnCancel"
      >
        Отмена
      </button>
    </form>

    <div class="harvest__addCart">
      <img src="@/assets/image/svg/plus.svg" alt="" />
    </div>
  </div>
</template>
<script>
import Hinput from '../Hinput.vue'
export default {
  name: 'Harvest',
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
      harvestDepth: null,
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
      this.harvestDepth = null
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
        harvestDepth: this.harvestDepth,
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
      this.harvestDepth = item.harvestDepth
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
        harvestDepth: this.harvestDepth,
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
    harvest() {
      return this.$store.getters.getTillage
    },
  },
} */
</script>
<style lang="scss" scoped>
.harvest {
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

    .harvest__close {
      position: absolute;
      right: 10px;
      top: 10px;
      color: red;
      cursor: pointer;
      opacity: 0.3;
    }
    .harvest__close:hover {
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
      .harvest__form-date {
        display: flex;
        align-items: center;
        width: 100%;
      }
      .harvest__dash {
        width: 20px;
        margin: 10px 10px 0 10px;
        border-top: 2px solid #999;
      }
      .middleInput {
        margin: 0 30px;
      }
      .harvest__sort {
        margin-right: 30px;
      }
      .harvest__square {
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
  .harvest__form-section {
    display: flex;
    align-items: center;
    white-space: nowrap;

    .harvest__dash {
      margin: 15px 10px 0 10px;
      width: 20px;
      border-top: 2px solid #999;
    }
    .harvest__dashCart {
      margin: 10px;
    }
  }
  .harvest__btn {
    cursor: pointer;
    max-width: 130px;
    width: 100%;
    height: 40px;
    background: #5ca450;
    border-radius: 10px;
    color: #fff;
    margin: auto 0 0 auto;
  }

  .harvest__btnCancel {
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
