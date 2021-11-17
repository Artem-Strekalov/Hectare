<template>
  <div class="home">
    <div class="home__sidebar">
      <Sidebar activeLink="fields"></Sidebar>
    </div>
    <div class="home__main">
      <div class="home__main-content">
        <FieldCard
          v-for="field in dataFields"
          :key="field.id"
          :name="field.name"
          :square="field.square"
          :status="field.status"
        />
        <div class="home__addField">
          <div class="home__addField-content">
            <img src="@/assets/image/plus.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import FieldCard from '@/components/FieldCard'
export default {
  components: {
    FieldCard,
    Sidebar,
  },
  name: 'home',
  data() {
    return {
      dataFields: [
        {id: 1, name: 'Участок № 1', status: 'Задисковано', square: 100},
        {id: 2, name: 'Участок № 2', status: 'Пары', square: 200},
        {id: 3, name: 'Участок № 3', status: 'Посеяно', square: 15},
        {id: 4, name: 'Участок № 4', status: 'Пахота', square: 75},
        {id: 5, name: 'Участок № 4', status: 'Пахота', square: 75},
        {id: 7, name: 'Участок № 4', status: 'Пахота', square: 75},
      ],
    }
  },
  async mounted() {
    if (!Object.keys(this.$store.getters.info).length) {
      await this.$store.dispatch('fetchInfo')
    }
  },
  methods: {},
}
</script>
<style lang="scss" scoped>
.home {
  
  font-family: 'Montserrat';
  width: 100%;
  min-height: 100vh;
  display: flex;
  &__sidebar {
    min-width: 261px;
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
      background: #fff;
      border-radius: 10px;
    }
  }
 
}
</style>
