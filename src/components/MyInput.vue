<template>
  <div class="my-input">
    <input 
      type="text" 
      class="my-input__input"
      v-model="inputText"
    >
    <my-button
      title="Найти"
      @click.native="$emit('show-input', inputText)"
    />
  </div>
</template>

<script>
import MyButton from '@/components/MyButton.vue'

export default {
    name: 'my-input',

    components: {
      MyButton
    },

    data() {
      return {
        inputText: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
.my-input {
  display: flex;

  &__input {
    margin-right: 15px;
  }
}

</style>