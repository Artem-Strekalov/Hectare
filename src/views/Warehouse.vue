<template>
  <div class="warehouse">
    <div class="warehouse__sidebar">
      <Sidebar activeLink="warehouse"></Sidebar>
    </div>
    <div class="warehouse__main">
      <div class="warehouse__main-nav">
        <ul class="warehouse__main-nav-list">
          <li
            class="warehouse__main-nav-item warehouse__first-item"
            :class="{warehouse__itemActive: tabItem === 'loading'}"
            @click=";(tabItem = 'loading'), itCards()"
          >
            Загрузка
          </li>
          <li
            class="warehouse__main-nav-item"
            :class="{warehouse__itemActive: tabItem === 'unloading'}"
            @click=";(tabItem = 'unloading'), itCards()"
          >
            Выгрузка
          </li>
        </ul>
      </div>

      <div class="warehouse__content">
        <div
          class="warehouse__addCart"
          @click="showForm = true"
          v-if="!showForm"
        >
          <img src="@/assets/image/svg/plus.svg" alt="" />
        </div>
        <div class="warehouse__form" v-if="showForm === true">
          <div class="warehouse__form-top">
            <div class="warehouse__form-block">
              <Hinput
                name="Номер склада"
                type="number"
                min="0"
                v-model="warehouseNumber"
              />
              <Hinput name="Культура" v-model="culture" />
              <Hinput name="Сорт" v-model="variety" />
              <Hinput name="Вес" v-model="weight" />
            </div>
            <div class="warehouse__form-block">
              <Hinput
                name="Клейковина"
                type="number"
                min="0"
                v-model="gluten"
              />
              <Hinput name="Белок" type="number" min="0" v-model="proteuin" />
              <Hinput name="Натура" type="number" min="0" v-model="nature" />
              <Hinput
                name="Масличность"
                type="number"
                min="0"
                v-model="oilContent"
              />
            </div>
            <div class="warehouse__form-block">
              <Hinput name="Номер Машины" v-model="numberCar" />
              <Calendar name="Дата разгрузки машины" v-model="date" />
            </div>
            <div class="warehouse__form-block">
              <Hinput
                type="time"
                class="warehouse__form-time"
                name="Время разгрузки машины"
                v-model="time"
              />
            </div>
          </div>
          <div class="warehouse__form-bottom">
            <button @click="addCard(), (showForm = false)">Добавить</button>
            <button @click="showForm = false">Отмена</button>
          </div>
        </div>
        <WarehouseCard
          v-for="warehouseCard in warehouseCards"
          :key="warehouseCard.id"
          :warehouseCards="warehouseCard"
        ></WarehouseCard>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/sidebar/Sidebar'
import Loader from '@/components/loader/Loader.vue'
import CornLoading from '@/components/CornLoading.vue'
import WarehouseCard from '@/components/WarehouseCard.vue'
import Hinput from '../components/Hinput.vue'
import Calendar from '../components/Calendar.vue'

