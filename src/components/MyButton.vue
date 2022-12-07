<template>
  <button 
    class="my-button"
    @click="$emit('show-index', index)"
  >
    {{ title }}
  </button>
</template>

<script>
export default {
  name: "my-button",

  props: {
    title: String,
    index: Number
  },
};
</script>

<style lang="scss" scoped>
.my-button {
  padding: 10px 20px;
  border: none;
  background: rgb(247, 68, 68);
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
}
</style>
