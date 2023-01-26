<template>
  <nav
    className="flex flex-row justify-center align-middle mx-auto my-auto md:flex-row space-x-3 bg-orange-200 bg-gradient-to-r from-yellow-100"
  >
    <div className="">
      <img
        className="w-20 h-20 rounded-md"
        src="../assets/aclogo.jpeg"
        alt=""
      />
    </div>
    <div className="md:flex md:flex-row">
      <router-link
        to="/"
        className="flex flex-col justify-center align-middle text-red-900 font-bold mx-4"
        >Home</router-link
      >
      <router-link
        to="/aboutus"
        className="flex flex-col justify-center align-middle text-red-900 font-bold"
        >About Us</router-link
      >
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style></style>
