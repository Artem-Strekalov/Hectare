<template>
  <div class="sowing">
    <div class="sowing__cart" v-for="cart in sowingCart" :key="cart.id">
      <span class="sowing__close" @click.prevent="removeSowingCart(cart.id)">
        <i class="material-icons">close</i>
      </span>
      <h2 class="sowing__cart-name">Сев {{ cart.crop }}</h2>
      <div class="sowing__cart-content">
        <p class="sowing__cart-content-item" v-if="cart.square">
          <span class="sowing__span">Посеяно:</span> {{ cart.square }} га
        </p>
        <p class="sowing__cart-content-item" v-if="cart.crop">
          <span class="sowing__span">Культура:</span> {{ cart.crop }}
        </p>
        <p class="sowing__cart-content-item" v-if="cart.variety">
          <span class="sowing__span">Сорт:</span> {{ cart.variety }}
        </p>
        <p class="sowing__cart-content-item" v-if="cart.seedingRate">
          <span class="sowing__span">Норма высева:</span>
          {{ cart.seedingRate }} кг/га
        </p>
        <p class="sowing__cart-content-item" v-if="cart.fertillizer">
          <span class="sowing__span">Удобрение:</span> {{ cart.fertilizer }}
        </p>
        <p class="sowing__cart-content-item" v-if="cart.fertilizerRate">
          <span class="sowing__span">Норма высева удобрения:</span>
          {{ cart.fertilizerRate }} кг/га
        </p>
        <p class="sowing__cart-content-item" v-if="cart.weather">
          <span class="sowing__span">Погодные условия:</span>
          {{ cart.weather }}
        </p>
        <p class="sowing__cart-content-item" v-if="cart.technics">
          <span class="sowing__span">Используемая техника:</span>
          {{ cart.technics }}
        </p>
        <p
          class="sowing__cart-content-item"
          v-if="cart.startSowing || cart.endSowing"
        >
          <span class="sowing__span">Период сева:</span> c
          {{ cart.startSowing }} по {{ cart.endSowing }} г
        </p>
      </div>
      <div class="sowing__cart-content">
        <template v-if="cart.notes">
          <p class="sowing__cart-content-item">Ваши заметки:</p>
          <div class="sowing__cart-area">
            {{ cart.notes }}
          </div>
        </template>

        <button
          class="sowing__btn sowing__btnCart"
          @click.prevent="openRedactionForm(cart)"
        >
          Редактировать
        </button>
      </div>
    </div>
    <form class="sowing__form" v-if="showForm" @submit.prevent="addSowing">
      <div class="sowing__form-block">
        <div class="sowing__form-date">
          <Hinput
            name="Начало сева"
            type="date"
            v-model.trim="startSowing"
          ></Hinput>
          <div class="sowing__dash"></div>
          <Hinput
            name="Окончание сева"
            type="date"
            v-model.trim.trim="endSowing"
          ></Hinput>
        </div>
        <Hinput
          class="middleInput sowing__square"
          name="Посеянная площадь в га"
          type="number"
          v-model.trim="square"
        >
        </Hinput>
        <Hinput
          name="Укажите используемую технику"
          v-model.trim="technics"
        ></Hinput>
      </div>

      <div class="sowing__form-block">
        <Hinput name="Культура" v-model.trim="crop"></Hinput>
        <Hinput
          class="middleInput"
          name="Наименование сорта"
          v-model.trim="variety"
        ></Hinput>
        <Hinput
          name="Укажите норму высева в кг/га"
          v-model.trim="seedingRate"
        ></Hinput>
      </div>
      <div class="sowing__form-block">
        <Hinput name="Удобрение" v-model.trim="fertilizer"></Hinput>
        <Hinput
          class="middleInput"
          name="Норма высева удобрения в кг/га"
          v-model.trim="fertilizerRate"
        ></Hinput>
        <Hinput name="Погодные условия" v-model.trim="weather"></Hinput>
      </div>
      <div class="sowing__form-areaBlock">
        <p class="sowing__form-areaBlock-name">Ваши заметки:</p>
        <textarea
          class="sowing__form-areaBlock-area"
          v-model.trim="notes"
        ></textarea>
      </div>
      <button
        class="sowing__btn sowing__btnAdd"
        v-if="showChangeForm"
        @click.prevent="changeSowingCart"
      >
        Сохранить
      </button>
      <button
        type="submit"
        class="sowing__btn sowing__btnAdd"
        v-if="!showChangeForm"
      >
        Добавить
      </button>
      <button class="sowing__btn sowing__btnCancel" @click.prevent="closeForm">
        Отмена
      </button>
    </form>
    <div class="sowing__addCart" @click.prevent="showForm = true">
      <img src="@/assets/image/svg/plus.svg" alt="" />
    </div>
  </div>
