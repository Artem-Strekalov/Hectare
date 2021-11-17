<template>
  
</template>

<script>
import Sidebar from '@/components/Sidebar'
import FieldCard from '@/components/FieldCard'
export default {
  components: {
    FieldCard,
    Sidebar,
  },
  name: 'FieldRedaction',
  data() {
    return {
      
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
  width: 100vw;
  height: 100vh;
  display: flex;
  &__sidebar-wrapper {
    max-width: 261px;
    width: 100%;
    height: 100%;
  }
  &__sections {
    min-height: 100vh;
    background: #f4f4f4;
    height: auto;
  }
  &__fields {
    padding: 0px 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-grow: 1;
  }
  &__addings-card {
    height: 200px;
    width: 48%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffffff;
    border: 1px solid #5ca450;
    border-radius: 10px;
    font-family: Inter;
    font-size: 24px;
    line-height: 16px;
    color: #5ca450;
    margin: 50px 50px 0px 0px;
    transition: 500ms;
    &:hover {
      transform: scale(0.95);
      transition: 400ms;
      img {
        transform: rotate(90deg);
        transition: 400ms;
      }
    }
    img {
      margin-right: 5px;
      transition: 400ms;
    }
  }
}
</style>
