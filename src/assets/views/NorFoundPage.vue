<template>
  <div class="container text-center">
    <h1 class="num">404</h1>
    <h1>Страница не найдена</h1>
    <img
      class="rounded-5"
      src="https://cs12.pikabu.ru/post_img/big/2021/08/01/6/1627811881184572334.jpg"
      alt=""
      width="300px"
    /><br />
    <router-link to="/main">На главную</router-link>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  methods: mapMutations(['setUishow']),
  mounted() {
    this.setUishow(false);
  },
  unmounted() {
    this.setUishow(true);
  },
};
</script>

<style scoped>
a {
  font-size: 20px;
}
</style>
