<template>
  <div class="harvest">
    <div class="harvest__cart" v-for="item in cart" :key="item.id">
      <span class="harvest__close" @click.prevent="removeCart(item.id)">
        <i class="material-icons">close</i>
      </span>
      <h2 class="harvest__cart-name">Уборка урожая</h2>
      <div class="harvest__cart-content">
        <p class="harvest__cart-content-item" v-if="item.square">
          <span class="harvest__span">Площадь уборки:</span>
          {{ item.square }} га
        </p>
        <p class="harvest__cart-content-item" v-if="item.crop">
          <span class="harvest__span">Культура:</span> {{ item.crop }}
        </p>
        <p class="harvest__cart-content-item" v-if="item.variety">
          <span class="harvest__span">Сорт:</span> {{ item.variety }}
        </p>
        <p class="harvest__cart-content-item" v-if="item.averageYield">
          <span class="harvest__span">Урожайность:</span>
          {{ item.averageYield }} 
        </p>
        <p class="harvest__cart-content-item" v-if="item.quality">
          <span class="harvest__span">Качество:</span> {{ item.quality }}
        </p>
        <p class="harvest__cart-content-item" v-if="item.nature">
          <span class="harvest__span">Натура:</span> {{ item.nature }}
        </p>
        <p class="harvest__cart-content-item" v-if="item.humidity">
          <span class="harvest__span">Влажность на участке:</span>
          {{ item.humidity }}
        </p>
        <p class="harvest__cart-content-item" v-if="item.threshed">
          <span class="harvest__span">Итоговый намолот</span>
          {{ item.threshed }}
        </p>
        <p class="harvest__cart-content-item" v-if="item.technics">
          <span class="harvest__span">Используемая техника:</span>
          {{ item.technics }}
        </p>
        <p
          class="harvest__cart-content-item"
          v-if="item.startHarvest || item.endHarvest"
        >
          <span class="harvest__span">Период уборки:</span> c
          {{ changeFormatDate(item.startHarvest) }} по
          {{ changeFormatDate(item.endHarvest) }}
        </p>
      </div>
      <div class="harvest__cart-content">
        <p class="harvest__cart-content-item">Ваши заметки:</p>
        <div class="harvest__cart-area">
          {{ item.notes }}
        </div>
        <button
          class="harvest__btn harvest__btnCart"
          @click.prevent="openRedactionForm(item)"
        >
          Редактировать
        </button>
      </div>
    </div>

    <form class="harvest__form" v-if="showForm" @submit.prevent="addCart">
      <div class="harvest__form-block">
        <Hinput name="Культура" v-model.trim="crop"> </Hinput>
        <Hinput class="middleInput" name="Сорт" v-model.trim="variety">
        </Hinput>
        <Hinput name="Средняя урожайность" v-model.trim="averageYield"></Hinput>
      </div>

      <div class="harvest__form-block">
        <Hinput name="Качество" v-model.trim="quality"></Hinput>
        <Hinput class="middleInput" name="Натура" v-model.trim="nature">
        </Hinput>
        <Hinput name="Средняя влажность" v-model.trim="humidity"> </Hinput>
      </div>
      <div class="harvest__form-block">
        <Hinput name="Используемая техника" v-model.trim="technics"></Hinput>
        <Hinput class="middleInput" name="Площадь уборки" v-model.trim="square">
        </Hinput>
        <Hinput name="Итоговый намолот" v-model.trim="threshed"></Hinput>
      </div>
      <div class="harvest__form-block">
        <Calendar :selectedDate.sync="startHarvest" name="Начало уборки">
        </Calendar>
        <Calendar
          class="rightInput"
          :selectedDate.sync="endHarvest"
          name="Завершение уборки"
        >
        </Calendar>
      </div>
      <div class="harvest__form-areaBlock">
        <p class="harvest__form-areaBlock-name">Ваши заметки:</p>
        <textarea class="harvest__form-areaBlock-area" v-model.trim="notes">
        </textarea>
      </div>
      <button
        class="harvest__btn harvest__btnAdd"
        v-if="showBtnSave"
        @click.prevent="changeCart"
      >
        Сохранить
      </button>
      <button
        type="submit"
        class="harvest__btn harvest__btnAdd"
        v-if="!showBtnSave"
      >
        Добавить
      </button>
      <button
        @click.prevent="closeForm()"
        class="harvest__btn harvest__btnCancel"
      >
        Отмена
      </button>
    </form>
    <div class="harvest__addCart" @click.prevent="showForm = true">
      <img src="@/assets/image/svg/plus.svg" alt="" />
    </div>
  </div>
