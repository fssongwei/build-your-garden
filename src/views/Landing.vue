<template>
  <div>
    <!-- TODO: Implement the landing page -->
    <h1>Landing Page</h1>
    <flower-mascot />
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
