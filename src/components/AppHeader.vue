<script>
import { store } from "../store/index";

export default {
  data() {
    return {
      store,
    };
  },

  props: {
    links: Array,
  },
};
</script>

<template>
  <header>
    <div class="logo-container">
      <img src="../assets/img/theme_eduprime_logo.png" alt="logo" />
    </div>
    <div class="info">
      <ul class="link-list">
        <li v-for="link in links">
          <a href="#">{{ link }}</a>
        </li>
      </ul>
      <button>VIEW COURSES</button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  height: 100px;
  background-color: #da5f60e6;
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
        padding: 38px 0;

        &:hover {
          border-bottom: 6px solid #e9d657;
        }

        a {
          color: white;
          font-weight: bold;
          font-size: 12px;

          &:hover {
            color: #e9d657;
          }
        }
      }
    }
    button {
      padding: 15px 25px;
      margin: 40px 40px 40px 0;
      border: 0;
      border-radius: 2rem;
      color: white;
      background-color: #e9d657;
      font-weight: bold;
      cursor: pointer;

      &:hover {
        background-color: #fedf10;
      }
    }
  }
}
</style>
