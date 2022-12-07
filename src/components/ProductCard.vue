<template>
  <div class="product-card">
    <img :src="photo" class="product-card__img" />
    <div class="product-card__title">{{ title }}</div>
    <div class="product-card__price">{{ price }}р.</div>
    <div class="product-card__balance">Доступно {{ balance }} шт.</div>
    <div>
      <my-button 
        title="Добавить в корзину" 
        :index="index"
        @show-index="$emit('show-index', index)"
      ></my-button>
    </div>
    
  </div>
</template>

<script>
import MyButton from "@/components/MyButton.vue";

export default {
  name: "product-card",
  props: {
    title: String,
    price: Number,
    balance: {
      type: Number,
      required: true,
    },
    photo: String,
    index: Number,
  },

  data() {
    return {
      counter: 0
    }
  },

  components: {
    MyButton,
  },

  methods: {
    alert(event) {
      console.log(event)
    }
  }
};
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
}
</style>
