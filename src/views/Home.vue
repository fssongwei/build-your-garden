<template>
  <div class="container">
    <!-- TODO: Implement the home page -->
    <h1>Home</h1>

    <b-container class="bv-grid-row">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-4 col-md-offset-2">
            <button
              type="button"
              class="btn btn-info btn-circle btn-lg"
              @click="$router.push('/questions/set1/1')"
            >
              Step 1
            </button>
            <p>Plant Traits</p>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4 col-md-offset-5">
            <button
              type="button"
              class="btn btn-info btn-circle btn-lg"
              @click="$router.push('/questions/set2/1')"
            >
              Step 2
            </button>
            <p>Garden logistics</p>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4 col-md-offset-3">
            <button
              type="button"
              class="btn btn-info btn-circle btn-lg"
              @click="$router.push('/recommendations')"
            >
              Step 3
            </button>
            <p>See plant list</p>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4 col-md-offset-6">
            <button
              type="button"
              class="btn btn-info btn-circle btn-lg"
              @click="$router.push('/garden')"
            >
              Step 4
            </button>
            <p>See Your Garden</p>
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src

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
.col-md-4 {
  float: right;
}
.left {
  display: inline;
  float: left;
}
.col-md-offset-3 {
  margin-left: 25%;
}
.col-md-offset-5 {
  margin-left: 42.66%;
}
.col-md-offset-6 {
  margin-left: 50%;
}

.col-md-offset-2 {
  margin-left: 16.66%;
}
.right {
  float: right;
}
.btn-circle {
  width: 30px;
  height: 30px;
  text-align: center;
  padding: 20px 0;
  font-size: 12px;
  line-height: 1.428571429;
  border-radius: 15px;
}
.btn-circle.btn-lg {
  width: 80px;
  height: 80px;
  padding: 20px 16px;
  font-size: 18px;
  line-height: 1.33;
  border-radius: 50px;
}
</style>
