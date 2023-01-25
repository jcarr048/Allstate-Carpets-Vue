<template>
  <div id="app">
    <header>
      <NavBar />
    </header>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script>
import NavBar from './components/Nav.vue'
export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style src="./index.css">

</style>
