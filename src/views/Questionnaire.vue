<template>
  <div>
    <swiper class="swiper swiper-container" :options="swiperOption">
      <swiper-slide><question-card /></swiper-slide>
      <swiper-slide><question-card /></swiper-slide>
      <swiper-slide><question-card /></swiper-slide>
      <swiper-slide><question-card /></swiper-slide>
    </swiper>
  </div>
</template>

<script>
import QuestionCard from "@/components/QuestionCard.vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper.min.css";

export default {
  name: "Questionnaire",
  data() {
    return {
      swiperOption: {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 40,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  computed: {
    setId() {
      return this.$route.params.setId;
    },
    questionId() {
      return this.$route.params.questionId;
    },
  },
  methods: {
    next() {
      // swiper.slideNext();
    },
    prev() {
      // swiper.slidePrev();
    },
  },
  components: { QuestionCard, Swiper, SwiperSlide },
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

.title {
  margin: 50px 0 50px 0;
}
</style>
