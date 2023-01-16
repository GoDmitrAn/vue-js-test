<template>
  <router-link to="/" class="btn-back">Back</router-link>
  <div class="v-cart">
    <v-cart-item
      v-for="(item, index) in cart_data"
      :key="item.article"
      :item-data="item"
      @deleteFromCart="deleteFromCart(index)"
    />
  </div>
</template>
<script>
import VCartItem from "./CartItem.vue";
import { useProductStore } from "@/stores/store";

export default {
  components: { VCartItem },
  name: "v-cart",
  setup() {
    const store = useProductStore();
    return { store };
  },
  data() {
    return {};
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    deleteFromCart(index) {
      this.store.deleteFromCart(index);
    },
  },
};
</script>
<style>
.v-cart {
  display: flex;
  padding-top: 12px;
  flex-wrap: wrap;
  justify-content: center;
}
.btn-back {
  padding: 6px 10px;
  border-radius: 6px;
  border: 1px solid chartreuse;
  background-color: #2f7dca;
  margin-bottom: 10px;
  color: #fff;
  display: inline-block;
}
</style>
