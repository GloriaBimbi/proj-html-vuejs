<script>
import { store } from "../store/index";

export default {
  data() {
    return {
      store,
    };
  },
  props: {
    facultyList: Array,
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
    <div class="faculties-section">
      <div class="container">
        <h2>Faculties available at EduPrime</h2>
        <p>
          A single university with a load of courses, tailored to satisfy any
          student's need.
        </p>
      </div>
      <div class="faculties-list">
        <div v-for="faculty in facultyList" class="faculty">
          <font-awesome-icon icon="fa-solid fa-caret-down" class="hover-icon" />
          <img :src="faculty.uri" alt="gavel img" />
          <h6>{{ faculty.name }}</h6>
        </div>
      </div>
      <div class="faculty-container">
        <img
          src="../assets/img/Gavel-Illustration-e1556884768193.png"
          alt="gravel illustration"
        />
        <div class="info">
          <h3>Law Faculty</h3>
          <p>
            Learning from world-leading academics and practitioners, you'll not
            only receive an outstanding grounding in the theory of law, but you
            will be able to understand how those principles are applies in
            practice through a range of student-led activities and competitions.
          </p>
          <button class="red-button">Read More</button>
        </div>
      </div>
      <img src="../assets/img/svg/svg-0.svg" alt="border" class="border-img" />
    </div>
    <div class="university-section">
      <img
        src="../assets/img/Clock-and-Bell.png"
        alt="clock img"
        class="clock-img"
      />
      <h2>University Year</h2>
      <img
        class="timeline-img"
        src="../assets/img/Timeline-Item.png"
        alt="timeline img"
      />
      <div class="orientation">
        <h3>Orientation</h3>
        <p>
          First day of the university year, all students gather for the opening
          ceremony and the network with others.
        </p>
      </div>
      <div class="demo">
        <h3>Demo Classes</h3>
        <p>
          In the first week, students try to accomodate with the teaching style
          and choose their optional courses.
        </p>
      </div>
      <div class="evaluation">
        <h3>Evaluation</h3>
        <p>
          At the end of the semester, students take a general evaluation test
          for every subject they're learning.
        </p>
      </div>
      <div class="graduation">
        <h3>Graduation Day</h3>
        <p>
          On the day of graduation, all the students gather for the geremony and
          then network and party among others.
        </p>
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
h2 {
  font-size: 35px;
  font-weight: bolder;
  color: #3f3f3f;
}
p {
  color: #3f3f3f;
  font-size: 12px;
  font-weight: 100;
  line-height: 20px;
}
button {
  padding: 15px 25px;
  margin: 40px 40px 40px 0;
  border: 0;
  border-radius: 2rem;
  font-weight: bold;
  cursor: pointer;
  color: white;
  box-shadow: 2px 2px 10px rgb(59, 59, 59);
}

//courses section
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
      margin-top: 20px;
      margin-bottom: 30px;
    }
    .yellow-button {
      background-color: #e9d657;

      &:hover {
        background-color: #e2ae3d;
      }
    }
  }

  img {
    max-width: 300px;
  }
}

//faculties section
.faculties-section {
  margin-top: 100px;
  min-height: 200px;

  .container {
    text-align: center;

    h2 {
      margin-bottom: 30px;
    }
    p {
      margin-right: 250px;
      margin-left: 250px;
    }
  }

  .faculties-list {
    margin-top: 50px;
    min-height: 150px;
    box-shadow: 2px 2px 10px rgb(186, 186, 186);
    padding-right: 250px;
    padding-left: 250px;

    display: flex;

    .faculty {
      border: 0.2px solid rgb(223, 223, 223);
      color: #e56767;
      background-color: white;
      width: 150px;
      aspect-ratio: 1;
      position: relative;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 15px;

      &:hover {
        background-color: #fbb0b0;
      }

      .hover-icon {
        color: #fbb0b0;
        font-size: 30px;
        position: absolute;
        bottom: -17px;
        right: auto;
      }

      img {
        max-width: 75px;
      }
    }
  }
  .faculty-container {
    margin: 100px 250px;

    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 50px;

    .info {
      text-align: start;

      p {
        margin: 0;
        color: grey;
      }
      .red-button {
        background-color: #e56767;
      }
      h3 {
        font-size: 25px;
        font-weight: bolder;
        color: #3f3f3f;
        margin-bottom: 30px;
      }
    }
  }
  .border-img {
    display: block;
  }
}

//university section
.university-section {
  min-height: 700px;
  background-color: #e56767;
  text-align: center;
  color: white;
  padding-top: 100px;
  position: relative;

  .clock-img {
    width: 50px;
    margin-bottom: 20px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  h2 {
    background-color: #d92426;
    color: white;
    display: inline-block;
  }

  .timeline-img {
    padding-top: 200px;
    width: 80%;
  }

  h3 {
    font-size: 15px;
    margin-bottom: 5px;
  }

  p {
    color: white;
    font-size: 10px;
    font-weight: 100;
  }

  .orientation,
  .demo,
  .evaluation,
  .graduation {
    max-width: 250px;
    position: absolute;
  }

  .orientation {
    bottom: 44px;
    left: 203px;
  }
  .demo {
    top: 327px;
    left: 410px;
  }
  .evaluation {
    bottom: 44px;
    right: 406px;
  }
  .graduation {
    top: 327px;
    right: 203px;
  }
}
</style>
