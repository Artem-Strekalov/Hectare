<template>
  <div class="date" @click.prevent="test = !test">
    <p class="name">{{ name }}</p>

    <input :value="date" @input="$emit('input', $event)" />
    <div class="test1">
      <v-date-picker v-if="test" v-model="date"></v-date-picker>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calendar',
  props: {
    name: {
      default: 'Календарь',
      type: String,
    },
  },
  data() {
    return {
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
      test: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.date {
  width: 100%;
}
.name {
  font-size: 12px;
  margin-bottom: 5px;
  color: #646464;
}
.dataPicker {
  width: 100%;
  height: 40px;
  border-radius: 10px;
  padding: 0 10px;
  background: #f1f1f1;
}
.test1 {
  position: absolute;
  z-index: 1;
}
</style>
