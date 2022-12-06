<template>
  <div id="app">
    <div class="wrapper">
      <h2 class="title">Диваны</h2>
      <ProductList/>
    </div>
  </div>
</template>

<script>
import ProductList from '@/components/ProductList.vue'

export default {
  name: 'youtube-task',

  components: {
    ProductList
  }
  
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Heebo:wght@400;600&display=swap');

*,
body,
html {
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Heebo', sans-serif;
}

.wrapper {
  width: 900px;
  margin: 50px auto;
}

.title {
  margin-bottom: 20px;
}
</style>
