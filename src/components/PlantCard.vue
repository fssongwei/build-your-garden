<template>
  <b-col class="px-1">
      <b-card>
        <b-card-img :src="`/img/garden/plants/${plantName}.png`" alt="Plant Image" img-height:100px></b-card-img>
    <b-card-text>
     {{plantName}}
    </b-card-text>
    <b-button id="details" variant="primary">Plant Details</b-button>
    <b-popover target="details" title="More info" triggers="click blur" content="Placement bottom">
      more plant information...
    </b-popover>
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
