<template>
  <div class="home">
    <div class="home__sidebar">
      <div class="sidebar__header">
        <h1 class="header-title">ГЕКТАР</h1>
      </div>

      <ul class="sidebar__menu">
        <li class="menu__item menu__item-active">Мои поля</li>
        <li class="menu__item">Ресурсы</li>
        <li class="menu__item">Техника</li>
        <li class="menu__item">Склад</li>
      </ul>

      <div class="sidebar__footer">
        <div class="footer__profile">
          <img src="@/assets/image/svg/userFoto.png" alt="" />
          <span class="profile__name-company">ИП КФХ Стрекалов</span>
        </div>
        <div class="footer__exit">Выйти</div>
      </div>
    </div>
    <div class="home__sections">
      <!-- ! поменять классы -->
      <div class="home__sections-my-fields"></div>
      <div class="home__sections-resources" style="display: none"></div>
      <div class="home__sections-technics" style="display: none"></div>
      <div class="home__sections-warehouse" style="display: none"></div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: 'home',
  data() {
    return {}
  },
}
</script>
<style lang="scss" scoped>
.home {
  width: 100vw;
  height: 100vh;
  .home__sidebar {
    max-width: 240px;
    width: 100%;
    height: 100%;
    padding: 0 15px 15px 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .sidebar__header {
      text-align: center;
      padding: 10px;
      width: 100%;
      max-height: 70px;
      height: 100%;
      border-bottom: 1px solid #999999;
      .header-title {
        font-family: Montserrat;
        font-size: 36px;
        color: #5ca450;
      }
    }
    .sidebar__menu {
      max-width: 124px;
      max-height: 211px;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: left;
      .menu__item {
        font-family: Inter;
        font-size: 24px;
        line-height: 16px;
        color: #999999;
      }
      .menu__item-active {
        color: #5ca450;
      }
    }
    .sidebar__footer {
      max-height: 100px;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;

      .footer__profile {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        height: 41px;
        width: 100%;
        border-bottom: 1px solid #999999;
        img {
        }
        .profile__name-company {
          font-family: Inter;
          font-size: 18px;
          line-height: 16px;
          color: #999999;
        }
      }
      .footer__exit {
        font-family: Inter;
        font-size: 18px;
        line-height: 16px;
        color: #999999;
      }
    }
  }
  &__sections {
    &-my-fields {
    }
  }
}
</style>
