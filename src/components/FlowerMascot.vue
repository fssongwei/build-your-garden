<template>
  <div class="mascot-container">
    <!-- TODO: Implement Flower Mascot -->
    <div class="text-box" v-show="showText">
      {{ text }}
    </div>
    <img src="@/data/flowermascot.png" id="mascot" @click="toggleText" />
    <!-- Flowermascot Citation: self-drawn -->
  </div>
</template>

<script>
export default {
  name: "FlowerMascot",
  data() {
    return {
      showText: true,
    };
  },
  props: {
    text: {
      type: String,
      default: "Default Text",
    },
  },
  components: {},
  methods: {
    toggleText() {
      if (!this.text) return;
      this.showText = !this.showText;
      // if (!this.showText) {
      //   this.showText = true;
      //   setTimeout(() => {
      //     this.showText = false;
      //   }, 5000);
      // } else {
      //   this.showText = !this.showText;
      // }
    },
  },
  watch: {
    text(newText) {
      if (!newText) return;
      if (!this.showText) this.showText = true;
      // if (!this.showText) {
      //   this.showText = true;
      //   setTimeout(() => {
      //     this.showText = false;
      //   }, 5000);
      // }
    },
  },
};
</script>

<style scoped>
.mascot-container {
  display: flex;
  align-items: center;
}

.mascot-container img {
  max-width: 200px;
  height: auto;
}

@media screen and (max-width: 768px) {
  .mascot-container img {
    max-width: 150px;
    height: auto;
  }
}

@media screen and (max-width: 576px) {
  .mascot-container img {
    max-width: 100px;
    height: auto;
  }
}

.text-box {
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
}
</style>
