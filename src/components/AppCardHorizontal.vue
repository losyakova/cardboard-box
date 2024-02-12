<template>
  <div class="card mb-3 light-color border-0">
    <div class="row">
      <div class="col-md-4" v-if="!imgIsRight">
        <img
          :src="require(`../assets/img/${img}`)"
          class="img-fluid rounded"
          :alt="title"
          :width="width"
        />
      </div>
      <div class="col-md-8">
        <div class="card-body h-100 p-0">
          <h3
            class="card-title"
            :class="{ 'text-md-end text-center': imgIsRight }"
          >
            {{ title }}
          </h3>
          <slot></slot>
        </div>
      </div>
      <div class="col-md-4" v-if="imgIsRight">
        <img
          :src="require(`../assets/img/${img}`)"
          class="img-fluid rounded"
          :alt="title"
          :width="width"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Заголовок',
    },
    img: {
      type: String,
      default: 'no-img.png',
    },
    imgIsRight: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: '400px',
    },
  },
};
</script>

<style></style>
