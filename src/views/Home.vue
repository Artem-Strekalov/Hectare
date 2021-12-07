<template>
  <div class="home">
    <div class="home__sidebar">
      <Sidebar activeLink="fields"></Sidebar>
    </div>
    <div class="home__main">
      <div class="home__main-content">
        <FieldCard v-for="field in fields" :key="field.id" :field="field" />
        <div class="home__addField">
          <div class="home__addField-content" @click="showModalWindow">
            <img src="@/assets/image/svg/plus.svg" alt="" />
          </div>
        </div>
      </div>
      <HomeModal
        v-if="isVisibleModalWindow"
        :closeModalWindow="closeModalWindow"
      ></HomeModal>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/sidebar/Sidebar'
import FieldCard from '@/components/FieldCard'
import Modal from '@/components/modal/Modal.vue'
import HomeModal from '@/components/modal/HomeModal.vue'
export default {
  name: 'home',
  components: {
    FieldCard,
    Sidebar,
    Modal,
    HomeModal,
  },
  data() {
    return {
      fields: [{id: 1, name: 'Участок №1', square: 60, status: 'Пахота'}],
      fieldName: '',
      fieldStatus: '',
      fieldSquare: null,
      isVisibleModalWindow: false,
    }
  },
  methods: {
    showModalWindow() {
      this.isVisibleModalWindow = true
    },
    closeModalWindow() {
      this.isVisibleModalWindow = false
    },
  },
}
</script>
<style lang="scss" scoped>
.home {
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
    /*  background: #EFF2E7; */
    padding: 10px;
    background: #e3e8e2;

    &-content {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
    }
  }
  &__addField {
    cursor: pointer;
    position: relative;
    border: 10px solid #e3e8e2;
    width: 33.3333333%;
    height: 200px;
    background: #e3e8e2;
    p {
      margin-left: 5px;
      font-size: 18px;
    }
    &-content {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      background: #5ca450;
      opacity: 0.8;
      border-radius: 10px;
      img {
        transition: transform 0.5s ease-in-out;
      }
    }
    &-content:hover {
      opacity: 1;
      img {
        transform: rotate(90deg);
        width: 50px;
      }
    }
  }
}
</style>
