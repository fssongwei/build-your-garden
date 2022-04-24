<template>
  <div style="slider-container">
    <b-form-input
      id="range-1"
      v-model="value"
      type="range"
      min="0"
      max="4"
      class="slider-input"
    >
    </b-form-input>
    <div class="slider-labels">
      <span>0%</span>
      <span>25%</span>
      <span>50%</span>
      <span>75%</span>
      <span>100%</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slider",
  data() {
    return {
      value: "2",
    };
  },
};
</script>

<style scoped>
.slider-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}

.slider-input {
  width: 100%;
}

.slider-labels {
  display: flex;
  justify-content: space-between;
}
</style>
