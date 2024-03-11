import { defineStore } from "pinia";
// import productsJSON from "@/data/products.json"; << this is static import of JSON
export const useProductStore = defineStore("ProductStore", {
  // state
  state: () => {
    // return { products };
    return {
      products: [],
    };
  },
  // actions
  actions: {
    async fill() {
      // this.products = productsJSON; < this is static call
      this.products = (await import("@/data/products.json")).default;
      // dynamic import returns that json under a key of default
    },
  },
  // getters
});
