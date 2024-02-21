<script>
import { store } from "../store/index";
import EventCard from "./EventCard.vue";
import CourseCard from "./CourseCard.vue";
import SearchBar from "./SearchBar.vue";

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
    facultyList: Array,
    partnersLogoUri: Array,
  },
  components: {
    EventCard,
    CourseCard,
    SearchBar,
  },
};
</script>

<template>
  <main>
    <!-- courses section -->
    <div class="courses-section">
      <div class="message-container">
        <div class="message">
          <div class="envato-market">Purchase EduPrime on Envato Market</div>
          <font-awesome-icon
            icon="fa-solid fa-caret-down"
            class="message-icon"
          />
        </div>
      </div>

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
    <!-- faculties section -->
    <div class="faculties-section">
      <div class="container">
        <h2>Faculties available at EduPrime</h2>
        <p>
          A single university with a load of courses, tailored to satisfy any
          student's need.
        </p>
      </div>
      <div class="faculties-list">
        <div class="faculty mouse-over">
          <font-awesome-icon icon="fa-solid fa-caret-down" class="hover-icon" />
          <img src="../assets/img/Gavel-v2.png" alt="gavel img" />
          <h6>Law Faculty</h6>
        </div>
        <div v-for="faculty in facultyList" class="faculty">
          <img :src="buildImagePath(faculty.uri)" alt="gavel img" />
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
    <!-- university section -->
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
    <!-- upcoming section -->
    <div class="upcoming-section">
      <img
        src="../assets/img/upcoming-events-calendar-icon.png"
        alt="calendar img"
        class="calendar-img"
      />
      <h2>Upcoming Events</h2>
      <div class="event-container">
        <event-card v-for="event in store.events" :eventCard="event" />
      </div>
      <button class="yellow-button">View All Events</button>
      <img
        src="../assets/img/Wave-1.png"
        alt="wave img"
        class="bottom-wave-img"
      />
    </div>
    <!-- latest section -->
    <div class="latest-section">
      <div class="container">
        <h2>Latest Courses</h2>
        <div class="course-container">
          <course-card v-for="course in store.courses" :courseCard="course" />
        </div>
        <div class="efficient">
          <div class="description">
            <img
              src="../assets/img/Exam-icon.png"
              alt="paper img"
              class="simble"
            />
            <h2>The most efficient examination method</h2>
            <p>
              EduPrime has gathered teachers from around the globe to brainstorm
              in order to facilitate the evaluation of our students. Every
              teacher from our university has an influence on how students are
              evaluated at his/her subject.
            </p>
            <button class="red-button">Discover the Method</button>
          </div>
          <img
            src="../assets/img/Exam-Illustration.png"
            alt="exam illustration"
            class="exam-img"
          />
        </div>
        <div class="variable">
          <img
            src="../assets/img/Girl-Illustration.png"
            alt="girl illustration"
            class="exam-img"
          />
          <div class="description">
            <img
              src="../assets/img/Exam-icon-1.png"
              alt="paper img"
              class="simble"
            />
            <h2>Variable fees for international students</h2>
            <p>
              EduPrime has gathered teachers from around the globe to brainstorm
              in order to facilitate the evaluation of our students. Every
              teacher from our university has an influence on how students are
              evaluated at his/her subject.
            </p>
            <button class="red-button">List of Fees</button>
          </div>
        </div>
      </div>
    </div>
    <!-- subscribe section -->
    <div class="subscribe-section">
      <div class="container">
        <h2>Subscribe Now to Our Newslatter!</h2>
        <search-bar class="search-bar" />
      </div>
    </div>
    <!-- partners section -->
    <div class="partners-section">
      <div class="container">
        <h2>Partners</h2>
        <p>
          Leverage agile frameworks to provide a robust synopsis for high level
          overviews. Iterative approaches to corporate strategy.
        </p>
      </div>

      <div class="logo-container">
        <img
          v-for="partner in partnersLogoUri"
          :src="buildImagePath(partner)"
          alt="logo img"
          class="partner"
        />
      </div>
      <img
        src="../assets/img/background-wave3.png"
        alt="wave img"
        class="bottom-hill"
      />
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
  background-color: #ffffff;
  background-image: url("../assets/img/home-background.png");
  background-size: 100% 100%;

  .message-container {
    width: 200px;
    height: 10px;
    position: absolute;

    .message {
      position: relative;
      top: -55px;
      left: 125px;
      .envato-market {
        color: white;
        background-color: black;
        border-radius: 3px;
        padding: 3px 5px;
        font-size: 10px;
        text-align: center;
        font-weight: 100;
        max-width: 120px;
        position: absolute;
      }

      .message-icon {
        color: black;
        font-size: 15px;
        font-weight: 100;
        position: relative;
        bottom: -22px;
        left: 52px;
      }
    }
  }

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
  background-color: #ffffff;

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

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 15px;

      &.mouse-over {
        background-color: #e56767;
        color: white;
        position: relative;

        img {
          filter: brightness(0) invert(1);
        }

        .hover-icon {
          color: #e56767;
          font-size: 35px;
          position: absolute;
          bottom: -18px;
          right: auto;
        }
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

        &:hover {
          background-color: #c93333;
        }
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

//upcoming section
.upcoming-section {
  text-align: center;
  background-color: #e56767;
  padding-top: 30px;
  min-height: 600px;
  .calendar-img {
    width: 50px;
    margin-bottom: 20px;
  }

  h2 {
    color: white;
  }

  .event-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }

  .yellow-button {
    background-color: #e9d657;
    margin: 0;
    margin-top: 50px;

    &:hover {
      background-color: #e2ae3d;
    }
  }

  .bottom-wave-img {
    width: 100%;
    display: block;
    padding-top: 70px;
  }
}

//latest section
.latest-section {
  margin-bottom: 20px;
  background-color: #ffffff;
  .course-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 30px;
    margin-top: 50px;
    margin-bottom: 100px;
  }

  .efficient,
  .variable {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;

    margin-top: 30px;
    .description {
      text-align: start;
      max-width: 400px;

      .simble {
        width: 50px;
      }
      h2 {
        margin: 15px 0 40px 0;
      }
      p {
        max-width: calc(100% - 50px);
        color: rgb(94, 93, 93);
      }

      .red-button {
        background-color: #e56767;

        &:hover {
          background-color: #c93333;
        }
      }
    }

    .exam-img {
      max-width: 350px;
    }
  }
}

//subscribe section
.subscribe-section {
  background-color: #e56767;
  padding-top: 30px;
  padding-bottom: 30px;

  .container {
    margin-top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      color: white;
      font-size: 25px;
    }
  }
}

//partners section
.partners-section {
  text-align: center;
  background-color: #ffffff;

  h2 {
    margin-bottom: 40px;
  }

  p {
    margin: 0 200px;
    color: rgb(96, 96, 96);
  }

  .logo-container {
    margin: 40px 0 0 0;

    .partner {
      max-height: 40px;
      opacity: 30%;
      margin-right: 15px;
      margin-left: 15px;
    }
  }

  .bottom-hill {
    display: block;
    width: 100%;
    height: 250px;
    filter: invert(100%);
    opacity: 5%;
    transform: rotate(180deg);
  }
}
</style>
