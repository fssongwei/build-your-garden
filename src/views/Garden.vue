<template>
  <div>
    <!-- TODO: Implement the Garden page -->
    <h1>Garden Page</h1>
    <flower-mascot />
  </div>
</template>

<script>
// @ is an alias to /src
import FlowerMascot from "@/components/FlowerMascot.vue";

export default {
  name: "Garden",
  components: {
    FlowerMascot,
  },
};
</script>
