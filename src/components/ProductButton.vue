<template>
  <div class="button-section">
    <div class="item-count">
      <button
        class="item-count-button item-count-remove"
        @click.prevent="removeItem"
      >
        <img src="../assets/images/icon-minus.svg" alt="" />
      </button>
      <span class="item-count_items">{{ cartitems }}</span>
      <button class="item-count-button item-count-add" @click.prevent="addItem">
        <img src="../assets/images/icon-plus.svg" alt="" />
      </button>
    </div>
    <button class="cta-button">
      <img src="../assets/images/icon-cart.svg" alt="" class="cart-image" />
      Add to cart
    </button>
  </div>
</template>

<script>
export default {
  name: "ProductButton",
  data: function () {
    return {
      cartitems: 0,
    };
  },
  watch: {
    cartitems: function () {
      this.cartitems = this.cartitems > 0 ? this.cartitems : 0;
    },
  },
  methods: {
    addItem() {
      this.cartitems++;
    },
    removeItem() {
      this.cartitems--;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_main.scss";
.button-section {
  .item-count {
    display: inline-block;
    margin-top: 1.5rem;
    background-color: $light-grayish-blue;
    padding: 15px;
    font-weight: bold;
    border-radius: 10px;
    align-items: center;

    &-button {
      background-color: transparent;
      border: none;
      cursor: pointer;
    }

    &_items {
      margin-right: 2.75rem;
      margin-left: 2.75rem;
    }
  }

  .cta-button {
    margin-left: 1rem;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 3.5rem;
    padding-right: 3.5rem;
    border: none;
    background-color: $orange;
    border-radius: 10px;
    color: $white;
    font-size: 1rem;
    font-weight: bold;

    .cart-image {
      height: 16px;
      margin-right: 10px;
    }
  }

  .cta-button:hover {
    cursor: pointer;
    background-color: rgba($orange, 0.8);
  }
}
</style>
