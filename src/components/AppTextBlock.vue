<template>
  <div class="container p-md-5 p-1 align-items-center text-center">
    <h2>{{ title }}</h2>
    <p><slot></slot></p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Заголовок',
    },
  },
};
</script>
