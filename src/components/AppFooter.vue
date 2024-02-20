<script>
import { store } from "../store/index";
import SearchBar from "./SearchBar.vue";

export default {
  data() {
    return {
      store,
    };
  },
  props: {
    footerLinks: Array,
  },
  components: {
    SearchBar,
  },
};
</script>

<template>
  <footer>
    <div class="logo">
      <img src="../assets/img/theme_eduprime_logo.png" alt="logo img" />
      <span
        >EduPrime is the most versatile wordPress theme for educational
        purposes, showcasing universities, courses, secondary schools etc.</span
      >
      <div class="socials">
        <div class="facebook">
          <font-awesome-icon
            class="social-icon"
            icon="fa-brands fa-facebook-f"
          />
        </div>
        <div class="twitter">
          <font-awesome-icon class="social-icon" icon="fa-brands fa-twitter" />
        </div>
        <div class="instagram">
          <font-awesome-icon
            class="social-icon"
            icon="fa-brands fa-instagram"
          />
        </div>
      </div>
    </div>
    <div class="links">
      <div v-for="column in footerLinks" class="link-column">
        <h3>{{ column.title }}</h3>
        <ul>
          <li v-for="link in column.links">
            <a href="#"> {{ link }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="search">
      <search-bar />
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background-color: #e56768;
  color: white;
  padding: 100px 0;
  min-height: 300px;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 50px;

  .logo {
    max-width: 300px;
    img {
      width: 200px;
      display: block;
      margin-bottom: 40px;
    }
    span {
      font-weight: 100;
      line-height: 30px;
    }

    .socials {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 30px;

      margin-top: 40px;

      .facebook,
      .twitter,
      .instagram {
        width: 50px;
        aspect-ratio: 1;
        border: 2px solid #e9d657;
        border-radius: 50%;

        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  .links {
    max-width: 300px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;

    h3 {
      margin-bottom: 20px;
    }
    li {
      a {
        color: white;
        line-height: 40px;
        font-weight: 100;
      }
    }
  }

  .search {
    max-width: 300px;
  }
}
</style>
