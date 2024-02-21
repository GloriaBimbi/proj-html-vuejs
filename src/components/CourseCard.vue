<script>
import { store } from "../store/index";

export default {
  data() {
    return {
      store,
    };
  },
  methods: {
    buildImagePath(imageName) {
      return new URL("../assets/img/" + imageName, import.meta.url).href;
    },
  },
  props: {
    courseCard: Object,
  },
};
</script>

<template>
  <div class="course-card">
    <img :src="buildImagePath(courseCard.uri)" alt="course img" />
    <h3>{{ courseCard.course }}</h3>
    <div class="teacher">
      <font-awesome-icon icon="fa-regular fa-user" class="icon" />
      Teacher: <b>{{ courseCard.teacherName }}</b>
    </div>
    <div class="price">
      <font-awesome-icon icon="fa-solid fa-money-bill" class="icon" />
      Price: {{ courseCard.price }}
    </div>
    <button class="red-button">
      <font-awesome-icon icon="fa-regular fa-eye" class="icon" />
      {{ courseCard.button }}
    </button>
  </div>
</template>

<style lang="scss" scoped>
.course-card {
  padding: 10px;
  text-align: center;
  background-color: white;
  box-shadow: 2px 2px 10px rgb(183, 183, 183);
  border-radius: 10px;
  width: calc(100% / 4);
  aspect-ratio: 1;
  position: relative;

  img {
    max-width: 50px;
    margin: 10px;
  }

  h3 {
    font-size: 15px;
    font-weight: 300;
  }

  .teacher,
  .price {
    font-size: 10px;
    font-weight: 100;
    color: rgb(83, 83, 83);
    margin-top: 7px;
  }

  .icon {
    margin-right: 5px;
  }

  .red-button {
    background-color: #e56767;
    padding: 7px 15px;
    border: 0;
    border-radius: 2rem;
    font-weight: bold;
    font-size: 10px;
    cursor: pointer;
    color: white;
    box-shadow: 2px 2px 10px rgb(183, 183, 183);

    position: absolute;
    bottom: -12px;
    left: 33px;

    &:hover {
      background-color: #c93333;
    }
  }
}
</style>
