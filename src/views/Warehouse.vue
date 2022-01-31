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
          v-if="!showForm"
          @click="showForm = true"
        >
          <img src="@/assets/image/svg/plus.svg" alt="" />
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
export default {
  name: 'warehouse',
  components: {
    Sidebar,
    Loader,
    CornLoading,
    WarehouseCard,
  },
  data() {
    return {
      tabItem: 'loading',
      warehouseCards: [],
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
  computed: {
    itCards() {
      if (this.tabItem === 'loading') {
        this.warehouseCards = this.loadCards
      } else {
        this.warehouseCards = this.unloadCards
      }
      return this.warehouseCards
    },
  },
  async mounted() {},
  methods: {},
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
      .warehouse__itemActive {
        color: #5ca450;
        border-bottom: 2px solid #5ca450;
      }
      .warehouse__first-item {
      }
    }
  }
  &__conten{
    display: flex;
    flex-direction: column;

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
    img {
      margin: auto;
    }
  }
}
</style>
