<template>
  <div>
    <img src="../assets/images/image-product-1.jpg" alt="" class="main-image" />
    <div class="thumbnail">
      <img
        src="../assets/images/image-product-1-thumbnail.jpg"
        alt=""
        class="thumbnail-image"
      />
      <img
        src="../assets/images/image-product-2-thumbnail.jpg"
        alt=""
        class="thumbnail-image"
      />
      <img
        src="../assets/images/image-product-3-thumbnail.jpg"
        alt=""
        class="thumbnail-image"
      />
      <img
        src="../assets/images/image-product-4-thumbnail.jpg"
        alt=""
        class="thumbnail-image"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageSection",
  data: function () {},
};
</script>

<style lang="scss" scoped>
div {
  margin-bottom: 1rem;
}
.main-image {
  height: 35rem;
  border-radius: 15px;
}

.thumbnail {
  margin-top: 2.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  &-image {
    height: 7rem;
    border-radius: 15px;
  }
}
</style>
