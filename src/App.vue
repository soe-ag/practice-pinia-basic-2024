<script setup>
import TheHeader from "@/components/TheHeader.vue";
import ProductCard from "@/components/ProductCard.vue";
// import products from "@/data/products.json";
import { useProductStore } from "./stores/ProductStore";
// import { storeToRefs } from "pinia";

import { useCartStore } from "./stores/CartStore";

const productStore = useProductStore();
// use above or destruccture and use it as below, need store to refs to maintain reactivity
// only good when calling state from stores only, not actions
// const { products } = storeToRefs(useProductStore());

const cartStore = useCartStore();

productStore.fill();

// comment out the following part as using the actions inside CartStore.js
// const addToCart = (count, product) => {
//   count = parseInt(count);
//   cartStore.$patch((state) => {
//     for (let index = 0; index < count; index++) {
//       state.items.push(product);
//     }
//   });
// };
</script>

<template>
  <div class="container">
    <TheHeader />
    <ul class="sm:flex flex-wrap lg:flex-nowrap gap-5">
      <ProductCard
        v-for="product in productStore.products"
        :key="product.name"
        :product="product"
        @addToCart="cartStore.addItems($event, product)"
      />
    </ul>
  </div>
</template>
