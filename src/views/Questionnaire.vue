<template>
  <div>
    <swiper
      ref="mySwiper"
      class="swiper swiper-container"
      :options="swiperOption"
    >
      <swiper-slide v-for="(q, index) in questions" :key="index">
        <question-card
          :question="q.question"
          :id="index + 1"
          :type="q.type"
          :options="q.options"
        />
      </swiper-slide>
    </swiper>

    <div class="container nav-btn-container">
      <div class="swiper-slide nav-btn-group">
        <span>
          <b-button @click="prev">{{ preBtnText }}</b-button>
        </span>
        <span> {{ questionId }} / {{ questions.length }}</span>
        <span>
          <b-button @click="next">{{
            questionId === questions.length ? "Next Step →" : "→"
          }}</b-button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import QuestionCard from "@/components/QuestionCard.vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper.min.css";
import questions from "@/data/questions.json";

export default {
  name: "Questionnaire",
  data() {
    return {
      swiperOption: {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 40,
        allowTouchMove: false,
        preventClicks: false,
      },
      questionId: parseInt(this.$route.params.questionId),
      setId: parseInt(this.$route.params.setId),
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
    questions() {
      return questions[`set${this.setId}`];
    },
    isUpdated() {
      return `${this.$route.params.questionId}/${this.$route.params.setId}`;
    },
    preBtnText() {
      if (this.questionId === 1) {
        if (this.setId === 1) {
          return "← Home";
        } else {
          return `← Step ${this.setId - 1}`;
        }
      }
      return "←";
    },
  },
  methods: {
    next() {
      if (this.questionId === this.questions.length) {
        if (this.setId === 1) {
          this.$router.push("/questions/set2/1");
        } else {
          this.$router.push("/recommendations");
        }
        return;
      }

      this.$router.push({
        name: this.$router.currentRoute.name,
        params: {
          questionId: this.questionId + 1,
        },
      });
    },
    prev() {
      if (this.questionId === 1) {
        if (this.setId === 1) {
          this.$router.push("/");
        } else {
          this.$router.push("/questions/set1/3");
        }
        return;
      }

      this.$router.push({
        name: this.$router.currentRoute.name,
        params: {
          questionId: this.questionId - 1,
        },
      });
      // this.swiper.slidePrev();
    },
  },
  components: { QuestionCard, Swiper, SwiperSlide },
  mounted() {
    this.swiper.slideTo(parseInt(this.questionId) - 1, 1000, false);
  },
  watch: {
    isUpdated() {
      this.setId = parseInt(this.$route.params.setId);
      this.questionId = parseInt(this.$route.params.questionId);
      this.swiper.slideTo(parseInt(this.questionId) - 1, 1000, false);
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500&display=swap');

.swiper-container {
  margin-top: 5em;
  font-family: 'Quicksand', sans-serif;
}
/* @media screen and (min-width: 576px) {
  .swiper-slide:not(:last-child) {
    margin-right: 100px !important;
  }
} */

.swiper-slide {
  width: 80%;
  max-width: 800px;
}

.nav-btn-container {
  display: flex;
  justify-content: center;
  font-family: 'Quicksand', sans-serif;
}

.nav-btn-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1em;
}

.nav-btn-group span {
  width: 100px;
  text-align: center;
}
.nav-btn-group span:first-child {
  text-align: left;
}
.nav-btn-group span:last-child {
  text-align: right;
}

.title {
  margin: 50px 0 50px 0;
}

button {
  white-space: nowrap;
}
</style>
