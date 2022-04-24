<template>
  <div class="location-picker-container">
    <b-form-input
      list="location-list"
      placeholder="Location"
      @change="handleLocationChange"
      class="location-input"
    >
    </b-form-input>
    <datalist id="location-list">
      <option v-for="(location, index) in locationList" :key="index">
        {{ location }}
      </option>
    </datalist>
    <iframe
      class="location-map"
      width="100%"
      style="border: 0"
      loading="lazy"
      allowfullscreen
      referrerpolicy="no-referrer-when-downgrade"
      :src="`https://www.google.com/maps/embed/v1/place?key=AIzaSyB8lixqCLvh7fVVAHgGfA4fLJP-UAttwAM
    &q=${initLocation}`"
    >
    </iframe>
  </div>
</template>

<script>
// import VueGoogleAutocomplete from "vue-google-autocomplete";
export default {
  name: "LocationPicker",
  data() {
    return {
      locationList: [
        "Cornell University, Ithaca, NY 14850",
        "Philips Hall, Ithaca, NY 14850",
        "Gates Hall, Ithaca, NY 14850",
      ],
      initLocation: "Cornell University",
    };
  },
  methods: {
    handleLocationChange(e) {
      console.log(e);
      this.initLocation = e;
    },
  },
  //   components: { VueGoogleAutocomplete },
};
</script>

<style scoped>
.location-picker-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.location-map {
  flex: 1;
}
.location-input {
  margin-bottom: 10px;
}
</style>
