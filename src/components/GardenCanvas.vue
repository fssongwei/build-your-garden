<template>
  <div class="garden-canvas-container" ref="canvasContainer">
    <v-stage ref="stage" :config="{ width, height }">
      <v-layer ref="layer">
        <v-image
          :config="{
            image: bg,
          }"
        />

        <v-image
          v-for="(plant, index) in list"
          :key="index"
          :config="{
            image: plantImages[plant.name],
            x: plant.x,
            y: plant.y,
            width: plantSize,
            height: plantSize,
            draggable: true,
          }"
        />
      </v-layer>
    </v-stage>
  </div>
</template>

<script>
import plantData from "@/data/fixtures.json";
const width = 540;
const height = 360;
const nPlants = 30;
const plantSize = 50;

export default {
  data() {
    return {
      bg: null,
      width,
      height,
      plantSize,
      plantImages: [],
      testFlower: null,
      list: [],
    };
  },
  created() {
    const bg = new window.Image();
    bg.src = "/img/garden/gardenbg.jpg";
    bg.onload = () => {
      this.bg = bg;
    };

    const plantList = Object.keys(plantData.plantList).map((s) =>
      s.toLowerCase()
    );

    for (let plant of plantList) {
      const plantImg = new window.Image();
      plantImg.src = `/img/garden/plants/${plant}.png`;
      plantImg.onload = () => {
        this.plantImages = { ...this.plantImages, [plant]: plantImg };
      };
    }

    this.list = new Array(nPlants).fill(0).map(() => {
      const x = Math.floor(Math.random() * (width - plantSize));
      const y = Math.floor(Math.random() * (height - 200 - plantSize) + 200);
      const name = plantList[Math.floor(Math.random() * plantList.length)];
      return { x, y, name };
    });
  },
  mounted() {
    const stage = this.$refs.stage.getStage();
    const container = this.$refs.canvasContainer;

    function resize() {
      const scale = container.offsetWidth / width;
      stage.width(width * scale);
      stage.height(height * scale);
      stage.scale({ x: scale, y: scale });
    }
    resize();
    window.addEventListener("resize", resize);
  },
};
</script>

<style scoped>
.garden-canvas-container {
  width: 100%;
  max-width: 800px;
  margin: 50px auto;
}
</style>
