<template>
  <div class="mascot-container">
    <!-- TODO: Implement Flower Mascot -->
    <div class="text-box" v-show="showText">
      {{ text }}
    </div>
    <img
      src="@/data/flowermascot.png"
      style="max-width: 250px; height: auto"
      id="mascot"
      @click="toggleText"
    />
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
      if (!this.showText) {
        this.showText = true;
        setTimeout(() => {
          this.showText = false;
        }, 5000);
      } else {
        this.showText = !this.showText;
      }
    },
  },
  watch: {
    text(newText) {
      if (!newText) return;
      if (!this.showText) {
        this.showText = true;
        setTimeout(() => {
          this.showText = false;
        }, 5000);
      }
    },
  },
};
</script>

<style scoped>
.mascot-container {
  display: flex;
  align-items: flex-start;
}

.text-box {
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
  margin-top: 30px;
}
</style>
