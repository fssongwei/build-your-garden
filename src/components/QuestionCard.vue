<template>
  <b-card :header="`Question ${id}`" :title="question" class="question-card">
    <div class="question-card-body">
      <color-picker v-if="type === 'color'" />
      <slider v-if="type === 'slider'" />
      <location-picker v-if="type === 'location'" />
      <radio-group v-if="type === 'radio'" :options="options" />
      <checkbox-group v-if="type === 'checkbox'" :options="options" />
    </div>
  </b-card>
</template>

<script>
import ColorPicker from "@/components/ColorPicker.vue";
import Slider from "@/components/Slider.vue";
import LocationPicker from "@/components/LocationPicker.vue";
import RadioGroup from "@/components/RadioGroup.vue";
import CheckboxGroup from "@/components/CheckboxGroup.vue";

export default {
  name: "QuestionCard",
  props: {
    question: {
      type: String,
      default: "",
    },
    id: {
      type: Number,
      default: 0,
    },
    type: {
      type: String,
    },
    options: {
      type: Array,
    },
  },
  components: {
    ColorPicker,
    Slider,
    LocationPicker,
    RadioGroup,
    CheckboxGroup,
  },
};
</script>

<style sc LocationPickeroped>
.card-body {
  display: flex;
  flex-direction: column;
}
.question-card {
  height: 400px;
  display: flex;
}

.question-card-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}
</style>
