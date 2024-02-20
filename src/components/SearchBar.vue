<script>
import { store } from "../store/index";

export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="search-bar">
    <input type="text" class="search-input" placeholder="Seach..." />
    <button class="yellow-button">
      <font-awesome-icon
        class="button-icon"
        icon="fa-solid fa-magnifying-glass"
      />
    </button>
  </div>
</template>

<style lang="scss" scoped>
.search-bar {
  position: relative;
  .search-input {
    height: 50px;
    width: 300px;
    border-radius: 30px;
    padding: 30px 20px;
    border: 0;
    color: grey;
  }
  .yellow-button {
    width: 60px;
    aspect-ratio: 1;
    padding: 15px 25px;
    margin: 40px 40px 40px 0;
    border: 0;
    border-radius: 50%;
    font-weight: bold;
    cursor: pointer;
    color: white;
    background-color: #e9d657;
    position: absolute;
    left: 240px;
    bottom: -40px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
