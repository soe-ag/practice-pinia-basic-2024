import { defineStore } from "pinia";

export const useCartStore = defineStore("CartStore", {
  state: () => {
    return {
      items: [],
    };
  },
  getters: {
    // count() {
    //   return this.items.length;
    // },
    count: (state) => state.items.length,
    // isEmpty() {
    //   return this.count === 0;
    // },
    isEmpty: (state) => state.count === 0,
  },
  actions: {
    addItems(count, item) {
      count = parseInt(count);
      for (let index = 0; index < count; index++) {
        this.items.push({ ...item });
      }
    },
  },
});
