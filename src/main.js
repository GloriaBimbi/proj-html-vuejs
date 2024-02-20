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
  faAngleUp,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
library.add(
  faMagnifyingGlass,
  faUserPlus,
  faCaretDown,
  faCartShopping,
  faBookOpen,
  faGear,
  faFacebookF,
  faTwitter,
  faInstagram,
  faAngleUp,
  faCalendarDays,
  faPlus
);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
