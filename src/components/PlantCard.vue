<template>
  <b-col class="px-1">
    <b-card>
      <div style="display: flex; justify-content: flex-end" class="mb-4">
        <b-button size="sm" variant="primary" v-b-modal="`${id}-${plantName}`">
          <b-icon icon="info-circle"></b-icon>
          <span class="info-btn-text">&nbsp; Plant Details</span>
        </b-button>
      </div>
      <b-card-img
        :src="`/img/garden/plants/${plantName.toLowerCase()}.png`"
        alt="Plant Image"
        style="height: 100px; object-fit: contain"
      ></b-card-img>

      <b-card-text>
        {{ plantName }}
      </b-card-text>

      <b-modal :id="`${id}-${plantName}`" :title="plantName" ok-only>
        <p class="my-4">{{description}}</p>
      </b-modal>

      <div class="number-input">
        <div style="display: flex">
          <b-button variant="light" @click="del">
            <span v-if="quantity !== 1">-</span>
            <b-icon
              v-if="quantity === 1"
              icon="trash"
              style="color: red"
            ></b-icon>
          </b-button>
          <b-form-input
            type="number"
            v-model="quantity"
            required
          ></b-form-input>
          <b-button variant="light" @click="add">+</b-button>
        </div>
      </div>
    </b-card>
  </b-col>
</template>

<script>
import plantData from "@/data/fixtures.json";
export default {
  name: "PlantCard",
  props: {
    plantName: {
      type: String,
      default: "",
    },
    id: {
      type: Number,
    },
    quant: {
      type: Number,
    },
  },
  computed: {
    description() {
      return plantData.plantList[this.plantName].description;
    }
  },
  data() {
    return {
      plants: plantData,
      quantity: this.quant,
    };
  },
  methods: {
    add() {
      this.quantity++;
    },
    del() {
      if (this.quantity <= 0) return;
      this.quantity--;
    },
  },
  watch: {
    quantity: function (newQuantity, oldQuantity) {
      if (!`${newQuantity}`.match(/^\d+$/)) {
        this.$nextTick(() => {
          this.quantity = oldQuantity;
        });
      } else {
        this.$emit("change", { id: this.id, quantity: this.quantity });
      }
    },
  },
};
</script>

<style scoped>
@media screen and (max-width: 992px) {
  .info-btn-text {
    display: none;
  }
}

.number-input {
  display: flex;
  /* justify-content: center; */
  align-items: center;
  justify-content: center;
}
.number-input input {
  text-align: center;
}
.number-input input::-webkit-outer-spin-button,
.number-input input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.number-input button {
  font-weight: 900;
  font-family: "Courier New", Courier, monospace;
}
</style>
