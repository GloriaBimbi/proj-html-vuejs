<script>
import { store } from "./store/index";
import AppMain from "./components/AppMain.vue";
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import axios from "axios";

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
      facultyList: [
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
      partnersLogoUri: [
        "/partner-1.png",
        "/partner-2.png",
        "/partner-3.png",
        "/partner-4.png",
        "/partner-5.png",
        "/partner-6.png",
        "/partner-7.png",
        "/partner-8.png",
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
    };
  },
  methods: {
    fetchEvents() {
      axios.get(`${store.apiUri}/eventCards`).then((res) => {
        store.events = res.data;
      });
    },
    fetchCourses() {
      axios.get(`${store.apiUri}/courseCards`).then((res) => {
        store.courses = res.data;
      });
    },
  },
  created() {
    this.fetchEvents();
    this.fetchCourses();
  },
  components: { AppMain, AppHeader, AppFooter },
};
</script>

<template>
  <app-header :headerLiks="headerLiks" />
  <app-main :facultyList="facultyList" :partnersLogoUri="partnersLogoUri" />
  <app-footer :footerLinks="footerLinks" :footerCategories="footerCategories" />
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
