<template>
  <div class="about">
    <div class="about__header">
      <div class="about__back" @click.prevent="goHome">
        <span class="material-icons about__arrow">
          arrow_back
        </span>
        <span class="about__back-title">Назад</span>
      </div>
    </div>

    <div class="about__main">
      <h2 class="about__title" @click.prevent="goHome">ГЕКТАР <br> </h2>
      Растениеводство не прощает ошибок, любая мелочь, любое неправильное
      действие при выращивании любой культуры, обязательно скажется на её
      урожайности. База техники, склад, цены на зерно, работы в полях - все это
      нужно деражать в одной голове. Кажется нереальным, правда?
      <br />
        Гектар - это многопользовательская платформа, предназнаенная для ведения
      статистики работы фермерского хозяйства, специализирующегося на
      выращивании сельскохозяйственных культур, которая поможет справиться с
      такой сложной задачей, как фермерство. Платформа обладает самыми важными
      иснтрументами для фермера. Удобство интерфейса и простота пользования
      помогают быстро вносить данные о любой работе на вашем поле, пишите
      заметки при проведении каждой, чтобы в следующий раз не допустить
      “непрощаемой” ошибки. <br />
        Контролируйте в разделе ресурсы расход своих материаллов, от
      препаратов СЗР до топлива. В разделе склад вы можете найти данные о своем
      убранном урожае и о его оставшемся количестве. Раздел техника информирует
      вас о расходе топлива каждой единицы техники и обработанной площади.
      Смотрите рейтинг за весь год, просмотривайте среднюю урожайность, цену за
      тонну выращенной культуры и годовую затраченную сумму, делайте выводы,
      оставляйте заметки в каждом разделе, чтобы уж точно ничего не забыть!
    </div>
  </div>
</template>

<script>
import HeaderHectare from '@/components/HeaderHectare'
export default {
  components: {
    HeaderHectare,
  },
  name: 'about',
  data() {
    return {}
  },
  methods: {
    goHome() {
      this.$router.push({name: 'home'})
    },
  },
}
</script>
<style lang="scss" scoped>
.about {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(
      to top left,
      white 10%,
      #14cc60 10%,
      #09a129 25%,
      rgba(255, 255, 255, 0) 25%
    ),
    linear-gradient(
      to top right,
      white 10%,
      #14cc60 10%,
      #09a129 25%,
      rgba(255, 255, 255, 0) 25%
    );
  &__main {
    max-width: 850px;
    display: flex;
    flex-direction: column;
    padding: 25px;
    font-size: 16px;
    line-height: 1.7em;
    font-weight: 400;
    height: 90%;
    text-align: justify;
    font-family: 'Roboto';
    white-space: pre-wrap;
  }
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    padding: 0 25px;
    width: 100%;
    max-height: 70px;
    height: 100%;
  }
  &__back {
    display: flex;
    align-items: center;
  }
  &__arrow {
    cursor: pointer;
    color: #999;
    font-size: 28px;
  }
  &__back-title {
    cursor: pointer;
    color: #999;
    font-size: 18px;
    margin-left: 5px;
  }
  &__title {
    font-family: Montserrat;
    font-size: 36px;
    color: #5ca450;
    padding: 0 0 10px 0;
  }
}
</style>
