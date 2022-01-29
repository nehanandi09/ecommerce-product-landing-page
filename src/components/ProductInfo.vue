<template>
  <div class="product-info_text">
    <p class="product-info_text_company">Sneaker Company</p>
    <h1 class="product-info_text_heading">Fall Limited Edition Sneakers</h1>
    <p class="product-info_text_paragraph">
      These low-profile sneakers are your perfect casual wear companion.
      Featuring a durable rubber outer sole, they’ll withstand everything the
      weather can offer.
    </p>
  </div>
</template>

<script>
export default {
  name: "ProductInfo",
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_main.scss";

.product-info_text {
  &_company {
    font-weight: 700;
    text-transform: uppercase;
    color: $orange;
    letter-spacing: 2px;
  }

  &_heading {
    margin-top: 2rem;
    font-size: 3rem;
    color: $very-dark-blue;
  }

  &_paragraph {
    margin-top: 1.5rem;
    color: $dark-grayish-blue;
    line-height: 1.8rem;
  }
}
</style>
