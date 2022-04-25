<template>
  <div class="container main-view">
    <b-row class="my-2">
      <PlantCard v-for="name in plantNames" :key="name" :plantName="name" />
    </b-row>
    <b-row class="my-2">
      <b-col> <b-button pill variant="dark" size="lg">+</b-button> </b-col>
      <b-col></b-col>
      <b-col></b-col>
      <b-col>
        <b-button
          variant="outline-dark"
          size="lg"
          @click="$router.push('/garden')"
        >
          See Garden
        </b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import PlantCard from "@/components/PlantCard.vue";
import plantData from "@/data/fixtures.json";

const { plantList } = plantData;
const plantNames = Object.keys(plantList);
console.log(plantNames);

export default {
  name: "Recommendations",
  components: { PlantCard },
  data() {
    return {
      plants: plantData,
      plantNames,
    };
  },
};
</script>
