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
  <main>
    <div class="courses-section">
      <div class="container">
        <div class="info">
          <img
            class="books"
            src="../assets/img/Books-icon.png"
            alt="books icon"
          />
          <h2>Thousands of courses for any type of student</h2>
          <p>
            At EduPrime, it doesn't matter what domain you wish to pursue a
            career in. Here you can find a courses that satisfies your needs
            within a click away and applies for a course in a matter of minutes.
            EduPrime is ranked ad the most versatile university in the world,
            thanks to the number of courses it provides.
          </p>
          <button class="yellow-button">Browse through courses</button>
        </div>
        <img
          src="../assets/img/Graduation-Illustration.png"
          alt="graduation cap"
        />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.container {
  margin-right: 250px;
  margin-left: 250px;
  margin-top: 50px;
}

.courses-section {
  min-height: 400px;
  background-image: url("../assets/img/home-background.png");
  background-size: 100% 100%;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
  }
  .info {
    .books {
      color: rgb(84, 83, 83);
      max-width: 50px;
    }

    h2 {
      font-size: 35px;
      font-weight: bolder;
      color: #3f3f3f;
      margin-top: 20px;
      margin-bottom: 30px;
    }

    p {
      color: #3f3f3f;
      font-size: 12px;
      font-weight: 100;
      line-height: 20px;
    }
    .yellow-button {
      padding: 15px 25px;
      margin: 40px 40px 40px 0;
      border: 0;
      border-radius: 2rem;
      font-weight: bold;
      cursor: pointer;
      color: white;
      background-color: #e9d657;
      box-shadow: 2px 2px 10px rgb(59, 59, 59);

      &:hover {
        background-color: #e2ae3d;
      }
    }
  }

  img {
    max-width: 300px;
  }
}
</style>
