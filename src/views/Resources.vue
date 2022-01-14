<template>
  <div class="content">
    <Sidebar activeLink="resources"></Sidebar>
    <div class="content__main">
      <div class="content__main-block"></div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/sidebar/Sidebar'
export default {
  name: 'Resources',
  components: {
    Sidebar,
  },
}
</script>

<style lang="scss">
.content {
  display: flex;
}
.content__main {
  width: 100%;
  max-height: 100vh;
  background: #e3e8e2;
  padding: 10px;
  &-block {
    width: 100%;
    height: 100%;
    background: #fff;
    border-radius: 10px;
  }
}
</style>
