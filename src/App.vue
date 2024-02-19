<script>
import { store } from "./store/index";
import AppMain from "./components/AppMain.vue";
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  data() {
    return {
      store,
    };
  },
  components: { AppMain, AppHeader, AppFooter },
};
</script>

<template></template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
