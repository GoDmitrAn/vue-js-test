<template>
  <div id="nav">
    <div class="nav__box">
      <router-link id="logo" to="/">Destinations</router-link>

      <span v-if="this.$route.params.id !== null" class="category-name">
        {{ this.$route.params.slug }}
      </span>
      <router-link
        to="/cart"
        class="catalog__link_to_cart"
        v-if="this.store.cart.length > 0"
      >
        <div>Cart: {{ this.store.cart.length }}</div>
      </router-link>
    </div>
  </div>
</template>
<script>
import { useProductStore } from "@/stores/store";
export default {
  setup() {
    const store = useProductStore();
    return { store };
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
#nav .school-active-link {
  color: chartreuse;
}
.nav__box {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: baseline;
}
.category-name {
  display: inline-block;
  color: chartreuse;
  text-transform: capitalize;
  font-size: 1.3em;
}
#nav .catalog__link_to_cart {
  margin-left: auto;
  padding: 6px 10px;
  border-radius: 6px;
  border: 1px solid chartreuse;
  background-color: #2f7dca;
  opacity: 1;
}
#nav .catalog__link_to_cart:hover {
  color: #ffd300;
  border-color: #ffd300;
}
@media screen and (max-width: 460px) {
  #logo {
    font-size: 1.2em;
  }
  .category-name {
    font-size: 1em;
  }
}
</style>
