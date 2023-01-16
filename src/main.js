import { createApp } from "vue";
import { createPinia } from "pinia";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCartPlus,
  faPlaneDeparture,
  faWifi,
  faMartiniGlassCitrus,
  faMugSaucer,
  faUmbrellaBeach,
  faVanShuttle,
  faHeart,
  faScaleBalanced,
  faSquareMinus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import App from "./App.vue";
import router from "./router";

library.add(
  faCartPlus,
  faPlaneDeparture,
  faWifi,
  faMartiniGlassCitrus,
  faMugSaucer,
  faUmbrellaBeach,
  faVanShuttle,
  faHeart,
  faScaleBalanced,
  faSquareMinus
);
const pinia = createPinia();
const app = createApp(App);

app
  .use(pinia)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
