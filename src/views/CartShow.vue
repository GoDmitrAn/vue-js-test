<template>
  <v-cart v-if="cart.length" :cart_data="cart" />
</template>
<script>
import VCart from "@/components/Cart.vue";
import { useProductStore } from "@/stores/store";
export default {
  components: {
    VCart,
  },
  setup() {
    const store = useProductStore();
    const { cart } = store;
    return { cart };
  },
};
</script>
