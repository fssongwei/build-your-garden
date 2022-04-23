<template>
  <b-container fluid class="main-view">
    <b-row class="my-2">
      <b-col class="px-1"> <h1> 3. Recommended Plants </h1> </b-col>
    </b-row>
    <b-row class="my-2">
      <plant-card plantName="Crocus"/>
      <plant-card plantName="Parsley"/>
      <plant-card plantName="Hibiscus"/>
      <plant-card plantName="Petunia"/>
    </b-row>
  </b-container>
</template>

<script>
import PlantCard from "@/components/PlantCard.vue";

export default {
  name: "Recommendations",
  components: { PlantCard },
};
</script>
