<template>
  <div class="card p-0 mb-2" style="width: 20rem">
    <div v-if="image !== null">
      <img
        :src="image !== null ? require(`../assets/img/${image}`) : ''"
        class="card-img-top"
        alt="Событие"
      />
    </div>
    <div class="card-body">
      <slot name="abovetitle"></slot>
      <slot name="title"></slot>
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    smallText: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: 'Заголовок',
    },
    text: {
      type: String,
      default: 'Текст карточки',
    },
    image: {
      type: String,
      default: null,
    },
  },
};
</script>

<style scoped>
p {
  font-size: 22px;
}
.card {
  transition: transform 300ms ease;
}
.card:hover {
  transform: scale(1.03) translateY(-5px);
  /* background: #edede9; */
  /* border: 2px solid rgb(182, 181, 181); */
  /* border: 2px solid white; */
  box-shadow: 8px 8px 8px 0px rgba(0, 0, 0, 0.048);
}
</style>
