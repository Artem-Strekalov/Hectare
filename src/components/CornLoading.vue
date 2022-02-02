<template>
  <div class="CornLoading">
    <div class="CornLoading__cart" v-for="item in cart" :key="item.id">
      <span class="CornLoading__close" @click.prevent="removeTillage(item.id)">
        <i class="material-icons">close</i>
      </span>
      <h2 class="CornLoading__cart-name">{{ item.weight }} т</h2>
      <div class="CornLoading__cart-content">
        <p class="CornLoading__cart-content-item" v-if="item.warehouseNumber">
          <span class="CornLoading__span"> Номер склада:</span>
          {{ item.warehouseNumber }}
        </p>
        <p class="CornLoading__cart-content-item" v-if="item.CornLoadingNumberCar">
          <span class="CornLoading__span"> Номер машины:</span>
          {{ item.CornLoadingNumberCar }}
        </p>
        <p class="CornLoading__cart-content-item" v-if="item.nature">
          <span class="CornLoading__span">Натура зерна:</span>
          {{ item.nature }}
        </p>
        <p
          class="CornLoading__cart-content-item"
          v-if="item.gluten"
        >
          <span class="CornLoading__span"> Клейковина зерна:</span>
          {{ item.gluten }}
        </p>
        <p class="CornLoading__cart-content-item" v-if="item.protein">
          <span class="CornLoading__span"> Протеин зерна:</span>
          {{ item.protein }}
        </p>
        <p
          class="CornLoading__cart-content-item"
          v-if="item.startTillage || item.endTillage"
        >
          <span class="CornLoading__span"> Дата загрузки: </span>
           {{ changeFormatDate(item.startTillage) }} 
        </p>
      </div>
      <div class="CornLoading__cart-content">
        <button
          class="CornLoading__btn CornLoading__btnCart"
          @click.prevent="openRedactionForm(item)"
        >
          Редактировать
        </button>
      </div>
    </div>
    <form class="CornLoading__form" v-if="showForm" @submit.prevent="addCornLoad">
      <div class="CornLoading__form-block">
        <Hinput name="Введите массу загрузки, т" v-model="weight" type="number"> </Hinput>
        <Hinput
          class="inputRight"
          name="Укажите номер склада"
          v-model="warehouseNumber"
          type="number"
        >
        </Hinput>
        <Hinput
          class="inputRight"
          name="Номер машины"
          v-model="CornLoadingNumberCar"
        >
        </Hinput>
      </div>
      <div class="CornLoading__form-block">
        <Hinput name="Натура зерна" v-model="nature" type="number"> </Hinput>
        <Hinput
          class="inputRight"
          name="Клейковина зерна"
          v-model="gluten"
          type="number"
        >
        </Hinput>
        <Hinput
          class="inputRight"
          name="Протеин зерна"
          v-model="protein"
          type="number"
        >
        </Hinput>
      </div>
      <div class="CornLoading__form-block">
        <div class="CornLoading__form-date">
          <Calendar :selectedDate.sync="startTillage" name="Дата загрзуки">
          </Calendar>
        </div>
      </div>
     
      <button
        @click.prevent="changeTillage"
        v-if="showChangeForm"
        class="CornLoading__btn CornLoading__btnAdd"
      >
        Сохранить
      </button>
      <button
        v-if="!showChangeForm"
        type="submit"
        class="CornLoading__btn CornLoading__btnAdd"
      >
        Добавить
      </button>
      <button
        @click.prevent="closeForm()"
        class="CornLoading__btn CornLoading__btnCancel"
      >
        Отмена
      </button>
    </form>
    <div class="CornLoading__addCart" v-if="!showForm" @click="showForm = true">
      <img src="@/assets/image/svg/plus.svg" alt="" />
    </div>
  </div>
</template>
<script>
import Hinput from './Hinput.vue'
import vuescroll from 'vuescroll'
import Calendar from './Calendar.vue'
export default {
  name: 'CornLoading',
  components: {
    Calendar,
    Hinput,
    vuescroll,
  },
  props: {
   
  },
  data() {
    return {
      warehouseNumber: null,
      cartId: null,
      showForm: false,
      endTillage: null,
      nature: null,
      weight: null,
      CornLoadingNumberCar: null,
      startTillage: null,
      protein: null,
      showChangeForm: false,
      gluten: null,
      cornLoadCarts: [{}]
    }
  },
  mounted() {
    
  },
  methods: {
    closeForm: {
      
    }

  },
  computed: {
    
  },
  watch: {
    
  },
}
</script>
<style lang="scss" scoped>
.CornLoading {
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

    .CornLoading__close {
      position: absolute;
      right: 10px;
      top: 10px;
      color: red;
      cursor: pointer;
      opacity: 0.3;
    }
    .CornLoading__close:hover {
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
      .CornLoading__form-date {
        display: flex;
        align-items: center;
        width: 100%;
      }
      .CornLoading__dash {
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
  .CornLoading__form-section {
    display: flex;
    align-items: center;
    white-space: nowrap;

    .CornLoading__dash {
      margin: 15px 10px 0 10px;
      width: 20px;
      border-top: 2px solid #999;
    }
  }
  .CornLoading__btn {
    cursor: pointer;
    max-width: 130px;
    width: 100%;
    height: 40px;
    background: #5ca450;
    border-radius: 10px;
    color: #fff;
    margin: auto 0 0 auto;
  }

  .CornLoading__btnCancel {
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
