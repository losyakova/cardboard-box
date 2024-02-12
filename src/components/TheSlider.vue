<template>
  <div class="container d-flex justify-content-center">
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-bs-ride="true"
    >
      <div class="carousel-indicators">
        <button
          v-for="(img, index) in content"
          :key="index"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          :data-bs-slide-to="index"
          class="active"
          aria-current="true"
          :aria-label="'Слайд' + index + 1"
        ></button>
      </div>

      <div class="carousel-inner">
        <div
          class="carousel-item"
          :class="{ active: index === 0 }"
          v-for="(img, index) in content"
          :key="index"
        >
          <img
            :src="require(`../assets/slider/${img}`)"
            class="d-block w-100"
            alt="Картинка с котиками"
          />
        </div>
      </div>
      <!-- кнопку вперёд - назад  -->
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Назад</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Вперёд</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.carousel {
  max-height: 600px;
  height: auto;
  width: 100%;
  margin-top: 30px;
  margin-bottom: 30px;
  max-width: 1000px;
}
.carousel-inner img {
  max-height: 600px;
  height: auto;
  width: 100%;
  max-width: 1000px;
}
</style>
