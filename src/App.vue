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
      footerLinks: [
        {
          title: "Get EduPrime",
          links: [
            "Request a website",
            "Browse Themes",
            "Payment Options",
            "Support System",
            "Checkout",
            "Purchase Theme",
          ],
        },
        {
          title: "Networking",
          links: [
            "Purchase Theme",
            "Our Benefits",
            "Our Theam",
            "Our Services",
            "Other Products",
            "My account",
          ],
        },
      ],
      footerCategories: [
        "ECONOMY",
        "DESIGN",
        "COACHING",
        "BUSINESS",
        "MEDICINE",
        "LAW",
        "FITNESS",
      ],
      facultyList: [
        {
          uri: "/Gavel-v2.png",
          name: "Law Faculty",
        },
        {
          uri: "/Coins-tabs-v2.png",
          name: "Economy",
        },
        {
          uri: "/Medicine-tabs-v2.png",
          name: "Medicine",
        },
        {
          uri: "/Computer-tabs-v2.png",
          name: "Computer Science",
        },
        {
          uri: "/Palette-tabs-v2.png",
          name: "Graphic Design",
        },
      ],
    };
  },
  components: { AppMain, AppHeader, AppFooter },
};
</script>

<template>
  <app-header :headerLiks="headerLiks" />
  <app-main :facultyList="facultyList" />
  <app-footer :footerLinks="footerLinks" :footerCategories="footerCategories" />
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
