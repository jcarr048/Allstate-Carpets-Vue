<template>
  <div>
    <NavBar />
    <AboutUs />
  </div>
</template>

<script>
import AboutUs from './components/Aboutus.vue'
import NavBar from './components/Nav.vue'
export default {
  name: 'App',
  components: {
    AboutUs,
    NavBar
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
  margin-top: 60px;
}
</style>
