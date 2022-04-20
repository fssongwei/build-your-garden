<template>
  <div class="home">
    <!-- TODO: Implement the questionnaire page -->
    <h1>Questionnaire Page for question set {{ setId }}</h1>
    <question-card />
  </div>
</template>

<script>
import QuestionCard from "@/components/QuestionCard.vue";

export default {
  name: "Home",
  computed: {
    setId() {
      return this.$route.params.setId;
    },
    questionId() {
      return this.$route.params.questionId;
    },
  },
  components: { QuestionCard },
};
</script>
