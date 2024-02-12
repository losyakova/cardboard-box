<template>
  <div class="row justify-content-center">
    <app-card
      v-for="item in content"
      :key="item.id"
      class="me-2 mb-2"
      :image="item.img"
    >
      <template #title>
        <h3>
          <a
            :data-bs-target="idModal"
            data-bs-toggle="modal"
            @click="clickToTitle(item)"
            >{{ item.name }}</a
          >
        </h3>
      </template>
    </app-card>
  </div>
</template>

<script>
import AppCard from '@/components/AppCard.vue';
export default {
  emits: ['showModal'],
  methods: {
    clickToTitle(i) {
      this.$emit('showModal', i);
    },
  },
  components: { AppCard },
  props: {
    content: Array,
    idModal: String,
  },
};
</script>

<style scoped>
h3 {
  margin-top: 0px;
}
a {
  cursor: pointer;
}
</style>
