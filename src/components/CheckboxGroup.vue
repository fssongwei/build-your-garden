<template>
  <div class="checkbox-group">
    <b-form-checkbox-group
      :options="options"
      class="checkbox-select"
      value-field="item"
      text-field="name"
      size="lg"
    ></b-form-checkbox-group>
  </div>
</template>

<script>
export default {
  name: "CheckboxGroup",
  props: {
    options: {
      type: Array,
    },
  },
  components: {},
};
</script>

<style>
.checkbox-group {
  width: 100%;
}
.checkbox-select {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.custom-checkbox {
  width: 50%;
}

@media screen and (max-width: 576px) {
  .custom-checkbox {
    width: 100%;
  }
}
</style>
