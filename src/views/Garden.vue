<template>
  <div class="container">
    <garden-canvas
      @click-plant="handlePlantClick"
      ref="garden-canvas"
    ></garden-canvas>

    <div
      class="d-flex justify-content-end align-items-end px-lg-5 px-md-4 px-3 py-4 position-relative"
      style="z-index: -1; box-sizing: border-box"
    >
      <div
        class="position-absolute"
        style="bottom: 0; left: 0; padding: inherit"
      >
        <b-button
          size="lg"
          variant="primary"
          @click="$router.push('/recommendations')"
        >
          &lt; See List
        </b-button>
      </div>

      <div class="mb-5">
        <flower-mascot :text="plantDescription" />
      </div>
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
</style>
