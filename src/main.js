import { createApp } from "vue";
import App from "./App.vue";

// font awsome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faMagnifyingGlass,
  faUserPlus,
  faCaretDown,
  faCartShopping,
  faBookOpen,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faMagnifyingGlass,
  faUserPlus,
  faCaretDown,
  faCartShopping,
  faBookOpen,
  faGear
);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
