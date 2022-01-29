<template>
  <div>
    <Navbar />
    <product-page></product-page>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import ProductPage from "./components/ProductPage.vue";

export default {
  name: "App",
  components: {
    Navbar,
    ProductPage,
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/_main.scss";
#app {
  font-family: "Kumbh Sans", sans-serif;
}
</style>
