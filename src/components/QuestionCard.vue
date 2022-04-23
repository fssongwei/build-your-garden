<template>
  <!-- <div style="width: 100%" class="question-card">
    <h2>Q1: What are your color preferences for plants</h2>
    <b-radio> Test Option 1</b-radio>
    <b-radio> Test Option 2</b-radio>
    <b-radio> Test Option 3</b-radio>
    <b-radio> Test Option 4</b-radio>
  </div> -->
  <b-card header="Quesion 1" :title="question">
    <b-card-text>
      <b-radio> Test Option 1</b-radio>
      <b-radio> Test Option 2</b-radio>
      <b-radio> Test Option 3</b-radio>
      <b-radio> Test Option 4</b-radio>
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  name: "QuestionCard",
  props: {
    question: {
      type: String,
      default: "What are your color preferences for plants",
    },
  },
};
</script>

<style scoped>
/* .question-card {
  width: 100%;
  border: 2px solid grey;
  border-radius: 5px;
  padding: 50px;
} */
</style>
