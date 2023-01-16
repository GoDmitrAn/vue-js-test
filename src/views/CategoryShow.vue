<template>
  <section class="experiences">
    <div
      v-for="experience in destination.experiences"
      class="card"
      :key="experience.article"
    >
      <div class="card__top">
        <span class="action">Action</span>
        <div class="handle-box">
          <font-awesome-icon icon="fa-solid fa-heart" class="icon-heart" />
          <font-awesome-icon
            icon="fa-solid fa-scale-balanced"
            class="icon-balance"
          />
        </div>
      </div>
      <div class="description__box">
        <div class="description__comfort">
          <font-awesome-icon icon="fa-solid fa-wifi" />
          <font-awesome-icon icon="fa-solid fa-martini-glass-citrus" />
          <font-awesome-icon icon="fa-solid fa-mug-saucer" />
          <font-awesome-icon icon="fa-solid fa-umbrella-beach" />
          <font-awesome-icon icon="fa-solid fa-van-shuttle" />
        </div>
        <p class="description__info">{{ experience.description }}</p>
      </div>
      <item-card
        :experience="experience"
        class="card__main"
        @addToCart="handleAddToCart"
      />
    </div>
  </section>
</template>
<script>
import sourceData from "@/data.json";
import ItemCard from "@/components/ItemCard.vue";
import { useProductStore } from "@/stores/store";

export default {
  setup() {
    const store = useProductStore();
    return { store };
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  computed: {
    destination() {
      return sourceData.destinations.find(
        (destination) => destination.id === this.id
      );
    },
  },

  components: { ItemCard },
  methods: {
    handleAddToCart(data) {
      this.store.toCart(data);
    },
  },
};
</script>
<style scoped>
.card {
  flex-basis: 25%;
  background-color: #fff;
  padding: 1px;
  position: relative;
}
.card__top {
  display: flex;
  padding: 16px 16px 0;
  justify-content: space-between;
  align-items: flex-start;
}
.action {
  background-color: #cc0000;
  color: #fff;
  border-radius: 18px;
  padding: 6px;
  font-size: 0.8em;
}
.handle-box {
  padding-top: 6px;
  display: flex;
  flex-direction: column;
  font-size: 1.2em;
}
.icon-heart {
  margin-bottom: 12px;
}
.icon-heart:hover,
.icon-balance:hover {
  color: #369e0c;
  cursor: pointer;
}
.description__box {
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: 0;
  transition: 0.3s ease transform;
  padding: 16px;
  background-color: #fff;
  z-index: 3;
  box-shadow: 0 3px 9px 0 rgb(0 0 0 / 80%);
}
.card__main {
  position: relative;
  z-index: 10;
  background-color: #fff;
  padding: 16px;
}
.card:hover .description__box {
  opacity: 1;
  transform: translateY(98%);
  overflow: visible;
}
.description__comfort {
  display: flex;
  justify-content: space-around;
  color: #2c3e50;
  font-size: 1.2em;
}
.description__info {
  font-size: 0.8em;
  margin-bottom: 0;
}

@media screen and (max-width: 860px) {
  .card {
    flex-basis: 33.33%;
  }
}
@media screen and (max-width: 600px) {
  .card {
    flex-basis: 50%;
  }
}
@media screen and (max-width: 460px) {
  .card {
    flex-basis: 100%;
  }
}
</style>
