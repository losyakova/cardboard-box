<template>
  <div class="carousel-item active">
    <img
      src="../assets/slider/1.jpg"
      class="d-block w-100"
      alt="Картинка с котиками"
    />
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    required: true,
  },
};
</script>
