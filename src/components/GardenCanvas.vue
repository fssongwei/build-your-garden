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
          @click="handleClick(plant.name)"
          :key="index"
          :config="{
            image: plantImages[plant.name.toLowerCase()],
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
// const nPlants = 30;
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
      recommendations: [],
    };
  },
  created() {
    let storedRecList = sessionStorage.getItem("recommendations");
    if (storedRecList) {
      this.recommendations = JSON.parse(storedRecList);
    }

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
    let list = [];
    for (let { name, quantity } of this.recommendations) {
      for (let i = 0; i < quantity; i++) {
        // To make the plants be fixed in the trapezoid garden
        let y = Math.floor(Math.random() * (height - 100 - plantSize)) + 100;
        let paddingX = (width - (y + 200)) / 2;
        let range = width - paddingX * 2;
        let x = Math.floor(Math.random() * range) + paddingX;
        if (x < 0) x = 0;
        list.push({ x, y, name });
      }
    }
    this.list = list;
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
  methods: {
    handleDragStart() {
      this.isDragging = true;
    },
    handleDragEnd() {
      this.isDragging = false;
    },
    handleClick(name) {
      this.$emit("click-plant", name);
    },
    downloadImage() {
      var imageData = this.$refs.stage.getStage().toDataURL({ pixelRatio: 3 });

      // download file
      let aLink = document.createElement("a");
      aLink.download = "garden.png";
      aLink.href = imageData;
      document.body.appendChild(aLink);
      aLink.click();
      document.body.removeChild(aLink);
    },
  },
};
</script>

<style scoped>
.garden-canvas-container {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}
</style>
