<template>
  <div class="d-flex flex-column min-vh-100 light-color">
    <app-navbar v-if="uishow"></app-navbar>
    <div class="container-fluid m-0 p-0 wrapper flex-grow-1">
      <router-view></router-view>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue';
import AppFooter from './components/AppFooter.vue';
import { mapGetters} from 'vuex';

export default {
  name: 'App',
  components: { AppNavbar, AppFooter },
  computed: mapGetters(['uishow']),
};
</script>

<style scoped>
div [v-cloak] {
  display: none;
}
</style>
