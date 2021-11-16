<template>
  <div class="home">
    <div class="home__sidebar-wrapper">
      <Sidebar activeLink="fields"></Sidebar>
    </div>
    <div class="home__sections">
      <FieldCard></FieldCard>
      <div class="home__fields">
        <!--  <FieldCard
          v-for="card in fieldsDescription"
          :key="card.id"
          :name="card.name"
          :status="card.status"
          :area="card.area"
        ></FieldCard> -->
        <!-- <div class="home__addings-card">
          <img src="@/assets/image/svg/plus.png" alt="" /> Добавить поле
        </div> -->
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
      fieldsDescription: [
        {id: 1, name: 'Ромашка', status: 'Посеяно', area: 8},
        {
          id: 2,
          name: 'Кирпичный  60га',
          status: 'Пары',
          area: 60,
        },
        {
          id: 3,
          name: 'Западная',
          status: 'Посеяно',
          area: 7,
        },
        {
          id: 4,
          name: 'Западная',
          status: 'Посеяно',
          area: 7,
        },
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
* {
  box-sizing: border-box;
}
.home {
  width: 100%;
  min-height: 100vh;
  display: flex;
  &__sidebar-wrapper {
    max-width: 261px;
    width: 100%;
    height: 100%;
  }
  &__sections {
    width: 100%;
    height: 100%;
    background: grey;
    height: auto;
  }
  /*  */
}
</style>
