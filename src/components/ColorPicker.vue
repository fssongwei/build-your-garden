<template>
  <div class="color-picker">
    <input
      v-for="i in n"
      :key="i"
      type="color"
      class="color-picker-input"
      value="#90ee90"
    />
    <span class="add-button" @click="addColorSelector" v-if="n < limit">+</span>
  </div>
</template>

<script>
const COLOR_LIMIT = 5;
export default {
  name: "ColorPicker",
  data: function () {
    return {
      color: "#000000",
      n: 1,
      limit: COLOR_LIMIT,
    };
  },
  methods: {
    updateColor: function (e) {
      let newColor = e.target.value.toUpperCase();
      this.innerColor = newColor;
      this.$emit("colorChange", newColor);
    },
    addColorSelector() {
      if (this.n >= COLOR_LIMIT) return;
      this.n++;
    },
  },
};
</script>

<style>
.color-picker {
  display: flex;
  flex-wrap: wrap;
}

.add-button {
  width: 100px;
  height: 100px;
  border: 2px solid grey;
  border-radius: 50%;
  font-size: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: grey;
  margin-right: 30px;
  margin-bottom: 30px;
}

input[type="color"] {
  width: 100px;
  height: 100px;
  border: none;
  margin-right: 30px;
  margin-bottom: 30px;
  border-radius: 50%;
  overflow: hidden;
}

@media screen and (max-width: 576px) {
  input[type="color"] {
    width: 60px;
    height: 60px;
    margin-right: 15px;
    margin-bottom: 15px;
  }

  .add-button {
    width: 60px;
    height: 60px;
    font-size: 40px;
    margin-right: 15px;
    margin-bottom: 15px;
  }
}

@media screen and (max-width: 1024px) {
  input[type="color"] {
    width: 80px;
    height: 80px;
    margin-right: 20px;
    margin-bottom: 20px;
  }

  .add-button {
    width: 80px;
    height: 80px;
    font-size: 50px;
    margin-right: 20px;
    margin-bottom: 20px;
  }
}

input[type="color"]::-webkit-color-swatch {
  border: none;
  border-radius: 50%;
  padding: 0;
}

input[type="color"]::-webkit-color-swatch-wrapper {
  border: none;
  border-radius: 50%;
  padding: 0;
}
</style>
