<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/landing">Landing</router-link> |
      <router-link to="/questions/set1/1">Question Set 1</router-link> |
      <router-link to="/questions/set2/1">Question Set 2</router-link> |
      <router-link to="/recommendations">Recommendations</router-link> |
      <router-link to="/garden">Garden</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
</style>
