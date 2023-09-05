<template>
  <main>
    <Nav />
    <router-view />
  </main>
  <!-- <div>
    <h1>This is the intro section, look at the figma design to settle on a landing</h1>
  </div>  -->
</template>

<script>
import Nav from './components/NavComp.vue';
export default {
  components: {
    Nav
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* nav {
  padding: 30px;
} */

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
