import { defineStore } from "pinia";
import sourceData from "@/data.json";
export const useProductStore = defineStore("ProductStore", {
  state: () => {
    return {
      products: sourceData,
      cart: [],
    };
  },
  mutations: {},
  actions: {
    toCart(data) {
      this.cart.push(data);
    },
    deleteFromCart(index) {
      this.cart.splice(index, 1);
    },
  },
  getters: {
    cartData: (state) => state.cart,
  },
});
