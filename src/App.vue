<script>
import { store } from "./store/index";
import AppMain from "./components/AppMain.vue";
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  data() {
    return {
      store,
      headerLiks: [
        "Home",
        "Courses",
        "About Us",
        "News",
        "Pages",
        "Contact",
        "Purchase",
      ],
    };
  },
  components: { AppMain, AppHeader, AppFooter },
};
</script>

<template>
  <app-header :links="headerLiks" />
  <app-main />
  <app-footer />
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
