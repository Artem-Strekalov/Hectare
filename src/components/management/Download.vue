<template>
  <download-excel :data="dataFields">
    <span class="download">Скачать данные</span>
  </download-excel>
</template>

<script>
export default {
  name: 'Download',
  computed: {
    dataFields() {
      const dataTillage = this.$store.getters.getTillage
      return dataTillage
    },
  },
}
</script>

<style lang="scss" scoped>
.download {
  cursor: pointer;
  color: #5ca450;
}
</style>
