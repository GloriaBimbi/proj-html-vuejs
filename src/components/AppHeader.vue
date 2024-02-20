<script>
import { store } from "../store/index";

export default {
  data() {
    return {
      store,
    };
  },

  props: {
    headerLinks: Array,
  },
};
</script>

<template>
  <header>
    <div class="header-bar">
      <div class="logo-container">
        <img src="../assets/img/theme_eduprime_logo.png" alt="logo" />
      </div>
      <div class="info">
        <ul class="link-list">
          <li v-for="link in headerLinks">
            <a href="#">{{ link }}</a>
            <font-awesome-icon icon="fa-solid fa-caret-down" />
          </li>
        </ul>
        <button class="yellow-button">VIEW COURSES</button>
      </div>
    </div>
    <div class="hero-section">
      <div class="close-menu">
        <font-awesome-icon icon="fa-solid fa-cart-shopping" />
        <font-awesome-icon icon="fa-solid fa-book-open" />
        <font-awesome-icon icon="fa-solid fa-gear" />
      </div>
      <h1>Key to your seccess</h1>
      <span
        >EduPrime is the most versatile WordPress theme for educational purposes
        showcasing universities, courses, secondary schools etc.</span
      >
      <div class="buttons">
        <button class="yellow-button">
          <font-awesome-icon
            class="button-icon"
            icon="fa-solid fa-magnifying-glass"
          />Search courses
        </button>
        <button class="white-button">
          <font-awesome-icon
            class="button-icon"
            icon="fa-solid fa-user-plus"
          />Search Apply for university
        </button>
      </div>
    </div>
    <img src="../assets/img/Wave-1.png" alt="wave img" class="wave-img" />
  </header>
</template>

<style lang="scss" scoped>
header {
  background-image: url("../assets/hero.png");
  background-size: 100% 100%;

  color: white;
  text-align: center;
  position: relative;

  .header-bar {
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo-container {
      img {
        width: 200px;
        padding-left: 40px;
      }
    }

    .info {
      height: 100%;

      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 20px;
      .link-list {
        height: 100%;

        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 30px;

        li {
          cursor: pointer;
          &:hover {
            color: #e9d657;
          }

          a {
            color: white;
            padding: 38px 0;
            font-weight: bold;
            font-size: 12px;
            padding-right: 5px;
            &:hover {
              border-bottom: 6px solid #e9d657;
              color: #e9d657;
            }
          }
        }
      }
      .yellow-button {
        padding: 15px 25px;
        margin: 40px 40px 40px 0;
        border: 0;
        border-radius: 2rem;
        color: white;
        background-color: #e9d657;
        font-weight: bold;
        cursor: pointer;
        box-shadow: 2px 2px 10px rgb(59, 59, 59);

        &:hover {
          background-color: #e2ae3d;
        }
      }
    }
  }
  .hero-section {
    min-height: 300px;
    margin: 100px 350px 0 350px;

    .close-menu {
      padding: 10px;
      background-color: #e9d657;
      border-radius: 5px;
      box-shadow: 3px 3px 10px black;

      position: absolute;
      left: -5px;
      top: 250px;

      display: flex;
      gap: 15px;
      flex-direction: column;
    }

    h1 {
      margin-bottom: 50px;
      font-size: 40px;
      font-weight: bolder;
    }

    span {
      line-height: 30px;
    }

    .buttons {
      .yellow-button,
      .white-button {
        padding: 15px 25px;
        margin: 40px 40px 40px 0;
        border: 0;
        border-radius: 2rem;
        font-weight: bold;
        cursor: pointer;
        box-shadow: 2px 2px 10px rgb(59, 59, 59);
      }

      .yellow-button {
        color: white;
        background-color: #e9d657;

        &:hover {
          background-color: #e2ae3d;
        }
      }

      .white-button {
        background-color: #faeaea;
        color: #de6e70;

        &:hover {
          background-color: white;
          color: #ff7174;
        }
      }
      .button-icon {
        margin-right: 10px;
      }
    }
  }
  .wave-img {
    display: block;
  }
}
</style>