export default {
  name: 'warehouse',
  components: {
    Sidebar,
    Loader,
    CornLoading,
    WarehouseCard,
    Hinput,
    Calendar,
  },
  data() {
    return {
      showForm: false,
      tabItem: 'loading',
      warehouseCards: [],
      warehouseNumber: null,
      culture: null,
      variety: null,
      weight: null,
      gluten: null,
      proteuin: null,
      nature: null,
      oilContent: null,
      numberCar: null,
      date: null,
      time: null,
      cartId: null,
      unloadCards: [
        {
          warehouseNumber: 1,
          cartId: 1,
          nature: 750,
          weight: 7.8,
          cornLoadingNumberCar: 'Т285ЕК 126RUS',
          protein: 12,
          gluten: 22,
        },
        {
          warehouseNumber: 1,
          cartId: 2,
          nature: 750,
          weight: 14.3,
          cornLoadingNumberCar: 'Т285ЕК 126RUS',
          protein: 12,
          gluten: 22,
        },
      ],
      loadCards: [
        {
          warehouseNumber: 1,
          cartId: 1,
          nature: 750,
          weight: 15.45,
          cornLoadingNumberCar: 'Т255ЖК 126RUS',
          protein: 12,
          gluten: 22,
        },
        {
          warehouseNumber: 1,
          cartId: 2,
          nature: 750,
          weight: 15.45,
          cornLoadingNumberCar: 'Т255ЖК 126RUS',
          protein: 12,
          gluten: 22,
        },
        {
          warehouseNumber: 1,
          cartId: 3,
          nature: 750,
          weight: 15.45,
          cornLoadingNumberCar: 'Т255ЖК 126RUS',
          protein: 12,
          gluten: 22,
        },
      ],
    }
  },
  computed: {},
  mounted() {
    this.itCards()
  },
  methods: {
    clearForm() {
      this.warehouseNumber = null
      this.culture = null
      this.variety = null
      this.weight = null
      this.gluten = null
      this.proteuin = null
      this.nature = null
      this.oilContent = null
      this.numberCar = null
      this.date = null
      this.time = null
      this.cartId = null
    },
    itCards() {
      if (this.tabItem === 'loading') {
        this.warehouseCards = this.loadCards
      } else {
        this.warehouseCards = this.unloadCards
      }
      return this.warehouseCards
    },
    addCard() {
      const card = {
        warehouseNumber: this.warehouseNumber,
        culture: this.culture,
        variety: this.variety,
        weight: this.weight,
        gluten: this.gluten,
        proteuin: this.proteuin,
        nature: this.nature,
        oilContent: this.oilContent,
        numberCar: this.numberCar,
        date: this.date,
        time: this.time,
        cartId: 1,
      }
      if (this.tabItem === 'loading') {
        this.loadCards.push(card)
      } else {
        this.unloadCards.push(card)
      }
      this.clearForm()
    },
  },
}
</script>
<style lang="scss" scoped>
.warehouse {
  box-sizing: border-box;
  font-family: 'Montserrat';
  width: 100%;
  min-height: 100vh;
  display: flex;
  &__sidebar {
    min-width: 260px;
    height: 100%;
  }
  &__main {
    width: 100%;
    padding: 10px;
    background: #e3e8e2;
    &-nav {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #f1f1f1;
      margin-bottom: 20px;
      width: 100%;
      &-list {
        display: flex;
        height: 25px;
        padding: 0;
        width: 100%;
      }
      &-item {
        box-sizing: border-box;
        color: #999999;
        font-size: 16px;
        cursor: pointer;
        white-space: nowrap;
        width: 50%;
        text-align: center;
      }
      &-item:hover {
        color: #5ca450;
        border-bottom: 2px solid #5ca450;
      }
    }
  }
  &__itemActive {
    color: #5ca450;
    border-bottom: 2px solid #5ca450;
  }
  &__content {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
  &__addCart {
    background: #5ca450;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 190px;
    margin: 10px 10px 10px 0;
    cursor: pointer;
    border-radius: 10px;
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
  &__form {
    background: white;
    height: auto;
    width: 100%;
    padding: 15px;
    display: flex;
    border-radius: 10px;
    margin: 10px 0;
    display: flex;
    flex-direction: column;
  }
  &__form-top {
    display: flex;
  }
  &__form-bottom {
    display: flex;
    justify-content: end;
    width: 100%;
    button {
      cursor: pointer;
      max-width: 130px;
      width: 100%;
      height: 40px;
      background: #5ca450;
      border-radius: 10px;
      color: #fff;
      margin: 0 12px 0 0;
    }
    button:hover {
      border: 1px solid #5ca450;
      background: #fff;
      color: #5ca450;
    }
  }
  &__form-block {
    width: 24%;
    margin: 0 10px;
  }
  &__form-time {
    width: 100%;
    height: 100%;
  }
}
</style>
