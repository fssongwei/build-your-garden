<template>
  <div class="home-container">
    <!-- TODO: Implement the home page -->

    <div class="row-left">
      <div class="step-btn-group">
        <button class="circle-btn" @click="$router.push('/questions/set1/1')">
          <span>Step1</span>
        </button>
        <span>Plant Traits</span>
      </div>
    </div>

    <div class="row-center">
      <img src="/img/dialog.png" />
    </div>

    <div class="row-right">
      <div class="step-btn-group">
        <button class="circle-btn" @click="$router.push('/questions/set2/1')">
          <span>Step2</span>
        </button>
        <span>Garden Logistics</span>
      </div>
    </div>

    <div class="row-center">
      <img src="/img/anti-dialog.png" />
    </div>

    <div class="row-left">
      <div class="step-btn-group">
        <button class="circle-btn" @click="$router.push('/recommendations')">
          <span>Step3</span>
        </button>
        <span>See Plant List</span>
      </div>
    </div>

    <div class="row-center">
      <img src="/img/dialog.png" />
    </div>

    <div class="row-right">
      <div class="step-btn-group">
        <button class="circle-btn" @click="$router.push('/garden')">
          <span>Step4</span>
        </button>
        <span>See Your Garden</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  mounted() {
    if (window.sessionStorage.getItem("visited") === null) {
      window.sessionStorage.visited = true;
      this.$router.push("/landing");
    }
  },
};
</script>

<style>
.circle-btn {
  width: 88px;
  height: 90px;
  font-size: 16px;
  /* border-radius: 50%; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(/img/yellowflower.png);
  background-size:contain;
  /* background: #0dcaf0; */
  border: none;
}

.step-btn-group {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.home-container {
  width: 100%;
  max-width: 550px;
  margin: 0 auto;
  padding: 80px 50px;
}

.row-left {
  display: flex;
  justify-content: flex-start;
}

.row-right {
  display: flex;
  justify-content: flex-end;
}

.row-center {
  width: 100%;
  box-sizing: border-box;
  padding: 0 60px 10px 40px;
}

.row-center img {
  width: 100%;
}
</style>
