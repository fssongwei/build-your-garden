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
          <b-button @click="prev" v-if="currentQuestionId !== 1">←</b-button>
        </span>
        <span> {{ currentQuestionId }} / {{ questions.length }}</span>
        <span>
          <b-button @click="next">{{
            currentQuestionId === questions.length ? "Next Step" : "→"
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
      currentQuestionId: parseInt(this.$route.params.questionId),
    };
  },
  computed: {
    setId() {
      return this.$route.params.setId;
    },
    questionId() {
      return this.$route.params.questionId;
    },
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
    questions() {
      return questions[`set${this.setId}`];
    },
  },
  methods: {
    next() {
      if (this.currentQuestionId === this.questions.length) {
        if (this.setId === "1") {
          this.$router.push({
            name: this.$router.currentRoute.name,
            params: { setId: 2, questionId: 1 },
          });
          this.currentQuestionId = 1;
          this.swiper.slideTo(0, 1000, false);
        } else {
          this.$router.push("/recommendations");
        }
        return;
      }

      let oldQuestionId = parseInt(this.swiper.realIndex) + 1;
      this.swiper.slideNext();
      let newQuestionId = parseInt(this.swiper.realIndex) + 1;
      if (oldQuestionId !== newQuestionId) {
        this.$router.push({
          name: this.$router.currentRoute.name,
          params: { questionId: newQuestionId },
        });
        this.currentQuestionId = newQuestionId;
      }
    },
    prev() {
      let oldQuestionId = parseInt(this.swiper.realIndex) + 1;
      this.swiper.slidePrev();
      let newQuestionId = parseInt(this.swiper.realIndex) + 1;
      if (oldQuestionId !== newQuestionId) {
        this.$router.push({
          name: this.$router.currentRoute.name,
          params: { questionId: newQuestionId },
        });
        this.currentQuestionId = newQuestionId;
      }
    },
  },
  components: { QuestionCard, Swiper, SwiperSlide },
  mounted() {
    console.log("Current Swiper instance object", this.swiper);
    this.swiper.slideTo(parseInt(this.currentQuestionId) - 1, 1000, false);
  },
};
</script>

<style scoped>
.swiper-container {
  margin-top: 5em;
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
</style>
