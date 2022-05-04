<template>
  <div class="container">
    <!-- TODO: Implement the landing page -->
    <b-container>
      <b-row class="mx-4 my-3" style="display: flex; flex-direction: row; justify-content: center">
        <b-col style="width: 100%; max-width: 30rem;">
          <b-card class="text-center" img-src="img/icons/flowermascot.png" img-alt="mascot image" img-right>
            <b-card-text class="mt-4" style="font-size: 24px"> <b>Hello!</b> </b-card-text>
            <b-card-text style="font-size: 18px"> My name is Flory. Nice to meet you! </b-card-text>
          </b-card>
        </b-col>
      </b-row>

      <b-row class="mx-4 my-4">
        <b-col class="text-center">
          <h3>Welcome to Flory's Garden!</h3>
        </b-col>
      </b-row>

      <b-row style="justify-content: center">
        <b-col cols="9">
          <p style="font-size:20px">Flory's Garden is a personalized garden planning assistant that helps you create your dream garden with a Cornell University Playful Plants database! </p>
          <p style="font-size:20px"> Watch your garden come to life through our personalized plant recommendations and garden visualizer. We hope to make your garden planning process as customized and efffortless as possible!</p>
        </b-col>
      </b-row>

      <b-row class="mx-5 my-4" style="justify-content: center">
        <b-col class="text-center">
            <router-link to="/">
              <b-button size="lg" variant="success"> START! </b-button>
            </router-link>
        </b-col>
      </b-row>

    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Landing",
  components: {

  },
};
</script>
<style>
.container {
  max-width: 500px;
  min-width: 300px;
  max-height: 633px;
  min-height: 400px;
}

.card-img-right {
 max-width: 15rem;
}
</style>
