<template>
  <div class="sidebar">
    <div class="sidebar__header">
      <h1 class="sidebar__title">ГЕКТАР</h1>
    </div>

    <ul class="sidebar__menu">
      <li class="sidebar__menu-item" :class="{active: activeLink === 'fields'}">
        <img src="@/assets/image/svg/field-icon.svg" alt="" />Мои поля
      </li>
      <li
        class="sidebar__menu-item"
        :class="{active: activeLink === 'resourse'}"
      >
        <img src="@/assets/image/svg/resource-icon.svg" alt="" /> Ресурсы
      </li>
      <li class="sidebar__menu-item" :class="{active: activeLink === 'tehnic'}">
        <img src="@/assets/image/svg/tehnic-icon.svg" alt="" />Техника
      </li>
      <li
        class="sidebar__menu-item"
        :class="{active: activeLink === 'warehouse'}"
      >
        <img src="@/assets/image/svg/warehouse-icon.svg" alt="" />Склад
      </li>
    </ul>

    <div class="sidebar__footer">
      <div class="sidebar__profile">
        <img src="@/assets/image/svg/userFoto.png" alt="" />
        <span class="sidebar__name-company">ИП КФХ Стрекалов</span>
      </div>
      <div class="sidebar__exit" @click.prevent="logout">Выйти</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Sidebar',
  props: {
    activeLink: {
      type: String,
    },
  },
  data() {
    return {}
  },
  methods: {
    async logout() {
      await this.$store.dispatch('logout')
      this.$router.push('/')
    },
  },
}
</script>
<style lang="scss" scoped>
.sidebar {
  max-width: 240px;
  width: 100%;
  height: 100%;
  padding: 0 15px 15px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  float: left;
  &__header {
    text-align: center;
    padding: 10px;
    width: 100%;
    max-height: 70px;
    height: 100%;
    border-bottom: 1px solid #999999;
  }
  &__title {
    font-family: Montserrat;
    font-size: 36px;
    color: #5ca450;
  }
  &__menu {
    max-height: 211px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0 0 0 15px;

    .active {
      color: #5ca450;
    }
  }
  &__menu-item {
    font-family: Inter;
    font-size: 24px;
    line-height: 16px;
    color: #999999;
    display: flex;
    align-items: center;
    width: 88%;
    text-align: left;
    transition: 300ms;
    cursor: pointer;
    &:hover {
      transform: translateX(15px);
      transition: 500ms;
    }
    img {
      margin-right: 10px;
    }
  }
  &__footer {
    max-height: 100px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  &__profile {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 46px;
    width: 100%;
    border-bottom: 1px solid #999999;
  }
  &__name-company {
    font-family: Inter;
    font-size: 18px;
    line-height: 16px;
    color: #999999;
  }
  &__exit {
    font-family: Inter;
    font-size: 18px;
    line-height: 16px;
    color: #999999;
    transition: 400ms;
    cursor: pointer;
    &:hover {
      transform: scale(1.2);
      transition: 400ms;
    }
  }
}
</style>
