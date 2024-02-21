<script>
import SearchBar from "./SearchBar.vue";

export default {
  data() {
    return {};
  },
  props: {
    footerLinks: Array,
    footerCategories: Array,
  },
  components: {
    SearchBar,
  },
};
</script>

<template>
  <footer>
    <font-awesome-icon icon="fa-solid fa-angle-up" class="go-up-icon" />
    <div class="side-labels">
      <div class="purchase">
        <img src="../assets/img/svg/svg-3.svg" alt="purchase logo" />
        <span>Purchase Theme</span>
      </div>
      <div class="related">
        <img src="../assets/img/svg/svg-2.svg" alt="related logo" />
        <span>Related Themes</span>
      </div>
    </div>
    <div class="logo">
      <img src="../assets/img/theme_eduprime_logo.png" alt="logo img" />
      <p>
        EduPrime is the most versatile wordPress theme for educational purposes,
        showcasing universities, courses, secondary schools etc.
      </p>
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
      <h5>Search caregories</h5>
      <div class="category-container">
        <span v-for="category in footerCategories" class="category">{{
          category
        }}</span>
      </div>
      <div class="motto">ModelTheme. All rights reserved.</div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background-color: #e56768;
  color: white;
  padding: 100px 0;
  min-height: 300px;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 25px;

  .go-up-icon {
    padding: 10px;
    width: 20px;
    height: 20px;
    font-size: 20px;
    background-color: #e2ae3d;
    border-radius: 50%;
    box-shadow: 2px 2px 10px rgb(59, 59, 59);

    position: absolute;
    bottom: 30px;
    right: 30px;

    &:hover {
      background-color: #e9d657;
    }
  }

  .side-labels {
    position: absolute;
    left: 30px;
    bottom: 30px;
    width: 120px;

    img {
      max-width: 10px;
      margin-right: 5px;
    }

    span {
      font-size: 8px;
      font-weight: 100;
      color: grey;
    }

    .purchase,
    .related {
      padding: 8px 20px;
      background-color: #404444;
      box-shadow: 2px 2px 10px rgb(59, 59, 59);
      border-radius: 5px;

      display: flex;
      align-items: center;

      &:hover {
        background-color: #6d6d6d;
        span {
          color: white;
        }
      }
    }

    .purchase {
      margin-bottom: 10px;
    }
  }

  // left column
  .logo {
    max-width: 280px;
    img {
      width: 200px;
      display: block;
      margin-bottom: 40px;
    }
    p {
      font-weight: 100;
      line-height: 20px;
      font-size: 10px;
      color: rgb(229, 229, 229);
    }

    .socials {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 30px;

      margin-top: 25px;

      .facebook,
      .twitter,
      .instagram {
        width: 40px;
        aspect-ratio: 1;
        border: 2px solid #e9d657;
        border-radius: 50%;
        font-size: 15px;

        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
          color: #e9d657;
        }
      }
    }
  }

  // middle column
  .links {
    max-width: 285px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 40px;

    h3 {
      margin-bottom: 20px;
    }
    li {
      a {
        color: rgb(229, 229, 229);
        line-height: 30px;
        font-weight: 100;
        font-size: 10px;

        &:hover {
          color: #e9d657;
        }
      }
    }
  }

  // right column
  .search {
    max-width: 280px;
    text-align: end;

    h5 {
      margin: 30px 0 20px 0;
    }

    .category-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      .category {
        padding: 5px 10px;
        color: rgb(229, 229, 229);
        border: 1px solid rgb(229, 229, 229);
        border-radius: 30px;
        font-size: 10px;
        font-weight: 100;
        margin: 5px;

        &:hover {
          color: #e9d657;
          border-color: #e9d657;
        }
      }
    }

    .motto {
      color: #e9d657;
      font-size: 15px;
      margin-top: 25px;

      &:hover {
        color: #e2ae3d;
      }
    }
  }
}
</style>
