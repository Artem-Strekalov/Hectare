<template>
  <div class="modal" ref="modal">
    <div class="modal__content">
      <div class="modal__content-header">
        <span>
          <i @click="closeModal" class="modal__close material-icons">close</i>
        </span>
      </div>
      <div class="modal__content-main">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    closeModal() {
      this.$emit('closeModal')
    },
  },

  mounted() {
    let vm = this
    // определяем клик на блоке modal
    document.addEventListener('click', item => {
      if (item.target === vm.$refs['modal']) {
        vm.closeModal()
      }
    })
  },
}
</script>
<style lang="scss" scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  background: #2222228c;

  &__content {
    position: fixed;
    top: 50px;
    max-width: 600px;
    width: 100%;
    padding: 16px;
    background: #fff;
    box-shadow: 0 0 2px 0 #fff;
    &-header {
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
    &-main {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  &__close {
    cursor: pointer;
    margin-left: auto;
  }
}
</style>
