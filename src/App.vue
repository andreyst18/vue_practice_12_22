<template>
  <div id="app">
    <div class="wrapper">
      <div class="header">
        <h2 class="title">Диваны</h2>
        <my-input
          @show-input="showInput"
        />
      </div>
      
      <ProductList/>
    </div>
  </div>
</template>

<script>
import ProductList from '@/components/ProductList.vue'
import MyInput from '@/components/MyInput.vue'

export default {
  name: 'youtube-task',

  components: {
    ProductList,
    MyInput
  },

  methods: {
    showInput(text) {
      console.log(text)
    }
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

.header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.title {
  margin-right: 20px;
}
</style>
