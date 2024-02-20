<script>
import { store } from "../store/index";

export default {
  data() {
    return {
      store,
    };
  },
  props: {
    eventCards: Array,
  },
};
</script>

<template>
  <div v-for="card in eventCards" class="event-card">
    <h3>{{ card.event }}</h3>
    <div class="date">
      <font-awesome-icon
        icon="fa-regular fa-calendar-days"
        class="calendar-icon"
      />
      <span>{{ card.date }}</span>
    </div>
    <p>
      {{ card.description }}
    </p>
    <button class="red-button">
      <font-awesome-icon icon="fa-solid fa-plus" class="plus-icon" />
      Find More
    </button>
  </div>
</template>

<style lang="scss" scoped>
.event-card {
  max-width: 250px;
  margin-top: 50px;
  background-color: white;
  color: black;
  padding: 20px;
  border-radius: 10px;
  position: relative;

  h3 {
    color: rgb(47, 47, 47);
  }

  .calendar-icon {
    padding-right: 5px;
  }

  .date,
  p {
    font-size: 10px;
    font-weight: 100;
    color: grey;
    padding-top: 5px;
  }
  p {
    padding-bottom: 20px;
  }

  .red-button {
    background-color: #e56767;
    padding: 7px 15px;
    margin: 40px 40px 40px 0;
    border: 0;
    border-radius: 2rem;
    font-weight: bold;
    font-size: 10px;
    cursor: pointer;
    color: white;
    box-shadow: 2px 2px 10px rgb(59, 59, 59);

    position: absolute;
    bottom: -52px;
    left: 81px;

    &:hover {
      background-color: #c93333;
    }
  }
}
</style>
