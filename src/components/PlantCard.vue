<template>
  <b-col class="px-1">
      <b-card img-src="https://picsum.photos/600/300/?image=25" img-alt="Image" style="max-width: 20rem;" class="mb-2">
    <b-card-text>
     {{plantName}}
    </b-card-text>
    <b-button variant="primary">Plant Details</b-button>
  </b-card>
  </b-col>
</template>

<script>
import plantData from "@/data/fixtures.json";
export default {
  name: "PlantCard",
  props: {
    plantName: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      plants: plantData
    };
  }
};
</script>
