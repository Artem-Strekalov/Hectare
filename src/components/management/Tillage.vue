<template>
  <div class="tillage">
    <div class="tillage__cart" v-for="item in cart" :key="item.id">
      <span class="tillage__close" @click.prevent="removeTillage(item.id)">
        <i class="material-icons">close</i>
      </span>
      <h2 class="tillage__cart-name">{{ item.typeTillage }}</h2>
      <div class="tillage__cart-content">
        <p class="tillage__cart-content-item" v-if="item.square">
          <span class="tillage__span"> Площадь обработки:</span>
          {{ item.square }}
        </p>
        <p class="tillage__cart-content-item" v-if="item.tillageDepth">
          <span class="tillage__span"> Глубина обработки:</span>
          {{ item.tillageDepth }}
        </p>
        <p class="tillage__cart-content-item" v-if="item.fertilizer">
          <span class="tillage__span">Удобрение:</span>
          {{ item.fertilizer }}
        </p>
        <p
          class="tillage__cart-content-item"
          v-if="item.fertilizerManufacturer"
        >
          <span class="tillage__span"> Производитель удобрения:</span>
          {{ item.fertilizerManufacturer }}
        </p>
        <p class="tillage__cart-content-item" v-if="item.fertilizerRate">
          <span class="tillage__span"> Норма внесения удобрения:</span>
          {{ item.fertilizerRate }}
        </p>
        <p class="tillage__cart-content-item" v-if="item.technics">
          <span class="tillage__span"> Используемая техника:</span>
          {{ item.technics }}
        </p>
        <p
          class="tillage__cart-content-item"
          v-if="item.startTillage || item.endTillage"
        >
          <span class="tillage__span"> Период обработки: </span>
          c {{ changeFormatDate(item.startTillage) }} по
          {{ changeFormatDate(item.endTillage) }}
        </p>
      </div>
      <div class="tillage__cart-content">
        <p class="tillage__cart-content-item">
          <span class="tillage__span"> Ваши заметки: </span>
        </p>
        <div class="tillage__cart-area">
          {{ item.notes }}
        </div>
        <button
          class="tillage__btn tillage__btnCart"
          @click.prevent="openRedactionForm(item)"
        >
          Редактировать
        </button>
      </div>
    </div>
    <form class="tillage__form" v-if="showForm" @submit.prevent="addTillage">
      <div class="tillage__form-block">
        <Hinput name="Укажите тип обработки" v-model="typeTillage"> </Hinput>
        <Hinput
          class="inputRight"
          name="Обработанная площадь в га"
          v-model="square"
        >
        </Hinput>
        <Hinput
          class="inputRight"
          name="Глубина обработки"
          v-model="tillageDepth"
        >
        </Hinput>
      </div>
      <div class="tillage__form-block">
        <Hinput name="Наименование удобрений" v-model="fertilizer"> </Hinput>
        <Hinput
          class="inputRight"
          name="Производитель удобрения"
          v-model="fertilizerManufacturer"
        >
        </Hinput>
        <Hinput
          class="inputRight"
          name="Норма внесения удобрений"
          v-model="fertilizerRate"
        >
        </Hinput>
      </div>
      <div class="tillage__form-block">
        <div class="tillage__form-date">
          <Calendar :selectedDate.sync="startTillage" name="Начало обработки">
          </Calendar>
          <Calendar
            class="inputRight"
            :selectedDate.sync="endTillage"
            name="Завершение обработки"
          >
          </Calendar>
        </div>
        <Hinput
          class="inputRight"
          name="Укажите используемую технику"
          v-model="technics"
        >
        </Hinput>
      </div>
      <div class="tillage__form-areaBlock">
        <p class="tillage__form-areaBlock-name">Ваши заметки:</p>
        <textarea
          class="tillage__form-areaBlock-area"
          v-model="notes"
        ></textarea>
      </div>
      <button
        @click.prevent="changeTillage"
        v-if="showChangeForm"
        class="tillage__btn tillage__btnAdd"
      >
        Сохранить
      </button>
      <button
        v-if="!showChangeForm"
        type="submit"
        class="tillage__btn tillage__btnAdd"
      >
        Добавить
      </button>
      <button
        @click.prevent="closeForm()"
        class="tillage__btn tillage__btnCancel"
      >
        Отмена
      </button>
    </form>
    <div class="tillage__addCart" v-if="!showForm" @click="showForm = true">
      <img src="@/assets/image/svg/plus.svg" alt="" />
    </div>
  </div>
