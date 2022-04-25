<template>
  <nav class="navbar">
    <div class="flex-item">
      <div class="logo">
        <img src="../assets/images/logo.svg" alt="logo" />
      </div>
      <ul class="flex-item flex-item_ul">
        <li v-for="(item, key) in navItems" v-bind:key="key">
          <a href="#">{{ item }}</a>
        </li>
      </ul>
    </div>
    <div class="flex-item">
      <div class="flex-items">
        <div v-if="cartItems > 0" class="circle">
          <span class="cart-value">{{ cartItems }}</span>
        </div>
        <img
          src="../assets/images/icon-cart.svg"
          alt="cart"
          class="cart"
          @click="showModal"
        />
      </div>
      <div class="flex-items avatar-img">
        <img
          src="../assets/images/image-avatar.png"
          alt="avatar"
          class="avatar"
          @click="showModal"
        />
      </div>
      <div class="show-cart-view" :class="isShowModal ? 'cart-view' : ''">
        <h2 class="cart-view-title">Cart</h2>
        <p v-if="cartItems === 0" class="cart-view-body">Your Cart is empty</p>
        <p v-else>
          <span> You have {{ cartItems }} items in your cart </span>
          <span> Total: $ {{ cartTotal }} </span>
        </p>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data: function () {
    return {
      navItems: ["Collections", "Men", "Women", "About", "Contact"],
      img: {
        logo: "../assets/images/logo.svg",
      },
      isShowModal: false,
    };
  },
  computed: {
    cartItems: function () {
      return this.$store.state.cart.cartCount;
    },
    cartTotal: function () {
      return this.$store.state.cart.cartCount * this.$store.state.product.price;
    },
  },
  methods: {
    showModal: function () {
      //set display to block to show modal
      this.isShowModal = !this.isShowModal;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_main.scss";
.navbar {
  width: 80%;
  margin: 2rem 10rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid $grayish-blue;

  img {
    cursor: pointer;
  }

  .flex-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: $dark-grayish-blue;
    align-items: center;

    .logo {
      margin-right: 4.5rem;
    }

    &_ul {
      list-style: none;

      li {
        margin-right: 2.5rem;
      }
      a {
        color: $dark-grayish-blue;
        text-decoration: none;
      }
      a:hover {
        color: $very-dark-blue;
      }
    }

    .flex-items {
      margin-right: 2.5rem;
      position: relative;

      .cart {
        z-index: 1;
      }

      .avatar {
        height: 3rem;
      }

      .circle {
        height: 20px;
        width: 20px;
        border-radius: 50%;
        background-color: orange;
        position: absolute;
        z-index: 4;
        left: 12px;
        top: -10px;
      }

      .cart-value {
        text-align: center;
        display: block;
        font-size: 0.75rem;
        margin: 0 auto;
        color: white;
        font-weight: bold;
      }
    }

    .avatar-img {
      position: relative;
      z-index: 5;
    }

    .show-cart-view {
      display: none;
    }

    .cart-view {
      display: inline;
      position: absolute;
      top: 107px;
      right: 180px;
      background-color: white;
      border-radius: 5px;
      padding: 10px;
      z-index: 10;
      min-width: 20rem;
      min-height: 180px;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
      font-weight: bold;

      &-title {
        color: $very-dark-blue;
        font-size: 1rem;
        padding: 0.5rem;
        border-bottom: 1px solid $grayish-blue;
      }

      &-body {
        padding: 0.5rem;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
      }

      span {
        letter-spacing: 2px;
        display: block;
        font-weight: 300;
      }
    }
  }
}
</style>
