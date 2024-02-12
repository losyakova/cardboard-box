<template>
  <div class="container">
    <div class="row justify-content-around">
      <app-card v-for="item in content" :key="item.id" :image="item.img">
        <template #abovetitle
          ><small>{{ item.date }}</small>
        </template>
        <template #title>
          <h3>{{ item.title }}</h3></template
        >
        <template #text>
          <p>{{ item.text }}</p>
        </template>
      </app-card>
    </div>
  </div>
</template>

<script>
import AppCard from './AppCard.vue';
export default {
  props: {
    content: {
      type: Array,
      required: true,
    },
  },
  components: { AppCard },
};
</script>

<style></style>
