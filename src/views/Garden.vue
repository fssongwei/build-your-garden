<template>
  <div class="container">
    <garden-canvas></garden-canvas>
    <flower-mascot />
  </div>
</template>

<script>
// @ is an alias to /src
import GardenCanvas from "@/components/GardenCanvas.vue";
import FlowerMascot from "@/components/FlowerMascot.vue";

export default {
  name: "Garden",
  components: {
    FlowerMascot,
    GardenCanvas,
  },
};
</script>
