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

      <b-row class="mx-4">
        <b-col class="text-center">
          <h3>Welcome to [Appname]!</h3>
        </b-col>
      </b-row>

      <b-row class="mx-4">
        <b-col class="mx-3 text-center">
          <p style="font-size:20px">[Appname] is a personalized garden planning assistant that uses a Cornell University database to help you create your dream garden! </p>
          <p style="font-size:20px"> Bring your garden to life through our personalized plant recommendations and garden visualizer.</p>
        </b-col>
      </b-row>

      <b-row class="mx-4">
        <b-col>
        </b-col>
        <b-col class="p-2" cols="auto">
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
  max-width: 640px;
  min-width: 292px;
  max-height: 633px;
  min-height: 400px;
}

.card-img-right {
 max-width: 15rem;
}
</style>
