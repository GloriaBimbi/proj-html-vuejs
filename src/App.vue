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
      eventCards: [
        {
          event: "Coaching Sessions",
          date: "20 May 21:30 PM",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab expedita labore ipsa necessitatibus! Laboriosam, quidem blanditiis repellendus [...]",
          button: "Find More",
        },
        {
          event: "Coaching Sessions",
          date: "24 Mar 18:00 PM",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab expedita labore ipsa necessitatibus! Laboriosam, quidem blanditiis repellendus [...]",
          button: "Find More",
        },
        {
          event: "Coaching Sessions",
          date: "12 Feb 13:30 PM",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab expedita labore ipsa necessitatibus! Laboriosam, quidem blanditiis repellendus [...]",
          button: "Find More",
        },
      ],
    };
  },
  components: { AppMain, AppHeader, AppFooter },
};
</script>

<template>
  <app-header :headerLiks="headerLiks" />
  <app-main :facultyList="facultyList" :eventCards="eventCards" />
  <app-footer :footerLinks="footerLinks" :footerCategories="footerCategories" />
</template>

<style lang="scss">
@use "./styles/general.scss" as *;
</style>
