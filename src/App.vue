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
export default {
  data() {
    return {
      uishow: true,
      factsList: null,
      catsInfoList: null,
    };
  },
  name: 'App',
  components: { AppNavbar, AppFooter },
  methods: {
    setUishow(value) {
      this.uishow = value;
    },
    getCatsInfo() {
      return this.catsInfoList;
    },
    setCatsInfo(value) {
      this.catsInfoList = value;
    },
    setFacts(value) {
      this.factsList = value;
    },
    getFacts() {
      return this.factsList;
    },
  },
  provide() {
    return {
      setUishow: this.setUishow,
      getCatsInfo: this.getCatsInfo,
      setCatsInfo: this.setCatsInfo,
      setFacts: this.setFacts,
      getFacts: this.getFacts,
    };
  },
  // computed: {
  //   facts: {
  //     get() {
  //       return this.factsList;
  //     },
  //     set(value) {
  //       this.factsList = value;
  //     },
  //   },
  //   catsInfo: {
  //     get() {
  //       return this.catsInfoList;
  //     },
  //     set(value) {
  //       this.catsInfoList = value;
  //     },
  //   },
  // },
};
</script>

<style scoped>
div [v-cloak] {
  display: none;
}
</style>
