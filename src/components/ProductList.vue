<template>
  <div class="product-list">
    <product-card
      v-for="(product, index) in products"
      :key="index"
      :title="product.title"
      :price="product.price"
      :photo="product.photo"
      :balance="product.balance"
      :index="index"
      @show-index="showIndex"
    >
    </product-card>
    </div>
</template>

<script>
  import ProductCard from '@/components/ProductCard.vue'

  export default {
    components: {
      ProductCard
    },

    data() {
      return {
        products: [
          {
            title: 'Диван-кровать Парма',
            price: 25000,
            balance: 7,
            photo: require("@/assets/images/couch_1.jpg")
          },
          {
            title: 'Диван-кровать SOLANA Флоренция',
            price: 49000,
            balance: 3,
            photo: require("@/assets/images/couch_2.jpg")
          },
          {
            title: 'Диван-кровать Малага',
            price: 19000,
            balance: 15,
            photo: require("@/assets/images/couch_3.jpg")
          },
          {
            title: 'Диван-кровать Аметист',
            price: 37000,
            balance: 9,
            photo: require("@/assets/images/couch_4.jpg")
          },
        ]
      }
    },

    methods: {
      showIndex(index) {
        console.log(index)
      }
    }
  }
</script>

<style lang="scss" scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
  
}

</style>