<template>
  <div class="mgt">
    <div class="mgt__header">
      <h1 class="mgt__header-title" @click.prevent="goHome">ГЕКТАР</h1>
      <div class="mgt__header-back">
        <div class="mgt__back" @click.prevent="goHome">
          <span class="material-icons arrow">
            arrow_back
          </span>
          <span class="back-title">Назад</span>
        </div>
        <span class="mgt__header-back-name" v-if="nameField">
          {{ nameField }}, {{ squareField }} га
        </span>
        <div class="mgt__year">
          <span class="mgt__year-title">Выберите год:</span>
          <SelectYears @select="optionSelect"></SelectYears>
        </div>
      </div>
    </div>
    <div class="mgt__main">
      <div class="mgt__main-nav">
        <ul class="mgt__main-nav-list">
          <li
            class="mgt__main-nav-item mgt__first-item"
            :class="{mgt__itemActive: navItem === 'tillage'}"
            @click.prevent="navItem = 'tillage'"
          >
            Подготовка почвы
          </li>
          <li
            class="mgt__main-nav-item"
            :class="{mgt__itemActive: navItem === 'sowing'}"
            @click.prevent="navItem = 'sowing'"
          >
            Сев
          </li>
          <li
            class="mgt__main-nav-item"
            :class="{mgt__itemActive: navItem === 'additionally'}"
            @click.prevent="navItem = 'additionally'"
          >
            Дополнительные работы
          </li>
          <li
            class="mgt__main-nav-item"
            :class="{mgt__itemActive: navItem === 'harvest'}"
            @click.prevent="navItem = 'harvest'"
          >
            Уборка урожая
          </li>
        </ul>
        <Download></Download>
      </div>

      <div class="mgt__content">
        <vuescroll :ops="ops">
          <Tillage v-if="navItem === 'tillage'" :year="currentYear"></Tillage>
          <Sowing v-if="navItem === 'sowing'" :year="currentYear"></Sowing>
          <Additionally v-if="navItem === 'additionally'" :year="currentYear">
          </Additionally>
          <Harvest v-if="navItem === 'harvest'" :year="currentYear"></Harvest>
        </vuescroll>
      </div>
    </div>
    <Loader v-if="loading"></Loader>
  </div>
</template>
<script>
import Tillage from '@/components/management/Tillage.vue'
import Sowing from '@/components/management/Sowing.vue'
import Harvest from '@/components/management/Harvest.vue'
import Additionally from '@/components/management/Additionally.vue'
import Download from '@/components/management/Download.vue'
import Loader from '@/components/loader/Loader.vue'
import SelectYears from '@/components/SelectYears.vue'
import vuescroll from 'vuescroll'
import {db} from '../firebase'
import {doc, getDoc} from 'firebase/firestore'
export default {
  components: {
    Sowing,
    Loader,
    Tillage,
    Harvest,
    Additionally,
    SelectYears,
    vuescroll,
    Download,
  },
  data() {
    return {
      navItem: 'tillage',
      idField: null,
      nameField: '',
      squareField: '',
      currentYear: new Date().getFullYear(),
      json_data: [
        {
          name: 'naveen',
        },
      ],
      ops: {
        bar: {
          onlyShowBarOnScroll: true,
          keepShow: false,
          background: '#5ca450',
          opacity: 0.8,
          hoverStyle: false,
          specifyBorderRadius: false,
          minSize: 0.1,
          size: '8px',
        },
      },
    }
  },
  async mounted() {
    this.idField = await this.$route.query.id
    await this.getField()
  },
  destroyed() {
    this.$store.commit('clearTillage')
  },
  methods: {
    optionSelect(option) {
      this.currentYear = option
    },
    async getField() {
      this.$store.commit('saveLoading', true)
      const uid = await this.$store.dispatch('getUid')
      const path = await doc(db, 'fields', `${uid}`)
      const dataFields = await getDoc(path)
      if (dataFields.exists()) {
        const field = dataFields.data()[this.idField]
        this.nameField = field.name
        this.squareField = field.square
      }
      this.$store.commit('saveLoading', false)
      return
    },
    goHome() {
      this.$router.push({name: 'home'})
    },
  },
  computed: {
    loading() {
      return this.$store.getters.getLoading
    },
  },
}
</script>
<style lang="scss" scoped>
.mgt__content {
  width: 100%;
  height: inherit;
}
.mgt {
  font-family: 'Inter', arial;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  background: #e3e8e2;
  padding: 10px;
  overflow: hidden;
  &__header {
    display: flex;
    align-items: center;
    width: 100%;
    .mgt__back {
      display: flex;
      align-items: center;
    }
    &-title {
      cursor: pointer;
      font-family: Montserrat;
      font-size: 36px;
      color: #5ca450;
      padding: 0 60px 0 50px;
    }
    &-back {
      width: 100%;
      height: 50px;
      background: #fff;
      border-radius: 10px;
      padding: 0 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .arrow {
        cursor: pointer;
        color: #999;
        font-size: 25px;
      }
      .back-title {
        cursor: pointer;
        color: #999;
        font-size: 16px;
        margin-left: 5px;
      }
      &-name {
        font-size: 18px;
      }
    }
    .mgt__year {
      display: flex;
    }
    .mgt__year-title {
      color: #999;
      font-size: 16px;
    }
  }
  &__main {
    margin-top: 10px;
    width: 100%;
    height: calc(100% - 60px);
    background: #fff;
    border-radius: 10px;
    padding: 25px 10px 25px 25px;
    &-nav {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #f1f1f1;
      margin-bottom: 20px;
      margin-right: 20px;
      &-list {
        display: flex;
        height: 25px;
        padding: 0;
      }
      &-item {
        box-sizing: border-box;
        color: #999999;
        font-size: 16px;
        cursor: pointer;
        margin: 0 20px;
        white-space: nowrap;
      }
      &-item:hover {
        color: #5ca450;
        border-bottom: 2px solid #5ca450;
      }
      .mgt__itemActive {
        color: #5ca450;
        border-bottom: 2px solid #5ca450;
      }
      .mgt__first-item {
        margin: 0 10px 0 0;
      }
    }
  }
}
</style>
