import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";
const CategoryShow = () => import("@/views/CategoryShow.vue");
const CartShow = () => import("@/views/CartShow.vue");

const routes = [
  { path: "/", name: "Home", component: Home },

  {
    path: "/category/:id/:slug",
    name: "category.show",
    component: CategoryShow,
    props: (route) => ({ id: parseInt(route.params.id) }),
  },
  {
    path: "/cart",
    name: "cart.show",
    component: CartShow,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "school-active-link",
});
export default router;
