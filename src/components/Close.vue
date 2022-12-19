<template>
  <div 
    class="close"
    @click="closeModal"
  >
    <div class="close__item close__item--first"></div>
    <div class="close__item close__item--second"></div>
  </div>
</template>

<script>
  export default {
    name: 'Close',
    methods: {
    closeModal() {
      this.$emit('close-modal')
    }
  }
    
  }
</script>

<style lang="scss" scoped>
.close {
  position: relative;
  cursor: pointer;
  &__item{
    width: 10px;
    height: 2px;
    background: #000;
    opacity: 0.5;

    &--first {
      position: relative;
      top: 2px;
      transform: rotate(45deg);
    }

    &--second {
      transform: rotate(-45deg);
    }
  }
}
</style>