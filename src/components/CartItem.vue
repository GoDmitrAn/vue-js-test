<template>
  <div class="v-cart-item">
    <img :src="`/images/${itemData.image}`" alt="destination.name" />
    <h3>{{ itemData.name }}</h3>

    <div class="v-cart-item__box">
      <p class="v-cart-item__price">{{ priceWithDiscount }}$</p>

      <button class="delete-cart fa-lg" @click="deleteFromCart">
        <font-awesome-icon icon="fa-solid fa-square-minus" class="icon-minus" />
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    itemData: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  computed: {
    priceWithDiscount() {
      return Math.ceil(
        Number(this.itemData.price) -
          (Number(this.itemData.price) * Number(this.itemData.discount)) / 100
      ).toLocaleString("ua");
    },
  },
  methods: {
    deleteFromCart() {
      this.$emit("deleteFromCart");
    },
  },
};
</script>
<style scoped>
.v-cart-item {
  max-width: 200px;
  margin-right: 12px;
  margin-bottom: 20px;
}
.v-cart-item img {
  max-width: 100%;
}
.v-cart-item h3 {
  font-size: 1em;
  text-align: center;
}
.v-cart-item__box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 10px;
  background-color: #21212120;
}
.v-cart-item__price {
  font-size: 1em;
  margin: 0;
}
.delete-cart {
  border: none;
  cursor: pointer;
  color: #ff1e00;
  padding: 0;
}
.delete-cart:hover {
  color: rgb(189, 44, 44);
}
.icon-minus {
  fill: currentColor;
}
</style>
