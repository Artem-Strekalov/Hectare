<template>
  <div class="tillage">
    <div class="tillage__cart" v-for="item in tillage" :key="item.id">
      <span class="tillage__close" @click.prevent="removeTillage(item.id)">
        <i class="material-icons">close</i>
      </span>
      <h2 class="tillage__cart-name">Дискование</h2>
      <div class="tillage__cart-content">
        <p class="tillage__cart-content-item">
          Период обработки: c {{ item.startTillage }} по {{ item.endTillage }}
        </p>
        <p class="tillage__cart-content-item">
          Погодные условия: {{ item.weather }}
        </p>
        <p class="tillage__cart-content-item">
          Используемая техника: {{ item.technics }}
        </p>
        <p class="tillage__cart-content-item">
          Глубина обработки: {{ item.tillageDepth }}
        </p>
      </div>
      <div class="tillage__cart-content">
        <p class="tillage__cart-content-item">Ваши заметки:</p>
        <div class="tillage__cart-area">
          {{ item.notes }}
        </div>
        <button class="tillage__btn tillage__btnCart">Редактировать</button>
      </div>
    </div>
    <form class="tillage__form" v-if="showForm" @submit.prevent="addTillage">
      <div class="tillage__form-content-left">
        <Hinput
          class="tillage__form-left"
          name="Укажите тип обработки"
          v-model="typeTillage"
        ></Hinput>
        <div class="tillage__form-section">
          <Hinput
            class="tillage__form-left"
            name="Погодные условия"
            v-model="weather"
          ></Hinput>
          <div class="tillage__dashCart"></div>
          <Hinput
            class="tillage__form-left"
            name="Глубина обработки"
            v-model="tillageDepth"
          ></Hinput>
        </div>
      </div>
      <div class="tillage__form-content-right">
        <Hinput
          class="tillage__form-left"
          name="Укажите используемую технику"
          v-model="technics"
        ></Hinput>
        <div class="tillage__form-section">
          <Hinput
            name="Начало обработки"
            type="date"
            v-model="startTillage"
          ></Hinput>
          <div class="tillage__dash"></div>
          <Hinput
            name="Окончание обработки"
            type="date"
            v-model="endTillage"
          ></Hinput>
        </div>
      </div>
      <div class="tillage__form-areaBlock">
        <p class="tillage__form-areaBlock-name">Ваши заметки:</p>
        <textarea
          class="tillage__form-areaBlock-area"
          v-model="notes"
        ></textarea>
      </div>
      <button type="submit" class="tillage__btn tillage__btnAdd">
        Добавить
      </button>
      <button
        @click.prevent="showForm = false"
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
export default {
  name: 'Tillage',
  components: {
    Hinput,
  },

  data() {
    return {
      showForm: false,
      typeTillage: null,
      weather: null,
      tillageDepth: null,
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
    async addTillage() {
      const dataTillage = {
        idField: this.idField,
        typeTillage: this.typeTillage,
        weather: this.weather,
        tillageDepth: this.weather,
        technics: this.technics,
        startTillage: this.startTillage,
        endTillage: this.endTillage,
        notes: this.notes,
      }
      await this.$store.dispatch('addTillage', dataTillage)
      await this.$store.dispatch('loadTillageCart', this.idField)
      this.showForm = false
    },
    async removeTillage(idTillage) {
      const dataId = {
        idField: this.idField,
        idTillage,
      }
      await this.$store.dispatch('removeTillage', dataId)
      await this.$store.dispatch('loadTillageCart', this.idField)
    },
  },
  computed: {
    tillage() {
      return this.$store.getters.getTillage
    },
  },
}
</script>
<style lang="scss" scoped>
.tillage {
  font-family: 'Inter', Arial;
  width: 100%;
  &__cart {
    width: 100%;
    padding: 15px;
    border-radius: 10px;
    border: 1px solid #5ca450;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 30px;
    position: relative;
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
  .tillage__form-section {
    display: flex;
    align-items: center;
    white-space: nowrap;

    .tillage__dash {
      margin: 15px 10px 0 10px;
      width: 20px;
      border-top: 2px solid #999;
    }
    .tillage__dashCart {
      margin: 10px;
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
    margin-top: 20px;
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
