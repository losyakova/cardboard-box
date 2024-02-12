<template>
  <div class="card me-3 mb-3" style="width: 18rem">
    <div class="card-body">
      <h5 class="num">{{ number }}</h5>
      <p class="card-text">
        {{ text }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    number: {
      type: Number,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.card {
  transition: transform 300ms ease;
}
.card:hover {
  transform: scale(1.05) translateY(-5px);
  box-shadow: 8px 8px 8px 0px rgba(0, 0, 0, 0.048);
}
</style>
