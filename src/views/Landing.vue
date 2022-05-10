<template>
  <div class="container">
    <div class="d-flex justify-content-center mx-4 my-4">
      <div
        class="d-flex justify-content-between align-itens-center"
        style="
          width: 100%;
          max-width: 450px;
          border: 1px solid rgba(0, 0, 0, 0.125);
          border-radius: 5px;
        "
      >
        <div
          class="d-flex flex-column align-items-center justify-content-center"
        >
          <b style="font-size: 24px"> Hello! </b>
          <span style="font-size: 18px; text-align: center" class="mt-4">
            My name is Flory. Nice to meet you!
          </span>
        </div>

        <img src="@/data/flowermascot.png" class="landing-mascot" />
      </div>
    </div>

    <b-row class="mx-4 my-4">
      <b-col class="text-center">
        <h3>Welcome to Flory's Garden!</h3>
      </b-col>
    </b-row>

    <b-row style="justify-content: center">
      <b-col cols="9">
        <p style="font-size: 20px">
          Flory's Garden is a personalized garden planning assistant that helps
          you create your dream garden with a Cornell University Playful Plants
          database!
        </p>
        <p style="font-size: 20px">
          Watch your garden come to life through our personalized plant
          recommendations and garden visualizer. We hope to make your garden
          planning process as customized and effortless as possible!
        </p>
      </b-col>
    </b-row>

    <b-row class="mx-5 my-4" style="justify-content: center">
      <b-col class="text-center">
        <router-link to="/">
          <b-button size="lg" variant="success"> START! </b-button>
        </router-link>
      </b-col>
    </b-row>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Landing",
  components: {},
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500&display=swap");

/* .container {
  max-width: 500px;
  min-width: 300px;
  max-height: 633px;
  min-height: 400px;
  font-family: 'Quicksand', sans-serif;
} */

.card-img-right {
  max-width: 15rem;
}

.landing-mascot {
  width: 250px;
}

@media screen and (max-width: 576px) {
  .landing-mascot {
    width: 150px;
    height: 150px;
  }
}
</style>
