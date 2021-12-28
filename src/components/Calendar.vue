<template>
  <div class="calendar">
    <v-dialog
      ref="dialog"
      v-model="modal"
      :return-value.sync="selectedDateComputed"
      persistent
      width="290px"
    >
      <template v-slot:activator="{on, attrs}">
        <div class="date" v-bind="attrs" v-on="on">
          <p class="name">{{ name }}</p>
          <div class="date__select">
            <v-icon aria-hidden="false">
              mdi-calendar
            </v-icon>
            <div class="input__calendar">
              <p v-if="!selectedDate" class="default__date">
                {{ defaultDate }}
              </p>
              <p v-else>{{ changeDate(selectedDate) }}</p>
            </div>
            <!-- Инпут скрыт для вычисления -->
            <input class="dataPicker" v-model="selectedDate" readonly />
          </div>
        </div>
      </template>
      <v-date-picker
        locale="ru-ru"
        v-model="selectedDateComputed"
        scrollable
        color="#5ca450"
      >
        <v-btn text color="#5ca450" @click="modal = false">
          Отмена
        </v-btn>
        <v-btn
          text
          color="#5ca450"
          @click="$refs.dialog.save(selectedDateComputed)"
        >
          Сохранить
        </v-btn>
      </v-date-picker>
    </v-dialog>
  </div>
</template>

<script>
import moment, {locale} from 'moment'
export default {
  name: 'Calendar',
  props: {
    selectedDate: {
      default: '',
    },
    name: {
      default: 'Календарь',
      type: String,
    },
  },
  data() {
    return {
      modal: false,
      newFormatDate: null,
      defaultDate: moment(new Date())
        .locale('ru')
        .format('LL'),
    }
  },
  methods: {
    changeDate(item) {
      return moment(item)
        .locale('ru')
        .format('LL')
    },
  },
  computed: {
    selectedDateComputed: {
      get: function() {
        this.newFormatDate = moment(this.selectedDate)
          .locale('ru')
          .format('LL')
        return this.selectedDate
      },
      set: function(newDate) {
        this.$emit('update:selectedDate', newDate)
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.calendar {
  width: 100%;
}
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
  margin-left: 10px;
  cursor: pointer;
  display: none;
}
.input__calendar {
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  border-radius: 10px;
  padding: 0 10px;
  background: #f1f1f1;
  margin-left: 10px;
  cursor: pointer;
  p {
    margin: 0;
  }
  .default__date{
    opacity: 0.4;
  }
}
.date__select {
  display: flex;
}
</style>
