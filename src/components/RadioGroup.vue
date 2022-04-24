<template>
  <div class="radio-group">
    <b-form-radio-group
      :options="options"
      class="radio-select"
      value-field="item"
      text-field="name"
      size="lg"
    ></b-form-radio-group>
  </div>
</template>

<script>
export default {
  name: "RadioGroup",
  props: {
    options: {
      type: Array,
    },
  },
  components: {},
};
</script>

<style>
.custom-control-label {
  /* font-size: 25px; */
  margin-left: 10px;
  margin-bottom: 10px;
  font-weight: 500;
}
</style>
