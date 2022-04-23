<template>
  <div>
    <!-- TODO: Implement the landing page -->
    <b-container>
      <b-row>
        <b-col cols=1>
          <!-- <menu/> -->
        </b-col>
      </b-row>

      <b-row class="mx-4">
        <b-col cols=4>
          <div style="border: 2px solid black; border-radius: 25px; box-shadow: 2px 2px 2px 1.5px #B6B6B6; margin-left: 60px; margin-top: 10px; width: 100%; height: 140px">
            <h5 style="margin-top: 20px; text-align: center;">Hello!</h5>
            <p style="padding:1px; text-align: center;">My name is Flory. <br> Nice to meet you!</p>
          </div>
        </b-col>
        <b-col cols=1></b-col>
        <b-col class="mx-4 px-1" cols=5>
          <flower-mascot/>
        </b-col>
      </b-row>

      <b-row class="mx-4">
        <b-col>
          <h3>Welcome to [Appname]!</h3>
        </b-col>
      </b-row>

      <b-row class="mx-4">
        <b-col align-self="stretch">
          <p>[Appname] is a personalized garden planning assistant that uses a Cornell University database to help you create your dream garden! </p>
          <p> Bring your garden to life through our personalized plant recommendations and garden visualizer.</p>
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
import FlowerMascot from "@/components/FlowerMascot.vue";

export default {
  name: "Landing",
  components: {
    FlowerMascot,
  },
};
</script>
<style scoped>
.container {
  max-width: 640px;
  min-width: 292px;
  max-height: 633px;
  min-height: 400px;
}
</style>
