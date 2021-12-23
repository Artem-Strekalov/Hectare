<template>
  <div class="additional">
    <div class="additional__cart" v-for="item in cart" :key="item.id">
      <span class="additional__close" @click.prevent="removeCart(item.id)">
        <i class="material-icons">close</i>
      </span>
      <h2 class="additional__cart-name">{{ item.typeWork }}</h2>
      <div class="additional__cart-content">
        <p class="additional__cart-content-item" v-if="item.square">
          <span class="additional__span">Обработано:</span> {{ item.square }} га
        </p>
        <p class="additional__cart-content-item" v-if="item.fertilizer">
          <span class="additional__span">Удобрение:</span> {{ item.fertilizer }}
        </p>
        <p
          class="additional__cart-content-item"
          v-if="item.fertilizerManufacturer"
        >
          <span class="additional__span">Производитель удобрения:</span>
          {{ item.fertilizerManufacturer }}
        </p>
        <p class="additional__cart-content-item" v-if="item.fertilizerRate">
          <span class="additional__span">Расход удобрения на га:</span>
          {{ item.fertilizerRate }}
        </p>
        <p
          class="additional__cart-content-item"
          v-if="item.plantProtectionAgent"
        >
          <span class="additional__span">Тип СЗР:</span>
          {{ item.plantProtectionAgent }}
        </p>
        <p class="additional__cart-content-item" v-if="item.manufacturerPra">
          <span class="additional__span">Производитель СЗР:</span>
          {{ item.manufacturerPra }}
        </p>
        <p class="additional__cart-content-item" v-if="item.praRate">
          <span class="additional__span">Расход СЗР на га:</span>
          {{ item.praRate }}
        </p>
        <p class="additional__cart-content-item" v-if="item.weather">
          <span class="additional__span">Погодные условия:</span>
          {{ item.weather }}
        </p>
        <p class="additional__cart-content-item" v-if="item.temperature">
          <span class="additional__span">Температура воздуха:</span>
          {{ item.temperature }} C*
        </p>
        <p class="additional__cart-content-item" v-if="item.technics">
          <span class="additional__span">Используемая техника:</span>
          {{ item.technics }}
        </p>
        <p
          class="additional__cart-content-item"
          v-if="item.startWork || item.endWork"
        >
          <span class="additional__span">Период работы:</span> c
          {{ item.startWork }} по {{ item.endWork }} г
        </p>
      </div>
      <div class="additional__cart-content">
        <template v-if="item.notes">
          <p class="additional__cart-content-item">Ваши заметки:</p>
          <div class="additional__cart-area">
            {{ notes }}
          </div>
        </template>
        <button
          class="additional__btn additional__btnCart"
          @click="openRedactionForm(item)"
        >
          Редактировать
        </button>
      </div>
    </div>

    <form class="additional__form" v-if="showForm" @submit.prevent="addCart">
      <div class="additional__form-block">
        <div class="additional__form-date">
          <Hinput name="Начало работы" type="date" v-model="startWork"></Hinput>
          <div class="additional__dash"></div>
          <Hinput name="Окончание работы" type="date" v-model="endWork">
          </Hinput>
        </div>
        <Hinput class="middleInput" name="Погодные условия" v-model="weather">
        </Hinput>
        <Hinput
          class="additional__temp"
          name="Температура воздуха"
          v-model="temperature"
        >
        </Hinput>
        <Hinput name="Обработано в га" v-model="square"> </Hinput>
      </div>

      <div class="additional__form-block">
        <Hinput
          class="additional__leftInput"
          name="Тип работы"
          v-model="typeWork"
        >
        </Hinput>
        <Hinput name="Наименование удобрений" v-model="fertilizer"> </Hinput>
        <Hinput
          class="middleInput"
          name="Производитель удобрения"
          v-model="fertilizerManufacturer"
        >
        </Hinput>
        <Hinput name="Укажите норму внесения" v-model="fertilizerRate">
        </Hinput>
      </div>
      <div class="additional__form-block">
        <Hinput name="Тип СЗР" v-model="plantProtectionAgent"> </Hinput>
        <Hinput
          class="middleInput"
          name="Производитель СЗР"
          v-model="manufacturerPra"
        >
        </Hinput>
        <Hinput name="Расход СЗР на га" v-model="praRate"></Hinput>
        <Hinput
          class="additional__rightInput"
          name="Используемая техника"
          v-model="technics"
        ></Hinput>
      </div>

      <div class="additional__form-block"></div>
      <div class="additional__form-areaBlock">
        <p class="additional__form-areaBlock-name">Ваши заметки:</p>
        <textarea class="additional__form-areaBlock-area" v-model="notes">
        </textarea>
      </div>
      <button
        class="additional__btn additional__btnAdd"
        v-if="showBtnSave"
        @click.prevent="changeCart"
      >
        Сохранить
      </button>
      <button type="submit" class="additional__btn additional__btnAdd" v-else>
        Добавить
      </button>
      <button
        @click.prevent="closeForm()"
        class="additional__btn additional__btnCancel"
      >
        Отмена
      </button>
    </form>
    <div class="additional__addCart" @click.prevent="showForm = true">
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
  data() {
    return {
      startWork: null,
      endWork: null,
      typeWork: null,
      weather: null,
      temperature: null,
      square: null,
      fertilizer: null,
      fertilizerManufacturer: null,
      fertilizerRate: null,
      plantProtectionAgent: null,
      manufacturerPra: null,
      praRate: null,
      technics: null,
      notes: null,
      showForm: false,
      showBtnSave: false,
      idCart: null,
    }
  },
  mounted() {
    this.idField = this.$route.query.id
    this.loadCart()
  },
  methods: {
    clearForm() {
      this.startWork = null
      this.endWork = null
      this.typeWork = null
      this.weather = null
      this.temperature = null
      this.technics = null
      this.square = null
      this.fertilizer = null
      this.fertilizerManufacturer = null
      this.fertilizerRate = null
      this.plantProtectionAgent = null
      this.manufacturerPra = null
      this.praRate = null
      this.notes = null
    },
    closeForm() {
      this.clearForm()
      this.showForm = false
      this.showBtnSave = false
    },
    async addCart() {
      const data = {
        startWork: this.startWork,
        endWork: this.endWork,
        typeWork: this.typeWork,
        weather: this.weather,
        temperature: this.temperature,
        square: this.square,
        fertilizer: this.fertilizer,
        fertilizerManufacturer: this.fertilizerManufacturer,
        fertilizerRate: this.fertilizerRate,
        plantProtectionAgent: this.plantProtectionAgent,
        manufacturerPra: this.manufacturerPra,
        technics: this.technics,
        praRate: this.praRate,
        notes: this.notes,
        year: this.year,
        idField: this.idField,
      }
      await this.$store.dispatch('addAdditional', data)
      this.loadCart()
      this.closeForm()
    },
    openRedactionForm(item) {
      this.startWork = item.startWork
      this.endWork = item.endWork
      this.typeWork = item.typeWork
      this.weather = item.weather
      this.temperature = item.temperature
      this.square = item.square
      this.fertilizer = item.fertilizer
      this.fertilizerManufacturer = item.fertilizerManufacturer
      this.fertilizerRate = item.fertilizerRate
      this.plantProtectionAgent = item.plantProtectionAgent
      this.manufacturerPra = item.manufacturerPra
      this.technics = item.technics
      this.praRate = item.praRate
      this.notes = item.notes
      this.idCart = item.id
      this.showForm = true
      this.showBtnSave = true
    },

    async loadCart() {
      const data = {
        idField: this.idField,
        year: this.year,
      }
      await this.$store.dispatch('loadAdditionalCart', data)
    },
    async removeCart(id) {
      const data = {
        idField: this.idField,
        idCart: id,
        year: this.year,
      }
      await this.$store.dispatch('removeAdditional', data)
      this.loadCart()
    },
    async changeCart() {
      const data = {
        idCart: this.idCart,
        startWork: this.startWork,
        endWork: this.endWork,
        typeWork: this.typeWork,
        weather: this.weather,
        temperature: this.temperature,
        square: this.square,
        fertilizer: this.fertilizer,
        fertilizerManufacturer: this.fertilizerManufacturer,
        fertilizerRate: this.fertilizerRate,
        plantProtectionAgent: this.plantProtectionAgent,
        manufacturerPra: this.manufacturerPra,
        technics: this.technics,
        praRate: this.praRate,
        notes: this.notes,
        year: this.year,
        idField: this.idField,
      }
      await this.$store.dispatch('changeAdditional', data)
      this.closeForm()
      this.loadCart()
    },
  },
  computed: {
    cart() {
      return this.$store.getters.getAdditional
    },
  },
}
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
      .additional__leftInput {
        margin-right: 30px;
      }
      .additional__rightInput {
        margin-left: 30px;
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