</template>
<script>
import Hinput from '../Hinput.vue'
export default {
  name: 'Sowing',
  components: {
    Hinput,
  },
  props: {
    year: {
      type: [Number, String],
    },
  },
  data() {
    return {
      showForm: false,
      startSowing: null,
      endSowing: null,
      square: null,
      technics: null,
      crop: null,
      variety: null,
      seedingRate: null,
      fertilizer: null,
      fertilizerRate: null,
      weather: null,
      notes: null,
      idCart: null,
      showChangeForm: false,
    }
  },
  mounted() {
    this.idField = this.$route.query.id
    this.loadSowingCart()
  },
  methods: {
    clearForm() {
      this.startSowing = null
      this.endSowing = null
      this.square = null
      this.technics = null
      this.crop = null
      this.variety = null
      this.seedingRate = null
      this.fertilizer = null
      this.fertilizerRate = null
      this.weather = null
      this.notes = null
    },
    closeForm() {
      this.clearForm()
      this.showForm = false
      this.showChangeForm = false
    },
    async loadSowingCart() {
      let form = {
        idField: this.idField,
        year: this.year,
      }
      await this.$store.dispatch('loadSowingCart', form)
    },
    async addSowing() {
      const dataSowing = {
        idField: this.idField,
        startSowing: this.startSowing,
        endSowing: this.endSowing,
        square: this.square,
        technics: this.technics,
        crop: this.crop,
        variety: this.variety,
        seedingRate: this.seedingRate,
        fertilizer: this.fertilizer,
        fertilizerRate: this.fertilizerRate,
        weather: this.weather,
        notes: this.notes,
        year: this.year,
      }
      await this.$store.dispatch('addSowing', dataSowing)
      this.loadSowingCart()
      this.closeForm()
    },
    async removeSowingCart(idCart) {
      const data = {
        idField: this.idField,
        idCart,
        year: this.year,
      }
      await this.$store.dispatch('removeSowing', data)
      await this.loadSowingCart()
    },
    openRedactionForm(item) {
      this.startSowing = item.startSowing
      this.endSowing = item.endSowing
      this.square = item.square
      this.technics = item.technics
      this.crop = item.crop
      this.variety = item.variety
      this.seedingRate = item.seedingRate
      this.fertilizer = item.fertilizer
      this.fertilizerRate = item.fertilizerRate
      this.weather = item.weather
      this.notes = item.notes
      this.idCart = item.id
      this.showForm = true
      this.showChangeForm = true
    },
    async changeSowingCart() {
      const data = {
        idField: this.idField,
        idCart: this.idCart,
        startSowing: this.startSowing,
        endSowing: this.endSowing,
        square: this.square,
        technics: this.technics,
        crop: this.crop,
        variety: this.variety,
        seedingRate: this.seedingRate,
        fertilizer: this.fertilizer,
        fertilizerRate: this.fertilizerRate,
        weather: this.weather,
        notes: this.notes,
        year: this.year,
      }
      await this.$store.dispatch('changeSowing', data)
      await this.loadSowingCart()
      this.closeForm()
    },
  },
  computed: {
    sowingCart() {
      return this.$store.getters.getSowing
    },
  },
  watch: {
    year() {
      this.loadSowingCart()
    },
  },
}
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
      .sowing__form-date {
        display: flex;
        align-items: center;
      }
      .sowing__dash {
        width: 20px;
        margin: 10px 10px 0 10px;
        border-top: 2px solid #999;
      }
      .middleInput {
        margin: 0 30px;
      }
      .sowing__square {
        max-width: 200px;
        width: 100%;
      }
    }
    &-areaBlock {
      display: flex;
      width: 50%;
      &-name {
        color: #646464;
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
