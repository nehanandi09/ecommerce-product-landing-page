<template>
  <div class="price">
    <h2 class="price_heading">$125.00</h2>
    <span class="price_breadcrumb">50%</span>
    <span class="price_original"> $250.00</span>
  </div>
</template>

<script>
export default {
  name: "ProductPrice",
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_main.scss";

.price {
  display: inline-block;

  &_heading {
    margin-top: 1.5rem;
    color: $very-dark-blue;
    font-size: 2rem;
    letter-spacing: 1.5px;
    display: inline-block;
  }

  &_breadcrumb {
    margin-left: 15px;
    padding: 5px;
    border-radius: 5px;
    font-size: 15px;
    background-color: $pale-orange;
    color: $orange;
    font-weight: bold;
    position: relative;
    bottom: 5px;
  }

  &_original {
    display: block;
    margin-top: 10px;
    color: $grayish-blue;
    text-decoration: line-through;
  }
}
</style>