</template>
<script>
import Hinput from '../Hinput.vue'
import vuescroll from 'vuescroll'
import moment, {locale} from 'moment'
import Calendar from '../Calendar.vue'
export default {
  name: 'Tillage',
  components: {
    Calendar,
    Hinput,
    vuescroll,
  },
  props: {
    year: {
      type: [Number, String],
    },
  },
  data() {
    return {
      notes: null,
      square: null,
      cartId: null,
      technics: null,
      showForm: false,
      endTillage: null,
      fertilizer: null,
      typeTillage: null,
      tillageDepth: null,
      startTillage: null,
      fertilizerRate: null,
      showChangeForm: false,
      fertilizerManufacturer: null,
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
      const form = {
        idField: this.idField,
        year: this.year,
      }
      await this.$store.dispatch('loadTillageCart', form)
    },
    clearForm() {
      this.notes = null
      this.square = null
      this.technics = null
      this.endTillage = null
      this.fertilizer = null
      this.typeTillage = null
      this.tillageDepth = null
      this.startTillage = null
      this.fertilizerRate = null
      this.fertilizerManufacturer = null
    },
    closeForm() {
      this.clearForm()
      this.showForm = false
      this.showChangeForm = false
    },
    async addTillage() {
      const dataTillage = {
        year: this.year,
        notes: this.notes,
        square: this.square,
        idField: this.idField,
        technics: this.technics,
        fertilizer: this.fertilizer,
        endTillage: this.endTillage,
        typeTillage: this.typeTillage,
        tillageDepth: this.tillageDepth,
        startTillage: this.startTillage,
        fertilizerRate: this.fertilizerRate,
        fertilizerManufacturer: this.fertilizerManufacturer,
      }
      await this.$store.dispatch('addTillage', dataTillage)
      await this.loadCart()
      this.closeForm()
    },
    async removeTillage(idTillage) {
      const dataId = {
        idField: this.idField,
        idTillage,
        year: this.year,
      }
      await this.$store.dispatch('removeTillage', dataId)
      await this.loadCart()
    },
    openRedactionForm(item) {
      this.cartId = item.id
      this.notes = item.notes
      this.square = item.square
      this.technics = item.technics
      this.endTillage = item.endTillage
      this.fertilizer = item.fertilizer
      this.typeTillage = item.typeTillage
      this.tillageDepth = item.tillageDepth
      this.startTillage = item.startTillage
      this.fertilizerRate = item.fertilizerRate
      this.fertilizerManufacturer = item.fertilizerManufacturer
      this.showForm = true
      this.showChangeForm = true
    },

    async changeTillage() {
      const dataTillage = {
        year: this.year,
        notes: this.notes,
        square: this.square,
        idField: this.idField,
        idTillage: this.cartId,
        technics: this.technics,
        endTillage: this.endTillage,
        fertilizer: this.fertilizer,
        typeTillage: this.typeTillage,
        tillageDepth: this.tillageDepth,
        startTillage: this.startTillage,
        fertilizerRate: this.fertilizerRate,
        fertilizerManufacturer: this.fertilizerManufacturer,
      }
      await this.$store.dispatch('changeTillage', dataTillage)
      await this.loadCart()
      this.closeForm()
    },
  },
  computed: {
    cart() {
      return this.$store.getters.getTillage
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
.tillage {
  max-height: inherit;
  width: calc(100% - 15px);
  font-family: 'Inter', Arial;

  &__cart {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 15px;
    border-radius: 10px;
    border: 1px solid #5ca450;
    margin-bottom: 30px;
    margin-right: 30px;

    .tillage__close {
      position: absolute;
      right: 10px;
      top: 10px;
      color: red;
      cursor: pointer;
      opacity: 0.3;
    }
    .tillage__close:hover {
      opacity: 1;
    }
    &-name {
      width: 100%;
      font-weight: 500;
      font-size: 16px;
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
      margin-bottom: 10px;
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
    &-block {
      width: 100%;
      display: flex;
      margin-bottom: 20px;
      .tillage__form-date {
        display: flex;
        align-items: center;
        width: 100%;
      }
      .tillage__dash {
        width: 20px;
        margin: 10px 10px 0 10px;
        border-top: 2px solid #999;
      }
      .middleInput {
        margin: 0 30px;
      }
      .inputRight {
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
  .tillage__form-section {
    display: flex;
    align-items: center;
    white-space: nowrap;

    .tillage__dash {
      margin: 15px 10px 0 10px;
      width: 20px;
      border-top: 2px solid #999;
    }
  }
  .tillage__btn {
    cursor: pointer;
    max-width: 130px;
    width: 100%;
    height: 40px;
    background: #5ca450;
    border-radius: 10px;
    color: #fff;
    margin: auto 0 0 auto;
  }

  .tillage__btnCancel {
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
