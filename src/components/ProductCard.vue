<template>
  <div class="product-card">
    <img 
      :src="photo" 
      class="product-card__img"
    >
    <div class="product-card__title">{{ title }}</div>
    <div class="product-card__price">{{ price }}р.</div>
    <div class="product-card__balance">Доступно {{ balance }} шт.</div>
    <div>
      <button 
        class="product-card__btn"
        @click="$emit('show-index', index)"
      >Добавить в корзину</button>
    </div>
    
  </div>
</template>

<script>
  export default {
    name: 'product-card',
    props: {
      title: String,
      price: Number,
      balance: {
        type: Number,
        required: true
      }, 
      photo: String,
      index: Number
    }
  }
</script>

<style lang="scss" scoped>
.product-card {
  display: flex;
  flex-direction: column;
  width: 350px;
  border: 2px solid rgb(60, 71, 73, 0.2);
  padding: 20px;
  margin-right: 15px;
  margin-bottom: 15px;
  
  &__img {
    width: 300px;
    align-self: center;
  }

  &__balance {
    color: rgb(0, 0, 0, 0.4);
    font-size: 12px;
  }

  &__title,
 &__price,
 &__balance {
    font-weight: 600;
    margin-bottom: 15px;
  }

  &__btn {
    padding: 10px 20px;
    border: none;
    background: rgb(247, 68, 68);
    border-radius: 10px;
    color: #fff;
    cursor: pointer;
  }
}

</style>