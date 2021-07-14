<template>
  <div class="content">
    <div class="content__header">
      <div class="content__header-out">
        <img src="@/assets/image/svg/arrow.svg" alt="" />
        <p class="content__header-name">Назад</p>
      </div>
      <p class="content__header-title">ГЕКТАР</p>
    </div>
    <div class="content__field">
      <p class="content__field-name">4 участок</p>
      <div class="content__field-year">
        <p class="content__year-name"></p>
        <v-select :items="items" label="Solo field" solo></v-select>
      </div>
    </div>
    <div class="content__add">
      <img src="@/assets/image/svg/addIcon.svg" alt="" />
      <p class="content__add-name">Добавить работу</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FieldManagement',
  data: () => ({
    items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
  }),
}
</script>
<style lang="scss" scoped>
.content {
  font-family: Inter;
  padding: 0 25px;
  height: 100vh;
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    &-out {
      display: flex;
      align-items: center;
      height: 100%;
      cursor: pointer;
    }
    &-name {
      font-size: 18px;
      color: #999999;
      margin-left: 18px;
    }
    &-title {
      font-family: Montserrat;
      font-size: 36px;
      color: #5ca450;
      letter-spacing: 9px;
    }
  }
  &__add {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-height: 200px;
    height: 100%;
    cursor: pointer;
    border: 1px solid #5ca450;
    border-radius: 10px;
    &-name {
      font-size: 18px;
      color: #222222;
      margin-left: 10px;
    }
  }
}
</style>