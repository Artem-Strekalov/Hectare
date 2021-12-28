<template>
  <v-app>
    <div id="app">
      <WelcomeScreen v-if="helloPage" />
      <router-view v-else /></div
  ></v-app>
</template>
<script>
import WelcomeScreen from './views/WelcomeScreen.vue'
export default {
  components: {
    WelcomeScreen,
  },
  computed: {
    helloPage() {
      return this.$store.getters['statusHelloPage']
    },
  },
}
</script>

<style lang="scss">
@import 'null-style.scss';
</style>
