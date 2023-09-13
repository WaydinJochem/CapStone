<template>
  <main>
    <Nav />
    <router-view />
    <Footer/>
  </main>
</template>

<script>
import Nav from './components/NavComp.vue';
import Footer from './components/Footer.vue';
export default {
  components: {
    Nav,
    Footer
  }
}
</script>

<style>
body {
  margin: 0;
  background: linear-gradient(aqua, lime, yellowgreen);
  background-attachment: fixed;
  background-repeat:no-repeat ;
}

#app {

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  cursor:default;
  margin-top:10%;
}

/* router-view {
  height: 100%;
} */


nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav router-link-exact-active {
  color: #42b983;
}
</style>