</template>
<script>
import moment, {locale} from 'moment'
import Calendar from '../Calendar.vue'
import Hinput from '../Hinput.vue'
export default {
  name: 'Harvest',
  components: {
    Hinput,
    Calendar,
  },
  props: {
    year: {
      type: [Number, String],
    },
  },
  data() {
    return {
      crop: null,
      notes: null,
      idCart: null,
      nature: null,
      square: null,
      quality: null,
      variety: null,
      humidity: null,
      technics: null,
      threshed: null,
      showForm: false,
      averageYield: null,
      showBtnSave: false,
      endHarvest: null,
      startHarvest: null,
    }
  },
  mounted() {
    this.idField = this.$route.query.id
    this.loadCart()
  },
  methods: {
    changeFormatDate(date) {
      if (!date) {
        return null
      }
      return moment(date)
        .locale('ru')
        .format('LL')
    },
    async loadCart() {
      const data = {
        idField: this.idField,
        year: this.year,
      }
      await this.$store.dispatch('loadHarvestCart', data)
    },
    clearForm() {
      this.crop = null
      this.notes = null
      this.nature = null
      this.square = null
      this.variety = null
      this.quality = null
      this.humidity = null
      this.technics = null
      this.threshed = null
      this.endHarvest = null
      this.startHarvest = null
      this.averageYield = null
    },
    closeForm() {
      this.clearForm()
      this.showForm = false
      this.showBtnSave = false
    },
    async addCart() {
      const data = {
        crop: this.crop,
        year: this.year,
        notes: this.notes,
        nature: this.nature,
        square: this.square,
        variety: this.variety,
        idField: this.idField,
        quality: this.quality,
        humidity: this.humidity,
        technics: this.technics,
        threshed: this.threshed,
        endHarvest: this.endHarvest,
        startHarvest: this.startHarvest,
        averageYield: this.averageYield,
      }
      console.log(data)
      await this.$store.dispatch('addHarvest', data)
      this.loadCart()
      this.closeForm()
    },
    async removeCart(id) {
      const data = {
        idCart: id,
        idField: this.idField,
        year: this.year,
      }
      await this.$store.dispatch('removeHarvest', data)
      this.loadCart()
    },
    openRedactionForm(item) {
      this.crop = item.crop
      this.idCart = item.id
      this.notes = item.notes
      this.nature = item.nature
      this.square = item.square
      this.variety = item.variety
      this.quality = item.quality
      this.humidity = item.humidity
      this.technics = item.technics
      this.threshed = item.threshed
      this.endHarvest = item.endHarvest
      this.startHarvest = item.startHarvest
      this.averageYield = item.averageYield
      this.showForm = true
      this.showBtnSave = true
    },
    async changeCart() {
      const data = {
        crop: this.crop,
        year: this.year,
        notes: this.notes,
        nature: this.nature,
        square: this.square,
        idCart: this.idCart,
        idField: this.idField,
        variety: this.variety,
        quality: this.quality,
        humidity: this.humidity,
        technics: this.technics,
        threshed: this.threshed,
        endHarvest: this.endHarvest,
        startHarvest: this.startHarvest,
        averageYield: this.averageYield,
      }
      await this.$store.dispatch('changeHarvest', data)
      this.loadCart()
      this.closeForm()
    },
  },
  computed: {
    defaultDate() {
      return moment(new Date())
        .locale('ru')
        .format('LL')
    },
    cart() {
      return this.$store.getters.getHarvest
    },
  },
  watch: {
    year() {
      this.loadCart()
    },
  },
}
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
      .rightInput {
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
