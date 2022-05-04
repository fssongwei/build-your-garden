<template>
  <div class="container">
    <b-row class="mt-2" style="margin-bottom: 150px">
      <b-col
        v-for="plant in recommendations"
        :key="plant.id"
        cols="6"
        md="4"
        lg="3"
        class="py-2 py-md-3"
      >
        <PlantCard
          :plantName="plant.name"
          :id="plant.id"
          @change="handlePlantChange"
          :quant="plant.quantity"
        />
      </b-col>
    </b-row>
    <div
      class="d-flex justify-content-between align-items-center footer px-lg-5 px-md-4 px-3 py-4"
    >
      <b-button
        size="lg"
        variant="primary"
        style="border-radius: 50%"
        v-b-modal="'add-plant'"
      >
        +
      </b-button>
      <b-button size="lg" variant="primary" @click="$router.push('/garden')">
        See Garden &gt;
      </b-button>
    </div>

    <!-- Add Plants -->
    <div>
      <b-modal
        id="add-plant"
        title="Add Plant"
        ok-only
        @ok="addPlant"
        @show="resetPlant"
        @hidden="resetPlant"
        ref="add-plant"
      >
        <p class="my-4" v-if="avaliablePlants.length === 0">
          No more plants avaliable for recommendations. Please check later.
        </p>
        <form v-if="avaliablePlants.length > 0" ref="form">
          <b-form-select
            class="form-control my-3"
            :options="avaliablePlantOptions"
            v-model="selectedPlant"
          ></b-form-select>
          <b-card-img
            v-if="selectedPlant"
            :src="`/img/garden/plants/${selectedPlant}.png`"
            alt="Plant Image"
            style="height: 100px; object-fit: contain"
          ></b-card-img>
          <b-form-input
            v-model="quantity"
            type="number"
            placeholder="Quantity"
            required
          ></b-form-input>
        </form>
      </b-modal>
    </div>
  </div>
</template>

<script>
import PlantCard from "@/components/PlantCard.vue";
import plantData from "@/data/fixtures.json";

const { plantList } = plantData;
const plantNames = Object.keys(plantList);

const recommendations = plantNames.map((name, id) => {
  return {
    name,
    quantity: Math.floor(Math.random() * 10) + 2,
    id,
  };
});

export default {
  name: "Recommendations",
  components: { PlantCard },
  data() {
    return {
      recommendations: [],
      selectedPlant: null,
      quantity: null,
    };
  },
  computed: {
    avaliablePlants() {
      let existedPlants = new Set(this.recommendations.map((p) => p.name));
      return plantNames.filter((plant) => !existedPlants.has(plant));
    },
    avaliablePlantOptions() {
      let options = [{ value: null, text: "Select a plant" }].concat(
        this.avaliablePlants.map((plant) => ({
          text: plant,
          value: plant,
        }))
      );
      return options;
    },
  },
  methods: {
    handlePlantChange({ id, quantity }) {
      if (quantity === 0) {
        this.recommendations = this.recommendations.filter(
          (plant) => plant.id !== id
        );
      } else {
        let newRecList = [...this.recommendations];
        for (let plant of newRecList) {
          if (plant.id === id) {
            plant.quantity = parseInt(quantity);
          }
        }
        this.recommendations = newRecList;
      }
    },
    addPlant(e) {
      if (!this.$refs.form) return;
      e.preventDefault();

      const valid = this.$refs.form.reportValidity();
      if (!valid) {
        return;
      }

      this.recommendations.push({
        name: this.selectedPlant,
        quantity: parseInt(this.quantity),
      });

      this.$nextTick(() => {
        this.$refs["add-plant"].hide();
      });
    },
    resetPlant() {
      this.selectedPlant = null;
      this.quantity = null;
    },
    exportRecList() {
      let content = `${"Plant".padEnd(15)}Quantity\n`;
      for (let plant of this.recommendations) {
        content += `${plant.name.padEnd(15)}${plant.quantity}\n`;
      }

      // download file
      let aLink = document.createElement("a");
      aLink.download = "Recommendations.txt";
      aLink.style.display = "none";
      let blob = new Blob([content]);
      aLink.href = URL.createObjectURL(blob);
      document.body.appendChild(aLink);
      aLink.click();
      document.body.removeChild(aLink);
    },
  },
  watch: {
    recommendations(newRecList) {
      sessionStorage.setItem("recommendations", JSON.stringify(newRecList));
    },
  },
  mounted() {
    let storedRecList = sessionStorage.getItem("recommendations");
    if (storedRecList) {
      this.recommendations = JSON.parse(storedRecList);
    } else {
      this.recommendations = recommendations;
    }
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500&display=swap');

.container {
  font-family: 'Quicksand', sans-serif;
}

.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  background: white;
}
</style>
