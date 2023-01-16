<template>
  <div>
    <img :src="`/images/${experience.image}`" alt="destination.name" />
    <h3>{{ experience.name }}</h3>
    <div class="raiting">
      <div class="raiting__body">
        <div class="raiting__active" :style="{ width: raitingStyle }"></div>
      </div>
      <div class="raiting__value">{{ experience.raiting }}</div>
    </div>
    <div class="price__box">
      <div class="price">
        <p class="price__old">{{ experience.price }}$</p>
        <p class="price__new">{{ priceWithDiscount }}$</p>
      </div>
      <button class="add__cart fa-xl" @click="addToCart">
        <font-awesome-icon icon="fa-solid fa-cart-plus" class="cart__icon" />
      </button>
    </div>
    <p class="ready-to-fly">
      Ready to fly
      <font-awesome-icon icon="fa-solid fa-plane-departure" class="fly__icon" />
    </p>
  </div>
</template>
<script>
export default {
  props: {
    experience: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  computed: {
    raitingStyle() {
      return Number(this.experience.raiting) * 10 + `%`;
    },
    priceWithDiscount() {
      return Math.ceil(
        Number(this.experience.price) -
          (Number(this.experience.price) * Number(this.experience.discount)) /
            100
      ).toLocaleString("ua");
    },
  },
  methods: {
    addToCart() {
      this.$emit("addToCart", this.experience);
    },
  },
};
</script>
<style scoped>
.raiting {
  display: flex;
  align-items: flex-end;
  font-size: 1.3em;
  line-height: 0.75;
  margin-top: 8px;
  margin-bottom: 12px;
}
.raiting__body {
  position: relative;
}
.raiting__body::before {
  content: "★★★★★";
  display: block;
}
.raiting__active {
  position: absolute;
  /* width: 0%; */
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
}
.raiting__active::before {
  content: "★★★★★";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  color: #ffd300;
}
.raiting__value {
  font-size: 70%;
  line-height: 1;
  padding-left: 10px;
}
.price__old {
  text-decoration: line-through;
  font-size: 1em;
  margin-top: 0;
  margin-bottom: 12px;
}
.price__new {
  font-size: 1.5em;
  color: #ff1e00;
  margin-bottom: 0;
  margin-top: 0;
}
.price__box {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.add__cart {
  outline: none;
  border: none;
  background: none;
  color: #369e0c;
  cursor: pointer;
  transition: 0.1s;
}
.add__cart:hover.fa-xl {
  color: #aa9415;
  font-size: 1.7em;
}
.cart__icon {
  fill: currentColor;
}
.ready-to-fly {
  color: #369e0c;
  margin-bottom: 0;
}
.fly__icon {
  margin-left: 10px;
}
</style>
