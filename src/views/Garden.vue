<template>
  <div class="container">
    <div class="py-2 py-lg-3 py-xl-5">
      <garden-canvas
        @click-plant="handlePlantClick"
        ref="garden-canvas"
      ></garden-canvas>
    </div>

    <div
      class="d-flex justify-content-end align-items-end position-relative flower-mascot"
      style="z-index: -1; box-sizing: border-box"
    >
      <flower-mascot :text="plantDescription" />
    </div>

    <div
      class="d-flex justify-content-start align-items-center footer px-lg-5 px-md-4 px-3 py-4"
    >
      <b-button
        size="lg"
        variant="primary"
        @click="$router.push('/recommendations')"
      >
        &lt; See List
      </b-button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import GardenCanvas from "@/components/GardenCanvas.vue";
import FlowerMascot from "@/components/FlowerMascot.vue";
import plantData from "@/data/fixtures.json";

export default {
  name: "Garden",
  components: {
    FlowerMascot,
    GardenCanvas,
  },
  data() {
    return {
      selectedPlant: null,
      plants: plantData,
    };
  },
  computed: {
    plantDescription() {
      if (this.selectedPlant) {
        return plantData.plantList[this.selectedPlant].description;
      }
      return "Try to click on a plant to see its description or drag to rearrange your garden.";
    },
  },
  methods: {
    handlePlantClick(name) {
      this.selectedPlant = name;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500&display=swap");

.container {
  font-family: "Quicksand", sans-serif;
}

.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
}

.flower-mascot {
  margin-bottom: 100px;
}
</style>
