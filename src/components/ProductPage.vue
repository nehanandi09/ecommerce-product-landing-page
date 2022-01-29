<template>
  <div class="section">
    <image-section></image-section>
    <div class="product-info">
      <product-info></product-info>
      <product-price></product-price>
      <product-button></product-button>
    </div>
  </div>
</template>

<script>
import ImageSection from "./ImageSection.vue";
import ProductInfo from "./ProductInfo.vue";
import ProductPrice from "./ProductPrice.vue";
import ProductButton from "./ProductButton.vue";

export default {
  name: "ProductPage",
  components: { ImageSection, ProductInfo, ProductPrice, ProductButton },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_main.scss";

.section {
  width: 80%;
  margin-top: 5rem;
  margin-left: 10rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.product-info {
  padding-left: 6rem;
  padding-right: 6rem;
}
</style>
