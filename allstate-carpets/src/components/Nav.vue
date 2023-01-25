<template>
  <nav className="flex flex-col justify-center mx-auto my-auto md:flex-row">
    <div> <img className="w-2/3 h-2/3" src="../assets/aclogo.jpeg" alt=""></div>
    <router-link to="/">Home</router-link>
    <router-link to="/aboutus">About Us</router-link>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style></style>
