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
        <div class="circle"></div>
        <img src="../assets/images/icon-cart.svg" alt="cart" class="cart" />
      </div>
      <div class="flex-items">
        <img
          src="../assets/images/image-avatar.png"
          alt="avatar"
          class="avatar"
        />
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
    };
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
        height: 18px;
        width: 18px;
        border-radius: 50%;
        background-color: orange;
        position: absolute;
        z-index: 4;
        left: 12px;
        top: -10px;
      }
    }
  }
}
</style>
