<template>
  <div id="app">
    <b-navbar type="light" variant="light" class="px-4">
      <b-navbar-brand>
        <b-button v-b-toggle.sidebar-1><b-icon-list></b-icon-list></b-button>
      </b-navbar-brand>

      <b-navbar-brand>{{ currentHeading }}</b-navbar-brand>
    </b-navbar>
    <div>
      <b-sidebar id="sidebar-1" title="AppName" shadow>
        <div class="sidebar-list">
          <b-list-group>
            <router-link
              v-for="route in routeData"
              :key="route.path"
              :to="route.path"
            >
              <b-list-group-item :active="isActive(route.path)">
                {{ route.title }}
              </b-list-group-item>
            </router-link>
          </b-list-group>
        </div>
      </b-sidebar>
    </div>
    <router-view />
  </div>
</template>

<script>
const routeData = [
  { title: "Landing", path: "/landing", heading: "Welcome!" },
  { title: "Home", path: "/", heading: "" },
  {
    title: "Plant Trait Preferences",
    path: "/questions/set1/1",
    heading: "① Plant Trait Preferences",
  },
  {
    title: "Garden Logistic Questions",
    path: "/questions/set2/1",
    heading: "② Garden Logistic Questions",
  },
  {
    title: "Rcoommendations",
    path: "/recommendations",
    heading: "③ Recommendations",
  },
  { title: "Garden", path: "/garden", heading: "④ Your Garden" },
];

const headings = [
  {
    path: "/questions/set1",
    heading: "① Plant Trait Preferences",
  },
  {
    path: "/questions/set2",
    heading: "② Garden Logistic Questions",
  },
  {
    path: "/recommendations",
    heading: "③ Recommendations",
  },
  { path: "/landing", heading: "Welcome!" },
  { path: "/garden", heading: "④ Your Garden" },
  { path: "/", heading: "" },
];

export default {
  name: "App",
  data() {
    return {
      routeData,
    };
  },
  computed: {
    questionSetId() {
      return this.$route.params.setId;
    },
    currentHeading() {
      for (let { path, heading } of headings) {
        if (this.$route.path.includes(path)) {
          return heading;
        }
      }
      return "";
    },
  },
  methods: {
    isActive(currentPath) {
      if (this.$route.path === currentPath) return true;
      if (currentPath.includes("/set1") && this.questionSetId === "1") {
        return true;
      }
      if (currentPath.includes("/set2") && this.questionSetId === "2") {
        return true;
      }
      return false;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.sidebar-list a {
  /* color: #2c3e50; */
  text-decoration: none;
}
</style>
