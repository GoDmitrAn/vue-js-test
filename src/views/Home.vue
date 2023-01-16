<template>
  <div class="home">
    <div class="destination">
      <router-link
        v-for="destination in productStore.products.destinations"
        :key="destination.id"
        :to="{
          name: 'category.show',
          params: { id: destination.id, slug: destination.slug },
        }"
        class="category-link"
      >
        <img
          :src="`/images/${destination.image}`"
          :alt="destination.name"
          class="category-image"
        />
        <h2>{{ destination.name }}</h2>
      </router-link>
    </div>
  </div>
</template>
<script>
import { useProductStore } from "@/stores/store";

export default {
  data() {
    const productStore = useProductStore();
    return {
      productStore,
    };
  },
};
</script>
<style scoped>
.destination {
  display: flex;
  justify-content: space-between;
  text-align: center;
  flex-wrap: wrap;
}
.category-link {
  display: block;
  padding-right: 8px;
  border-right: 1px solid #615e5e25;
  margin-right: 8px;
  flex-basis: 24%;
  margin-bottom: 40px;
}

.category-link:hover {
  color: #369e0c;
}
.category-image {
  display: block;
  margin-bottom: 8px;
  max-width: 100%;
}
@media screen and (min-width: 861px) {
  .category-link:nth-child(4n) {
    margin-right: 0;
  }
}
@media screen and (max-width: 860px) {
  .category-link {
    flex-basis: 32%;
  }

  .destination {
    justify-content: center;
  }
}
@media screen and (min-width: 661px) and (max-width: 860px) {
  .category-link:nth-child(3n) {
    margin-right: 0;
  }
}
@media screen and (max-width: 660px) {
  .category-link {
    flex-basis: 48%;
  }
  .category-link:nth-child(2n) {
    margin-right: 0;
  }
}
@media screen and (max-width: 460px) {
  .category-link {
    flex-basis: 100%;
    margin-right: 0;
    padding-right: 0;
    border-right: none;
  }
}
</style>
