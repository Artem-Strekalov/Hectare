<template>
  <div class="home">
    <div class="home__sidebar">
      <Sidebar activeLink="fields"></Sidebar>
    </div>
    <div class="home__main">
      <div class="testе">
        <FieldCard
          v-for="field in dataFields"
          :key="field.id"
          :name="field.name"
          :square="field.square"
          :status="field.status"
        />
        <div class="home__addField">
          <img src="@/assets/image/plus.png" alt="" />
          <p>Добавить участок</p>
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

    .testе {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
    }
  }
  &__addField {
    cursor: pointer;
    margin: 15px;
    max-width: 400px;
    width: 100%;
    height: 200px;
    border-radius: 10px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      margin-left: 5px;
      font-size: 18px;
    }
  }
  &__addField:hover {
    p {
      font-size: 20px;
    }
    img {
      width: 20px;
    }
  }
}
</style>
